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
          
          {/* Left Column: Image Collage & Royal Seal */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Image: Real ZOUK Storefront & Dining Entrance */}
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/40 shadow-2xl shadow-black/80 aspect-[4/3] bg-wine-950">
              <img
                src="/images/restaurant/zouk-storefront.jpg"
                alt="ZOUK Biryani & Main Course Storefront at Omaxe NRI City Centre"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Inset Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 max-w-xs p-5 rounded-3xl bg-wine-card border border-gold-500/50 shadow-gold-md backdrop-blur-xl space-y-2">
              <div className="flex items-center gap-2.5 text-gold-400">
                <ChefHat className="w-5 h-5 text-gold-400" />
                <span className="font-serif text-sm font-bold text-cream-100">
                  Master Khansama Craft
                </span>
              </div>
              <p className="text-[11px] text-cream-300 leading-relaxed">
                Recipes perfected across generations of royal court cooks, using secret stone-ground masala potlis and slow coal dum.
              </p>
            </div>

            {/* Top Left Heritage Badge */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 px-4 py-2 rounded-2xl bg-gold-gradient text-wine-950 font-black text-xs uppercase tracking-widest shadow-gold-sm flex items-center gap-2">
              <Logo size="sm" />
              <span>Royal Heritage</span>
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
                href="#menu"
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
