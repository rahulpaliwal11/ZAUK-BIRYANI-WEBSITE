import React from 'react';
import { MENU_ITEMS } from '../../data/menuData';
import { MenuItemCard } from '../ui/MenuItemCard';
import { MandalaPattern } from '../ui/MandalaPattern';
import { Sparkles, Crown, ArrowRight } from 'lucide-react';

export const FeaturedDishes: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter((item) => item.isBestseller || item.isChefSpecial).slice(0, 4);

  if (featuredItems.length === 0) return null;

  return (
    <section id="featured" className="py-20 bg-wine-900/80 relative overflow-hidden">
      {/* Background Lighting & Mandala Watermarks */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-wine-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <MandalaPattern size={480} opacity={0.05} spin={false} className="top-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-wine-850 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span>Royal Bestsellers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
              Curated Royal Indulgence
            </h2>
            <p className="mt-2 text-sm text-cream-200/90 max-w-xl">
              Handpicked culinary crown jewels loved by thousands of Biryani connoisseurs in Greater Noida.
            </p>
          </div>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-300 hover:text-gold-200 group transition-colors self-start md:self-auto"
          >
            <span>Explore All Delicacies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Bestseller Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-3xl bg-wine-card border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-card-dark">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-wine-800 text-gold-400 border border-gold-500/25 flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-cream-100">
                Freshly Dum Cooked On Live Charcoal
              </h4>
              <p className="text-xs text-cream-300/80 mt-0.5">
                We never pre-cook or reheat. Every single earthen handi is prepared fresh for your royal feast.
              </p>
            </div>
          </div>
          <a
            href="#menu"
            className="px-6 py-2.5 rounded-xl bg-gold-gradient text-wine-950 font-black text-xs shadow-gold-sm hover:brightness-110 whitespace-nowrap active:scale-95 transition-all"
          >
            Open Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};
