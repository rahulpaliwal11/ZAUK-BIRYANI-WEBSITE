import React from 'react';
import { MandalaPattern } from '../ui/MandalaPattern';
import { 
  Flame, 
  Sparkles, 
  Award, 
  PackageCheck, 
  Crown, 
  Clock, 
  ShieldCheck, 
  Heart
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Flame className="w-6 h-6 text-gold-400" />,
      title: 'Traditional Dum Cooking',
      description: 'Slow-cooked in handcrafted earthen clay pots sealed with whole wheat dough over live charcoal to trap every aromatic vapor.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-400" />,
      title: '32 Secret Royal Spices',
      description: 'Stone-ground heritage spices sourced directly from authentic Khansamas of Lucknow and Nizami royal kitchens.',
    },
    {
      icon: <Crown className="w-6 h-6 text-gold-400" />,
      title: 'Pure Kashmiri Saffron & Desi Ghee',
      description: 'Infused exclusively with original Mongra saffron and golden A2 desi cow ghee for rich aroma and naturally long golden grains.',
    },
    {
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: 'Handpicked Prime Fresh Cuts',
      description: '24-hour slow yogurt, crushed mint, and spice marinade ensuring the meat remains melt-in-mouth tender and succulent.',
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-400" />,
      title: 'Express Hot Delivery in Greater Noida',
      description: 'Thermal insulated packaging guarantees your clay handi arrives piping hot, fresh, and aromatic straight to your doorstep.',
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-gold-400" />,
      title: '100% Sealed Clay Handi Hygiene',
      description: 'Prepared in certified hygienic kitchens with zero touch handling and delivered in single-use biodegradable clay pots.',
    },
  ];

  return (
    <section id="craft" className="py-24 bg-wine-950 relative overflow-hidden">
      {/* Background Lighting Elements & Mandala */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-radial-wine opacity-40 pointer-events-none" />
      <MandalaPattern size={650} opacity={0.04} spin={true} className="top-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-900 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>The Zouk Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            Why Food Lovers Choose Us
          </h2>
          <p className="text-sm text-cream-200/90 font-light max-w-2xl mx-auto">
            From hand-picked spices to authentic charcoal Dum Pukht pots, we adhere to the uncompromising royal standards of culinary perfection.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/60 shadow-card-dark hover:shadow-gold-md backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Pillar Number Watermark */}
              <span className="absolute top-4 right-6 font-serif text-3xl font-black text-wine-700/50 group-hover:text-gold-500/30 transition-colors pointer-events-none">
                0{idx + 1}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-wine-850 border border-gold-500/35 flex items-center justify-center shadow-gold-sm group-hover:scale-110 group-hover:border-gold-400 transition-all mb-6">
                {pillar.icon}
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-gold-300 transition-colors mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs text-cream-300/85 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Seal Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-wine-900 border border-wine-700 text-xs text-cream-300 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>Crafted fresh daily at Omaxe NRI City Centre • Zero artificial flavors or synthetic colors</span>
          </div>
        </div>
      </div>
    </section>
  );
};
