import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { Logo } from '../ui/Logo';
import { MandalaPattern } from '../ui/MandalaPattern';
import { 
  Clock, 
  Send, 
  Instagram, 
  Facebook, 
  Youtube, 
  ShieldCheck, 
  Sparkles,
  Heart,
  MapPin
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-wine-950 border-t border-wine-800/80 text-cream-100 relative overflow-hidden pt-16 pb-12">
      {/* Background Mandala & Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-radial-wine opacity-30 pointer-events-none" />
      <MandalaPattern size={450} opacity={0.03} spin={false} className="bottom-0 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-wine-800">
          
          {/* Col 1 & 2: Brand Story & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showText={true} size="md" />

            <p className="text-xs text-cream-200/85 leading-relaxed max-w-sm">
              {RESTAURANT_INFO.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-gold-300">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>GF-06, Tower C, Omaxe NRI City Centre, Greater Noida</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-wine-900 hover:bg-gold-500 hover:text-wine-950 border border-wine-700 hover:border-gold-400 text-cream-300 flex items-center justify-center transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-wine-900 hover:bg-gold-500 hover:text-wine-950 border border-wine-700 hover:border-gold-400 text-cream-300 flex items-center justify-center transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-wine-900 hover:bg-gold-500 hover:text-wine-950 border border-wine-700 hover:border-gold-400 text-cream-300 flex items-center justify-center transition-all shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase mb-4">
              Explore Feasts
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-300">
              <li>
                <a href="#featured" className="hover:text-gold-300 transition-colors">
                  Signature Bestsellers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-300 transition-colors">
                  Royal Dum Menu
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-gold-300 transition-colors">
                  Special Privileges &amp; Offers
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-gold-300 transition-colors">
                  The Dum Pukht Craft
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-300 transition-colors">
                  Culinary Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold-300 transition-colors">
                  Guest Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings & Ordering */}
          <div>
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase mb-4">
              Hours &amp; Service
            </h4>
            <div className="space-y-3 text-xs text-cream-200">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream-100 block">Dine-In &amp; Delivery</strong>
                  <span>{RESTAURANT_INFO.openingHours.weekdays}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream-100 block">Weekly Off</strong>
                  <span>Open All 7 Days (No Weekly Off)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream-100 block">Hygiene &amp; Sealing</strong>
                  <span>100% Sealed Clay Handis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 5: Newsletter & Royal Club */}
          <div>
            <h4 className="font-serif text-sm font-bold text-gold-400 tracking-wider uppercase mb-4">
              Join The Royal Club
            </h4>
            <p className="text-xs text-cream-300 mb-3 leading-relaxed">
              Subscribe to receive exclusive festive discounts, secret chef recipes &amp; tasting invites.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                👑 Welcome to the Royal Club! Check your inbox soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-wine-900 border border-wine-700 rounded-xl px-3.5 py-2 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-3 rounded-xl bg-gold-gradient text-wine-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-gold-sm hover:brightness-110 transition-all active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#about" className="hover:text-cream-100 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-cream-100 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#contact" className="hover:text-cream-100 transition-colors">Allergen Information</a>
          </div>

          <div className="text-[11px] text-cream-300 flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for Biryani Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
