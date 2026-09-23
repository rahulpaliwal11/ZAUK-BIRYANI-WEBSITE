import React from 'react';
import { MandalaPattern } from '../ui/MandalaPattern';
import { Tag, ArrowRight, Percent } from 'lucide-react';

export const OffersSection: React.FC = () => {
  const handleOrderNow = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-20 bg-wine-900/90 relative overflow-hidden">
      {/* Subtle Radial Glow & Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-radial-wine opacity-40 pointer-events-none" />
      <MandalaPattern size={500} opacity={0.05} spin={false} className="top-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-850 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Percent className="w-3.5 h-3.5 text-gold-400" />
            <span>Special Offer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            Exclusive Savings
          </h2>
          <p className="text-sm text-cream-200/90 font-light">
            Enjoy 10% OFF on your royal feast orders.
          </p>
        </div>

        {/* Single Genuine Offer Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl bg-wine-card border border-gold-500/40 p-7 sm:p-8 flex flex-col justify-between hover:border-gold-400 hover:shadow-gold-md transition-all duration-300 shadow-2xl overflow-hidden">
            {/* Top Accent Gold Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

            <div className="space-y-4">
              {/* Badge & Discount Header */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-wine-800 text-gold-300 border border-gold-500/30 uppercase tracking-wide flex items-center gap-1.5">
                  <Tag className="w-3 h-3 text-gold-400" />
                  <span>Special Offer</span>
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-black text-gold-400">
                  10% OFF
                </span>
              </div>

              {/* Offer Title */}
              <h3 className="font-serif text-2xl font-bold text-cream-100">
                10% OFF
              </h3>

              {/* Description */}
              <p className="text-sm text-cream-200 leading-relaxed">
                Get 10% OFF on orders above ₹499.
              </p>

              {/* Condition / Validity Note */}
              <div className="p-3 rounded-xl bg-wine-950/80 border border-wine-800 text-xs text-cream-300 flex items-center justify-between">
                <span>Condition:</span>
                <strong className="text-gold-300">Minimum order value ₹499</strong>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="mt-6 pt-5 border-t border-wine-800 flex items-center justify-between gap-4">
              <span className="text-xs text-cream-400">
                Applied automatically in cart
              </span>
              <button
                onClick={handleOrderNow}
                className="px-6 py-2.5 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-gold-sm transition-all active:scale-95"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
