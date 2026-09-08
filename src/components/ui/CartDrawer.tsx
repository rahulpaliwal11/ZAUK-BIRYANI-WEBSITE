import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { Logo } from './Logo';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  MapPin, 
  User, 
  FileText,
  Truck,
  Tag,
  Check
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    discountAmount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    grandTotal,
    generateWhatsAppOrderUrl,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const url = generateWhatsAppOrderUrl(customerName, address, notes);
    window.open(url, '_blank');
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponInput('');
    }
  };

  const freeDeliveryThreshold = 500;
  const amountToFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const deliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-wine-950 border-l border-gold-500/30 text-cream-100 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-wine-800 flex items-center justify-between bg-wine-900/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <div>
                <h2 className="font-serif text-base font-bold text-cream-100 flex items-center gap-2">
                  Your Royal Dastarkhwan
                </h2>
                <p className="text-[11px] text-gold-300/80">
                  {items.length === 0 ? 'Empty feast tray' : `${items.length} unique delicacies added`}
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-xl text-cream-400 hover:text-cream-100 hover:bg-wine-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          {items.length > 0 && (
            <div className="px-5 py-3 bg-wine-900 border-b border-wine-800">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-cream-200">
                  <Truck className="w-3.5 h-3.5 text-gold-400" />
                  {amountToFreeDelivery === 0 ? (
                    <span className="text-emerald-400 font-bold">🎉 You unlocked FREE Royal Delivery!</span>
                  ) : (
                    <span>Add <strong className="text-gold-400">₹{amountToFreeDelivery}</strong> more for Free Delivery</span>
                  )}
                </span>
                <span className="text-[10px] text-cream-400">{Math.round(deliveryProgress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-wine-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold-gradient transition-all duration-500 rounded-full shadow-gold-sm"
                  style={{ width: `${deliveryProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-wine-900 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-gold-sm">
                  <Flame className="w-10 h-10 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-cream-100">
                    Your Feast is Empty
                  </h3>
                  <p className="text-xs text-cream-300 mt-1 max-w-xs">
                    Explore our authentic Awadhi Dum Biryani &amp; Royal Main Course to begin your feast.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-xl bg-gold-gradient text-wine-950 font-black text-xs shadow-gold-sm hover:brightness-110 active:scale-95"
                >
                  Explore Royal Menu
                </button>
              </div>
            ) : (
              items.map((cartItem) => (
                <div
                  key={cartItem.item.id}
                  className="p-3.5 rounded-2xl bg-wine-card border border-wine-700/80 flex gap-3.5 items-center group hover:border-gold-500/40 transition-all"
                >
                  {/* Item Image */}
                  <img
                    src={cartItem.item.imageUrl}
                    alt={cartItem.item.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-wine-950 border border-wine-800"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          cartItem.item.dietary === 'veg' ? 'bg-emerald-500' : 'bg-red-500'
                        }`}
                      />
                      <h4 className="font-serif text-sm font-bold text-cream-100 truncate">
                        {cartItem.item.name}
                      </h4>
                    </div>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs font-bold text-gold-400">
                        ₹{cartItem.item.price * cartItem.quantity}
                      </span>
                      <span className="text-[10px] text-cream-400">
                        (₹{cartItem.item.price} each)
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5 bg-wine-800 rounded-lg p-0.5 border border-wine-700">
                        <button
                          onClick={() => updateQuantity(cartItem.item.id, -1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-cream-300 hover:text-cream-100 hover:bg-wine-700 text-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-cream-100 px-1.5">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(cartItem.item.id, 1)}
                          className="w-5 h-5 rounded flex items-center justify-center text-cream-300 hover:text-cream-100 hover:bg-wine-700 text-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(cartItem.item.id)}
                        className="text-cream-400 hover:text-rose-400 p-1 text-xs flex items-center gap-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Promo Voucher Code Application */}
            {items.length > 0 && (
              <div className="pt-2 border-t border-wine-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gold-300 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-gold-400" />
                    <span>Royal Privilege Code</span>
                  </span>
                  {appliedCoupon && (
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Applied
                    </span>
                  )}
                </div>

                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs">
                    <div>
                      <strong className="text-emerald-300 uppercase tracking-wider block">{appliedCoupon}</strong>
                      <span className="text-emerald-400/80 text-[11px]">Saved ₹{discountAmount} on this order!</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-cream-400 hover:text-rose-400 font-semibold px-2 py-1 rounded bg-wine-900 border border-wine-700"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="space-y-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code (e.g. ZAUKROYAL, FIRSTDUM)"
                        value={couponInput}
                        onChange={(e) => {
                          setCouponInput(e.target.value);
                          setCouponError('');
                        }}
                        className="flex-1 bg-wine-900 border border-wine-700 rounded-xl px-3 py-2 text-xs text-cream-100 uppercase placeholder:normal-case placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-gold-gradient text-wine-950 font-black text-xs shadow-gold-sm hover:brightness-110 transition-all"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-[11px] text-rose-400 font-medium">{couponError}</p>
                    )}
                  </form>
                )}
              </div>
            )}

            {/* Guest Order Info Form */}
            {items.length > 0 && (
              <div className="pt-2 space-y-3 border-t border-wine-800">
                <p className="text-xs font-bold text-gold-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Delivery Information (Optional)
                </p>

                <div>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-cream-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Your Name (e.g. Kabir Sehgal)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-cream-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Delivery Address / Society / Flat No."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <FileText className="w-3.5 h-3.5 text-cream-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Special Instructions (e.g. Mild spicy, Extra raita)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-wine-800 bg-wine-950 space-y-3.5">
              {/* Cost Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-cream-300">
                  <span>Subtotal</span>
                  <span className="font-semibold text-cream-100">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount ({appliedCoupon})</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-cream-300">
                  <span>Delivery Charges</span>
                  <span className="font-semibold text-cream-100">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400 font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-cream-100 pt-2 border-t border-wine-800">
                  <span className="font-serif">Grand Royal Total</span>
                  <span className="font-serif text-lg text-gold-400">₹{grandTotal}</span>
                </div>
              </div>

              {/* Primary Action: Order via WhatsApp */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:brightness-110 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Place Order via WhatsApp</span>
              </button>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-wine-900 hover:bg-wine-850 border border-wine-700 text-cream-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call to Order</span>
                </a>
                <button
                  onClick={clearCart}
                  className="py-2.5 px-3 rounded-xl bg-wine-900 hover:bg-rose-950/40 border border-wine-700 hover:border-rose-800/40 text-cream-300 hover:text-rose-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Feast</span>
                </button>
              </div>

              {/* Quality guarantee */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-cream-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Delivered hot in 100% sealed earthen handis</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
