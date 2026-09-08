import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface ToastInfo {
  id: string;
  message: string;
  type?: 'success' | 'info';
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  discountAmount: number;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  grandTotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  toasts: ToastInfo[];
  showToast: (message: string, type?: 'success' | 'info') => void;
  removeToast: (id: string) => void;
  generateWhatsAppOrderUrl: (customerName?: string, address?: string, notes?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('zauk_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(() => {
    try {
      return localStorage.getItem('zauk_coupon') || null;
    } catch {
      return null;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('zauk_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem('zauk_coupon', appliedCoupon);
      } else {
        localStorage.removeItem('zauk_coupon');
      }
    } catch {
      // ignore
    }
  }, [appliedCoupon]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addItem = (item: MenuItem, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { item, quantity }];
    });
    showToast(`Added ${item.name} to your Royal Feast!`);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.item.price * i.quantity, 0);
  const deliveryFee = subtotal > 0 && subtotal < 500 ? 40 : 0;

  // Calculate discount based on applied coupon
  let discountAmount = 0;
  if (appliedCoupon) {
    const code = appliedCoupon.toUpperCase().trim();
    if (code === 'ZAUKROYAL' || code === 'ZOUKROYAL') {
      if (subtotal >= 999) {
        discountAmount = Math.min(300, Math.round(subtotal * 0.20));
      }
    } else if (code === 'FIRSTDUM') {
      if (subtotal >= 500) {
        discountAmount = 150;
      }
    } else if (code === 'MIDWEEKFEAST') {
      if (subtotal >= 750) {
        discountAmount = 120;
      }
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount) + deliveryFee;

  const applyCoupon = (rawCode: string): { success: boolean; message: string } => {
    const code = rawCode.toUpperCase().trim();
    if (!code) {
      return { success: false, message: 'Please enter a valid coupon code.' };
    }

    if (code === 'ZAUKROYAL' || code === 'ZOUKROYAL') {
      if (subtotal < 999) {
        return { success: false, message: 'ZAUKROYAL requires minimum cart value of ₹999.' };
      }
      setAppliedCoupon(code);
      showToast(`👑 Promo ${code} applied! 20% discount added.`);
      return { success: true, message: '20% Royal Discount Applied!' };
    }

    if (code === 'FIRSTDUM') {
      if (subtotal < 500) {
        return { success: false, message: 'FIRSTDUM requires minimum cart value of ₹500.' };
      }
      setAppliedCoupon(code);
      showToast(`✨ Promo ${code} applied! Flat ₹150 OFF added.`);
      return { success: true, message: 'Flat ₹150 Discount Applied!' };
    }

    if (code === 'MIDWEEKFEAST') {
      if (subtotal < 750) {
        return { success: false, message: 'MIDWEEKFEAST requires minimum cart value of ₹750.' };
      }
      setAppliedCoupon(code);
      showToast(`🔥 Promo ${code} applied! Free Kebab Platter discount added.`);
      return { success: true, message: 'Midweek Special Discount Applied!' };
    }

    return { success: false, message: 'Invalid coupon code. Try ZAUKROYAL or FIRSTDUM.' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Promo code removed.');
  };

  const generateWhatsAppOrderUrl = (
    customerName?: string,
    address?: string,
    notes?: string
  ): string => {
    const cleanNumber = RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '');
    
    let message = `👑 *ORDER REQUEST - ${RESTAURANT_INFO.name}* 👑\n\n`;
    message += `Greetings! I would like to place an order from your Royal Menu:\n\n`;
    message += `📋 *ORDERED ITEMS:*\n`;

    if (items.length === 0) {
      message += `• (Direct Inquiry / Custom Feast Request)\n`;
    } else {
      items.forEach((ci) => {
        message += `• ${ci.quantity}x ${ci.item.name} (₹${ci.item.price * ci.quantity})\n`;
      });
      message += `\n💰 *Subtotal:* ₹${subtotal}\n`;
      if (discountAmount > 0 && appliedCoupon) {
        message += `🎟️ *Promo Discount (${appliedCoupon}):* -₹${discountAmount}\n`;
      }
      if (deliveryFee > 0) {
        message += `🚚 *Delivery Fee:* ₹${deliveryFee}\n`;
      } else {
        message += `🚚 *Delivery:* FREE (Royal Perk)\n`;
      }
      message += `👑 *Total Amount Payable:* ₹${grandTotal}\n`;
    }

    if (customerName) {
      message += `\n👤 *Guest Name:* ${customerName}`;
    }
    if (address) {
      message += `\n📍 *Delivery Address:* ${address}`;
    }
    if (notes) {
      message += `\n📝 *Special Instructions:* ${notes}`;
    }

    message += `\n\nPlease confirm order acceptance & estimated delivery time. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        discountAmount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        grandTotal,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        toasts,
        showToast,
        removeToast,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
