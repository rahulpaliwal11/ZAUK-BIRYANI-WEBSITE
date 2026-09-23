import React from 'react';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { Logo } from '../ui/Logo';
import { MandalaPattern } from '../ui/MandalaPattern';
import { Crown, ChefHat, Check } from 'lucide-react';

interface AboutSectionProps {
  onOpenReservation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="about" className="py-24 bg-wine-900/90 relative overflow-hidden">
      {/* Decorative Glow & Mandala */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-wine-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <MandalaPattern size={500} opacity={0.05} spin={false} className="top-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Food Card Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Unified Royal Heritage & Dum Craft Card */}
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/40 bg-wine-card shadow-2xl shadow-black/80 flex flex-col group hover:border-gold-400/70 transition-all duration-500">
              
              {/* 1. Top Food Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-wine-950">
                <img
                  src="/images/dishes/chicken-65-biryani.jpg"
                  alt="Zouk Royal Awadhi Dum Feast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-950/70 via-transparent to-black/30 pointer-events-none" />
                
                {/* Clean Top-Left Royal Heritage Badge */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-xl bg-gold-gradient text-wine-950 font-black text-xs uppercase tracking-widest shadow-gold-sm flex items-center gap-2">
                  <Logo size="xs" />
                  <span>Royal Heritage</span>
                </div>
              </div>

              {/* 2. Dedicated Content Area Below Image */}
              <div className="p-6 sm:p-7 flex flex-col space-y-4">
                
                {/* Badges & Category Row */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wine-900 border border-gold-500/40 text-gold-300 text-xs font-bold shadow-sm">
                    <ChefHat className="w-3.5 h-3.5 text-gold-400" />
                    <span>Artisan Dum Pukht</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wine-850 border border-gold-500/30 text-cream-200 text-xs font-semibold shadow-sm">
                    <span className="text-gold-400 font-serif">★</span>
                    <span>Master Khansama Craft</span>
                  </div>
                </div>

                {/* Food Name / Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-cream-100 leading-snug break-words">
                  Slow-Cooked Awadhi Heritage
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cream-200/90 font-light leading-relaxed break-words">
                  Recipes perfected across generations of royal court cooks, using secret stone-ground masala potlis and slow coal dum.
                </p>

                {/* Features & Craft Attributes */}
                <div className="pt-3 border-t border-wine-800/80 grid grid-cols-2 gap-3 text-xs text-cream-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
                    <span className="font-medium">Charcoal Dum Cooked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400 flex-shrink-0" />
                    <span className="font-medium">Clay Handi Sealed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-850 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span>Our Culinary Royal Odyssey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 leading-tight">
              Reviving The Soul of{' '}
              <span className="text-transparent bg-clip-text bg-gold-gradient">
                Dum Pukht
              </span>
            </h2>

            <p className="text-sm sm:text-base text-cream-200/90 font-light leading-relaxed">
              {RESTAURANT_INFO.story}
            </p>

            {/* Culinary Philosophy Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-cream-200">
                  <strong className="text-cream-100">Handcrafted Earthen Kasoras:</strong> We cook exclusively in clay handis to infuse natural mineral earthiness into every grain.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-cream-200">
                  <strong className="text-cream-100">2-Year Aged Daawat Basmati:</strong> Sourced from Himalayan foothills, ensuring extra-long non-sticky grains that absorb the aromatic Yakhni broth.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-cream-200">
                  <strong className="text-cream-100">Authentic Charcoal Embers:</strong> Never flash-cooked on gas stoves; slow-steamed for hours on simmering live coals.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-wine-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div>
                <div className="font-serif text-2xl font-black text-gold-400">
                  {RESTAURANT_INFO.stats.happyGuests}
                </div>
                <p className="text-[10px] text-cream-400 uppercase tracking-wider mt-0.5">
                  Happy Guests
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl font-black text-gold-400">
                  {RESTAURANT_INFO.stats.dumPotsServed}
                </div>
                <p className="text-[10px] text-cream-400 uppercase tracking-wider mt-0.5">
                  Handis Served
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl font-black text-gold-400">
                  32
                </div>
                <p className="text-[10px] text-cream-400 uppercase tracking-wider mt-0.5">
                  Secret Spices
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl font-black text-gold-400">
                  4.9 ★
                </div>
                <p className="text-[10px] text-cream-400 uppercase tracking-wider mt-0.5">
                  Foodie Rating
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#order-hub"
                className="px-6 py-3 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 font-bold text-xs uppercase tracking-wider shadow-gold-sm transition-all active:scale-95"
              >
                Experience The Taste
              </a>
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/35 text-gold-300 hover:text-gold-200 text-xs font-semibold transition-all shadow-sm active:scale-95"
              >
                Book Royal Dining Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
