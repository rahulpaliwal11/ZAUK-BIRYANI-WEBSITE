import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { GREATER_NOIDA_SECTORS } from '../../data/deliveryConfig';
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
  Truck
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    deliveryTier,
    isBeyond10Km,
    deliveryDistance,
    deliveryLocationName,
    updateDeliveryDistance,
    discountAmount,
    grandTotal,
    generateWhatsAppOrderUrl,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const fullAddress = address ? address : deliveryLocationName;
    const url = generateWhatsAppOrderUrl(customerName, fullAddress, notes);
    window.open(url, '_blank');
  };

  const handleSectorChange = (sectorName: string) => {
    const loc = GREATER_NOIDA_SECTORS.find((s) => s.name === sectorName);
    if (loc) {
      updateDeliveryDistance(loc.approxDistanceKm, loc.name);
      if (!address) {
        setAddress(loc.name);
      }
    }
  };

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

          {/* Genuine 10% OFF Notification Banner */}
          {items.length > 0 && (
            <div className="px-5 py-2.5 bg-gradient-to-r from-wine-900 via-wine-850 to-wine-900 border-b border-gold-500/30">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-cream-200">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  {subtotal >= 499 ? (
                    <span className="text-emerald-400 font-bold">✨ 10% OFF Applied on orders above ₹499!</span>
                  ) : (
                    <span>Add <strong className="text-gold-400">₹{499 - subtotal}</strong> more to get <strong>10% OFF</strong></span>
                  )}
                </span>
                {subtotal >= 499 && (
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40 font-bold">
                    -₹{discountAmount}
                  </span>
                )}
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
                    Your Feast Tray is Empty
                  </h3>
                  <p className="text-xs text-cream-400 max-w-xs mt-1 leading-relaxed">
                    Explore our aromatic Royal Dum Biryanis, sizzling Kebabs, and Mughlai gravies.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="px-6 py-2.5 rounded-xl bg-gold-gradient text-wine-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:brightness-110 transition-all"
                >
                  Explore Royal Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((cartItem) => {
                  const { item, quantity } = cartItem;
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-wine-900/60 border border-wine-800 hover:border-gold-500/30 transition-all flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-14 h-14 rounded-xl object-cover border border-gold-500/20 shrink-0"
                          />
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                item.dietary === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'
                              }`}
                            />
                            <h4 className="font-serif text-xs font-bold text-cream-100 truncate">
                              {item.name}
                            </h4>
                          </div>
                          <p className="text-[11px] text-gold-300/90 font-medium mt-0.5">
                            ₹{item.price} each
                          </p>
                          <p className="text-xs font-bold text-cream-100 mt-1">
                            ₹{item.price * quantity}
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-1.5 bg-wine-950 border border-wine-700/80 rounded-xl p-1 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded-lg hover:bg-wine-800 text-cream-300 hover:text-cream-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-cream-100 font-mono">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-lg hover:bg-wine-800 text-cream-300 hover:text-cream-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Delivery Location & Instructions Form */}
            {items.length > 0 && (
              <div className="pt-4 border-t border-wine-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-serif font-bold text-gold-300 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-gold-400" />
                    Delivery Details
                  </span>
                  <span className="text-[10px] text-cream-400 font-sans font-normal">
                    Distance: ~{deliveryDistance} km
                  </span>
                </div>

                {/* Quick Sector Selector */}
                <div>
                  <select
                    value={deliveryLocationName}
                    onChange={(e) => handleSectorChange(e.target.value)}
                    className="w-full bg-wine-900 border border-wine-700 rounded-xl px-3 py-2 text-xs text-cream-100 focus:outline-none focus:border-gold-500 cursor-pointer"
                  >
                    <option value="">Select your Greater Noida Sector / Society</option>
                    {GREATER_NOIDA_SECTORS.map((s) => (
                      <option key={s.name} value={s.name} className="bg-wine-950 text-cream-100">
                        {s.name} (~{s.approxDistanceKm} km)
                      </option>
                    ))}
                  </select>
                </div>

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
                      placeholder="Complete Delivery Address / Society / Flat No."
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
                    <span>10% OFF (Orders above ₹499)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-cream-300">
                  <span className="flex items-center gap-1">
                    <span>Delivery Charge</span>
                    <span className="text-[10px] text-gold-400/80">
                      ({deliveryTier?.distanceLabel || (isBeyond10Km ? '>10 KM' : '2–3 KM')})
                    </span>
                  </span>
                  <span className="font-semibold text-cream-100">
                    {isBeyond10Km ? (
                      <span className="text-amber-400 text-[11px]">Contact Us</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-cream-100 pt-2 border-t border-wine-800">
                  <span className="font-serif">Grand Total</span>
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
