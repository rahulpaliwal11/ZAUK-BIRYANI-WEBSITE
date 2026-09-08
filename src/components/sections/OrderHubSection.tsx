import React from 'react';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { useCart } from '../../context/CartContext';
import { MandalaPattern } from '../ui/MandalaPattern';
import { 
  ShoppingBag, 
  MessageCircle, 
  PhoneCall, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  Crown
} from 'lucide-react';

export const OrderHubSection: React.FC = () => {
  const { openCart } = useCart();
  const cleanWhatsAppNumber = RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="order-hub" className="py-20 bg-wine-900/90 border-t border-wine-800 relative overflow-hidden">
      {/* Background Radiance & Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-80 bg-radial-wine opacity-30 pointer-events-none" />
      <MandalaPattern size={500} opacity={0.04} spin={true} className="top-0 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-850 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-gold-400" />
            <span>Instant Ordering Hub</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            Order Your Royal Handi Now
          </h2>
          <p className="text-sm text-cream-200/90 font-light">
            Choose your preferred way to order. Enjoy special chef courtesies and express hot delivery on direct orders.
          </p>
        </div>

        {/* Ordering Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Direct WhatsApp 1-Click Order */}
          <a
            href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
              `👑 Hello ${RESTAURANT_INFO.name}! I would like to place an order for Biryani delivery in Greater Noida.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 rounded-3xl bg-gradient-to-b from-emerald-950/40 via-wine-900 to-wine-850 border border-emerald-500/40 hover:border-emerald-400 shadow-card-dark hover:shadow-lg hover:shadow-emerald-900/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="absolute top-4 right-4 p-2 rounded-full bg-wine-900 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-dark-950 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 flex items-center justify-center mb-4 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-extrabold">
                Most Popular
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-100 mt-1">
                WhatsApp 1-Click
              </h3>
              <p className="text-xs text-cream-200 mt-2 leading-relaxed">
                Chat directly with our Khansama desk. Get instant order confirmation &amp; live tracking.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-wine-800 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>Order via WhatsApp</span>
              <span>→</span>
            </div>
          </a>

          {/* Card 2: Interactive Menu / Cart Tray */}
          <div
            onClick={openCart}
            className="group relative p-6 rounded-3xl bg-gradient-to-b from-wine-800/80 via-wine-900 to-wine-850 border border-gold-500/45 hover:border-gold-400 shadow-card-dark hover:shadow-gold-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
          >
            <div className="absolute top-4 right-4 p-2 rounded-full bg-wine-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-wine-950 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/35 text-gold-400 flex items-center justify-center mb-4 shadow-sm">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gold-300 font-extrabold">
                Direct Royal Perks
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-100 mt-1">
                Website Cart Order
              </h3>
              <p className="text-xs text-cream-200 mt-2 leading-relaxed">
                Select delicacies from our interactive menu and generate an instant itemized WhatsApp feast order.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-wine-800 flex items-center justify-between text-xs font-bold text-gold-300">
              <span>Open Feast Tray</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3: Direct Phone Call */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="group relative p-6 rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/50 shadow-card-dark transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="absolute top-4 right-4 p-2 rounded-full bg-wine-900 text-cream-300 group-hover:bg-gold-500 group-hover:text-wine-950 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-wine-850 border border-wine-700 text-gold-400 flex items-center justify-center mb-4 shadow-sm">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gold-300 font-extrabold">
                Hotline Service
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-100 mt-1">
                Call Direct Now
              </h3>
              <p className="text-xs text-cream-200 mt-2 leading-relaxed">
                Speak directly with our team for bulk party orders, catering, or special dietary queries.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-wine-800 flex items-center justify-between text-xs font-bold text-gold-300">
              <span>{RESTAURANT_INFO.phone}</span>
              <span>→</span>
            </div>
          </a>

          {/* Card 4: Zomato & Swiggy Aggregators */}
          <div className="group relative p-6 rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/45 shadow-card-dark transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-wine-850 border border-wine-700 text-rose-400 flex items-center justify-center mb-4 shadow-sm">
                <Sparkles className="w-6 h-6 text-rose-400" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-cream-300 font-extrabold">
                Delivery Apps
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-100 mt-1">
                Zomato &amp; Swiggy
              </h3>
              <p className="text-xs text-cream-200 mt-2 leading-relaxed">
                Order via your favorite food delivery apps with live GPS tracking.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-wine-800 grid grid-cols-2 gap-2">
              <a
                href={RESTAURANT_INFO.links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-red-950/70 hover:bg-red-900 border border-red-800/40 text-red-200 hover:text-white text-xs font-bold text-center transition-colors"
              >
                Zomato
              </a>
              <a
                href={RESTAURANT_INFO.links.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-orange-950/70 hover:bg-orange-900 border border-orange-800/40 text-orange-200 hover:text-white text-xs font-bold text-center transition-colors"
              >
                Swiggy
              </a>
            </div>
          </div>
        </div>

        {/* Reassurance strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-cream-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-400" />
            <span>Average Delivery Time: 35–45 Mins</span>
          </div>
          <span className="hidden sm:inline text-wine-700">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Tamper Proof Clay Pot Seals</span>
          </div>
          <span className="hidden sm:inline text-wine-700">•</span>
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-gold-400" />
            <span>Free Burani Garlic Raita with every Biryani</span>
          </div>
        </div>
      </div>
    </section>
  );
};
