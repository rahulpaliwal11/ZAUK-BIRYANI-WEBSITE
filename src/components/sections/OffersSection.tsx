import React from 'react';
import { SPECIAL_OFFERS } from '../../data/offersData';
import { useCart } from '../../context/CartContext';
import { MandalaPattern } from '../ui/MandalaPattern';
import { Copy, Check, Tag, Gift, ArrowRight } from 'lucide-react';

export const OffersSection: React.FC = () => {
  const { showToast, items, applyCoupon, openCart } = useCart();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast(`Coupon code ${code} copied to clipboard!`, 'info');
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  const handleRedeem = (code: string) => {
    if (items.length > 0) {
      const res = applyCoupon(code);
      openCart();
      if (!res.success) {
        showToast(res.message, 'info');
      }
    } else {
      navigator.clipboard.writeText(code);
      showToast(`👑 Code ${code} selected! Add dishes from our royal menu to activate.`, 'info');
      const menuEl = document.getElementById('menu');
      if (menuEl) {
        menuEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="offers" className="py-20 bg-wine-900/90 relative overflow-hidden">
      {/* Subtle Radial Glow & Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-radial-wine opacity-40 pointer-events-none" />
      <MandalaPattern size={500} opacity={0.05} spin={false} className="top-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-850 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5 text-gold-400" />
            <span>Royal Privileges</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            Special Offers &amp; Royal Feasts
          </h2>
          <p className="text-sm text-cream-200/90 font-light">
            Enjoy exclusive culinary courtesies designed to make your celebrations even more memorable.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIAL_OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-3xl bg-wine-card border border-gold-500/35 p-6 flex flex-col justify-between hover:border-gold-400 hover:shadow-gold-md transition-all duration-300 group overflow-hidden"
            >
              {/* Top Accent Gold Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

              <div>
                {/* Badge & Discount */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-wine-800 text-gold-300 border border-gold-500/30 uppercase tracking-wide">
                    {offer.badge}
                  </span>
                  <span className="font-serif text-2xl font-black text-gold-400">
                    {offer.discount}
                  </span>
                </div>

                {/* Offer Title & Subtitle */}
                <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-xs font-semibold text-gold-300/90 mt-1">
                  {offer.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-cream-300/80 mt-3 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Coupon Box & Action */}
              <div className="mt-6 pt-4 border-t border-wine-800 space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-wine-950/80 border border-dashed border-gold-500/40">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gold-400" />
                    <span className="font-mono text-xs font-black text-cream-100 tracking-wider">
                      {offer.code}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(offer.code)}
                    className="flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-lg bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 transition-colors"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-cream-300">
                  <span>{offer.validity}</span>
                  <button
                    onClick={() => handleRedeem(offer.code)}
                    className="text-gold-300 font-bold hover:text-gold-200 flex items-center gap-0.5 group/btn"
                  >
                    <span>Redeem</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
