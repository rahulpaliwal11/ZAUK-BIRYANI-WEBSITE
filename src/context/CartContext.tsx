import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { getDeliveryFeeByDistance, DeliveryTier, DeliveryCalculationResult } from '../data/deliveryConfig';

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
  deliveryDistance: number;
  deliveryLocationName: string;
  updateDeliveryDistance: (distanceKm: number, locationName?: string) => void;
  deliveryCalculation: DeliveryCalculationResult;
  deliveryTier: DeliveryTier | null;
  deliveryFee: number;
  isBeyond10Km: boolean;
  discountAmount: number;
  appliedCoupon: string | null;
  applyCoupon: (code?: string) => { success: boolean; message: string };
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
      const saved = localStorage.getItem('zouk_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(() => {
    try {
      return localStorage.getItem('zouk_coupon') || null;
    } catch {
      return null;
    }
  });

  const [deliveryDistance, setDeliveryDistance] = useState<number>(() => {
    try {
      const savedDist = localStorage.getItem('zouk_delivery_distance');
      return savedDist ? parseFloat(savedDist) : 2.5; // Default 2.5 KM (2-3 KM slab -> ₹30)
    } catch {
      return 2.5;
    }
  });

  const [deliveryLocationName, setDeliveryLocationName] = useState<string>(() => {
    try {
      return localStorage.getItem('zouk_delivery_loc') || 'Greater Noida';
    } catch {
      return 'Greater Noida';
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  useEffect(() => {
    try {
      localStorage.setItem('zouk_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem('zouk_coupon', appliedCoupon);
      } else {
        localStorage.removeItem('zouk_coupon');
      }
    } catch {
      // ignore
    }
  }, [appliedCoupon]);

  const updateDeliveryDistance = (distanceKm: number, locationName?: string) => {
    const safeDist = Math.max(0, distanceKm);
    setDeliveryDistance(safeDist);
    if (locationName) {
      setDeliveryLocationName(locationName);
      try {
        localStorage.setItem('zouk_delivery_loc', locationName);
      } catch {
        // ignore
      }
    }
    try {
      localStorage.setItem('zouk_delivery_distance', safeDist.toString());
    } catch {
      // ignore
    }
  };

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

  // Centralized Delivery Charge Calculation based on distance tier
  const deliveryCalculation = getDeliveryFeeByDistance(deliveryDistance);
  const { fee: calculatedFee, tier: deliveryTier, isBeyond10Km } = deliveryCalculation;
  const deliveryFee = subtotal > 0 ? (calculatedFee !== null ? calculatedFee : 0) : 0;

  // Discount calculation: 10% OFF on orders of ₹499 or more
  const discountAmount = subtotal >= 499 ? Math.round(subtotal * 0.10) : 0;

  const grandTotal = Math.max(0, subtotal - discountAmount) + deliveryFee;

  const applyCoupon = (_rawCode?: string): { success: boolean; message: string } => {
    if (subtotal >= 499) {
      setAppliedCoupon('10% OFF');
      showToast('10% OFF applied on orders above ₹499!');
      return { success: true, message: '10% OFF applied on orders above ₹499!' };
    }
    return { success: false, message: '10% OFF requires a minimum order of ₹499.' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Offer removed.');
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
      if (discountAmount > 0) {
        message += `🎟️ *10% Discount (Orders above ₹499):* -₹${discountAmount}\n`;
      }
      if (isBeyond10Km) {
        message += `🚚 *Delivery:* Beyond 10 KM (Please contact restaurant to confirm)\n`;
      } else if (deliveryFee > 0) {
        message += `🚚 *Delivery Charge (${deliveryTier?.distanceLabel || 'Standard'}):* ₹${deliveryFee}\n`;
      } else {
        message += `🚚 *Delivery:* ₹0\n`;
      }
      message += `👑 *Total Amount Payable:* ₹${grandTotal}\n`;
    }

    if (customerName) {
      message += `\n👤 *Guest Name:* ${customerName}`;
    }
    if (address) {
      message += `\n📍 *Delivery Address:* ${address}`;
    } else if (deliveryLocationName) {
      message += `\n📍 *Delivery Location:* ${deliveryLocationName} (~${deliveryDistance} km)`;
    }
    if (notes) {
      message += `\n📝 *Special Instructions:* ${notes}`;
    }

    const estTime = deliveryTier?.estimatedTime || '35–45 mins';
    message += `\n\nPlease confirm order acceptance & estimated delivery time (${estTime}). Thank you!`;

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
        deliveryDistance,
        deliveryLocationName,
        updateDeliveryDistance,
        deliveryCalculation,
        deliveryTier,
        deliveryFee,
        isBeyond10Km,
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
