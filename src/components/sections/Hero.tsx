import React, { useState } from 'react';
import { Logo, ZoukWordmark } from '../ui/Logo';
import { MandalaPattern } from '../ui/MandalaPattern';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { 
  Sparkles,
  Flame,
  ArrowRight, 
  Star, 
  ChefHat,
  MapPin,
  Crown,
  PhoneCall
} from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [activeTab, setActiveTab] = useState<'storefront' | 'dining'>('storefront');

  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-wine-950">
      
      {/* Background Visual with Wine Overlays & Scalloped Mandala Watermarks */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Layered Deep Wine Plum Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-wine-950 via-wine-950/95 to-wine-950/90 z-10" />
        <div className="absolute inset-0 bg-radial-wine opacity-80 z-10" />
        <div className="absolute inset-0 bg-radial-gold opacity-20 z-10" />
        
        {/* Rotating Royal Logo Mandala Background Watermarks */}
        <MandalaPattern size={750} opacity={0.06} spin={true} className="-top-24 -left-32 z-10" />
        <MandalaPattern size={650} opacity={0.05} spin={false} className="-bottom-20 -right-20 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Royal Headline, Story & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Royal Brand Crest Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-wine-900/95 border border-gold-500/40 shadow-gold-sm backdrop-blur-md">
              <Logo size="xs" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                The Royal Dum &amp; Main Course Heritage
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-cream-100 leading-[1.08] tracking-tight">
              Where Every Handi Tells A{' '}
              <span className="text-transparent bg-clip-text bg-gold-gradient drop-shadow-sm">
                Regal Story
              </span>
            </h1>

            {/* Tagline & Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-cream-200/90 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Slow-cooked in whole wheat dough-sealed earthen handis over fragrant charcoal with 32 secret Shahi spices, aged basmati, and pure Kashmiri saffron. Now serving Greater Noida at Omaxe NRI City Centre.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-md hover:shadow-gold-lg transition-all active:scale-95"
              >
                <Crown className="w-4 h-4 text-wine-950" />
                <span>Order Royal Feast</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#featured"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-wine-900/90 hover:bg-wine-850 border border-gold-500/35 text-cream-100 hover:text-gold-300 font-bold text-sm tracking-wide flex items-center justify-center gap-2 backdrop-blur-md transition-all shadow-sm hover:border-gold-400"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Signature Bestsellers</span>
              </a>

              <button
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-transparent hover:bg-wine-900/60 border border-wine-700 text-cream-200 hover:text-gold-300 text-sm font-semibold transition-colors"
              >
                <ChefHat className="w-4 h-4 text-gold-400" />
                <span>Book Table</span>
              </button>
            </div>

            {/* Social Proof & Rating Strip */}
            <div className="pt-6 border-t border-wine-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="flex items-center gap-1 text-gold-400">
                  <Star className="w-4 h-4 fill-gold-400" />
                  <span className="font-serif text-lg font-bold text-cream-100">4.9 / 5</span>
                </div>
                <p className="text-[11px] text-cream-300 mt-0.5">15,000+ Happy Guests</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-gold-400">
                  <Flame className="w-4 h-4" />
                  <span className="font-serif text-lg font-bold text-cream-100">100% Dum</span>
                </div>
                <p className="text-[11px] text-cream-300 mt-0.5">Earthen Clay Pots</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-gold-400">
                  <MapPin className="w-4 h-4" />
                  <span className="font-serif text-lg font-bold text-cream-100">NRI City</span>
                </div>
                <p className="text-[11px] text-cream-300 mt-0.5">Greater Noida</p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Restaurant & Signature Dum Biryani Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Ambient Wine Plum & Gold Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-wine-700/50 via-gold-500/25 to-transparent rounded-3xl blur-3xl -z-10" />

            {/* Luxury Brand Showcase Container */}
            <div className="w-full max-w-md rounded-3xl bg-wine-card border border-gold-500/45 p-5 sm:p-6 shadow-2xl backdrop-blur-2xl relative overflow-hidden group hover:border-gold-400 transition-all">
              
              {/* Brand Top Header Banner */}
              <div className="rounded-2xl bg-gradient-to-b from-[#541437] to-[#360B21] border border-gold-500/40 p-4 mb-3.5 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gold opacity-25 pointer-events-none" />
                <ZoukWordmark size="md" centered={true} />
              </div>

              {/* Real Restaurant Visual Showcase */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-wine-950 border border-gold-500/30 group/img">
                <img
                  src={activeTab === 'storefront' ? '/images/restaurant/zouk-storefront.jpg' : '/images/restaurant/zauk-interior-hall.jpg'}
                  alt="ZOUK Biryani & Main Course Restaurant in Greater Noida"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/20 to-transparent opacity-90" />
                
                {/* Floating Crest Badge */}
                <div className="absolute top-2.5 left-2.5 p-1 rounded-full bg-wine-950/85 backdrop-blur-md border border-gold-500/40 shadow-gold-sm">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="/logo.svg" alt="ZOUK Emblem" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* View Switcher Pills */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-wine-950/90 backdrop-blur-md p-1 rounded-xl border border-gold-500/30">
                  <button
                    onClick={() => setActiveTab('storefront')}
                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                      activeTab === 'storefront'
                        ? 'bg-gold-gradient text-wine-950 shadow-sm'
                        : 'text-cream-300 hover:text-cream-100'
                    }`}
                  >
                    Storefront
                  </button>
                  <button
                    onClick={() => setActiveTab('dining')}
                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                      activeTab === 'dining'
                        ? 'bg-gold-gradient text-wine-950 shadow-sm'
                        : 'text-cream-300 hover:text-cream-100'
                    }`}
                  >
                    Dining Lounge
                  </button>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-lg bg-wine-950/90 backdrop-blur-md border border-gold-500/30 text-gold-300 font-semibold text-[11px]">
                    📍 Omaxe NRI City Centre
                  </span>
                  <span className="px-2 py-0.5 rounded-lg bg-wine-950/90 backdrop-blur-md border border-wine-700 text-cream-200 text-[10px]">
                    Open All 7 Days
                  </span>
                </div>
              </div>

              {/* Signature Royal Biryanis 3-Photo Showcase (Replaced text details with real biryani photos) */}
              <div className="my-3.5 pt-3 border-t border-wine-800/90">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-gold-300 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-gold-400" />
                    <span>Signature Royal Dum Biryanis</span>
                  </span>
                  <span className="text-[10px] text-cream-300/80 font-medium">100% Charcoal Dum</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {/* Biryani 1: Royal Chicken Dum */}
                  <a
                    href="#menu"
                    className="group/b relative rounded-xl overflow-hidden aspect-square border border-gold-500/35 hover:border-gold-400 shadow-sm transition-all hover:scale-102 block"
                    title="Royal Chicken Dum Handi Biryani"
                  >
                    <img
                      src="/images/dishes/chicken-dum-biryani.jpg"
                      alt="Royal Chicken Dum Handi Biryani"
                      className="w-full h-full object-cover group-hover/b:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/20 to-transparent opacity-85" />
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-cream-100 text-center line-clamp-1">
                      Chicken Dum
                    </span>
                  </a>

                  {/* Biryani 2: Earthen Mitti Handi */}
                  <a
                    href="#menu"
                    className="group/b relative rounded-xl overflow-hidden aspect-square border border-gold-500/35 hover:border-gold-400 shadow-sm transition-all hover:scale-102 block"
                    title="Dough Sealed Mitti Handi Biryani"
                  >
                    <img
                      src="/images/dishes/clay-handi-biryani.jpg"
                      alt="Dough-Sealed Clay Handi Biryani"
                      className="w-full h-full object-cover group-hover/b:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/20 to-transparent opacity-85" />
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-cream-100 text-center line-clamp-1">
                      Clay Handi
                    </span>
                  </a>

                  {/* Biryani 3: Awadhi Kebab Dum */}
                  <a
                    href="#menu"
                    className="group/b relative rounded-xl overflow-hidden aspect-square border border-gold-500/35 hover:border-gold-400 shadow-sm transition-all hover:scale-102 block"
                    title="Awadhi Kebab Dum Biryani"
                  >
                    <img
                      src="/images/dishes/kebab-dum-biryani.jpg"
                      alt="Awadhi Kebab Dum Biryani"
                      className="w-full h-full object-cover group-hover/b:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/20 to-transparent opacity-85" />
                    <span className="absolute bottom-1 left-1 right-1 text-[9px] font-bold text-cream-100 text-center line-clamp-1">
                      Kebab Dum
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Quick Action CTAs */}
              <div className="pt-1 flex items-center gap-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/35 text-gold-300 hover:text-gold-200 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call to Order</span>
                </a>

                <button
                  onClick={onOpenReservation}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-gold-sm transition-all active:scale-98"
                >
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Book VIP Table</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
