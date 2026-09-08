import React from 'react';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { MandalaPattern } from '../ui/MandalaPattern';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Sparkles, 
  ExternalLink,
  CalendarCheck,
  Mail
} from 'lucide-react';

interface LocationSectionProps {
  onOpenReservation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="contact" className="py-24 bg-wine-950 relative overflow-hidden">
      {/* Background Lighting & Mandala */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-radial-wine opacity-35 pointer-events-none" />
      <MandalaPattern size={600} opacity={0.04} spin={true} className="bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-900 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Visit Our Dining Palace</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            Location &amp; Royal Hospitality
          </h2>
          <p className="text-sm text-cream-200/90 font-light">
            Dine amidst handcrafted brass lanterns, live charcoal aromas, and warm Nawabi courtesy at Omaxe NRI City Centre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/50 transition-all shadow-card-dark flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-wine-850 text-gold-400 border border-gold-500/25 flex-shrink-0 shadow-gold-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-serif text-base font-bold text-cream-100">
                  Royal Dining Address
                </h3>
                <p className="text-xs text-cream-200 leading-relaxed">
                  {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.line2}
                </p>
                <p className="text-xs text-gold-300 font-semibold">
                  {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} - {RESTAURANT_INFO.address.pincode}
                </p>
                <div className="pt-2">
                  <a
                    href={RESTAURANT_INFO.links.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-gold-400" />
                    <span>Get GPS Directions</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/50 transition-all shadow-card-dark flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-wine-850 text-gold-400 border border-gold-500/25 flex-shrink-0 shadow-gold-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-serif text-base font-bold text-cream-100">
                  Direct Royal Hotline
                </h3>
                <p className="text-xs text-cream-300">
                  For instant delivery, bulk catering or party handi orders:
                </p>
                <div className="pt-1 flex flex-wrap gap-3">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="font-serif text-sm font-bold text-gold-300 hover:underline"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cream-400 pt-1">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                  <span>{RESTAURANT_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/50 transition-all shadow-card-dark flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-wine-850 text-gold-400 border border-gold-500/25 flex-shrink-0 shadow-gold-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1 text-xs">
                <h3 className="font-serif text-base font-bold text-cream-100">
                  Service &amp; Dining Hours
                </h3>
                <div className="flex justify-between text-cream-200 border-b border-wine-800 pb-1">
                  <span>Open All 7 Days:</span>
                  <span className="font-bold text-gold-300">{RESTAURANT_INFO.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between text-cream-300 pt-0.5">
                  <span>Dine-In Hours:</span>
                  <span className="font-semibold text-cream-100">{RESTAURANT_INFO.openingHours.dineIn}</span>
                </div>
              </div>
            </div>

            {/* Reservation CTA Button */}
            <button
              onClick={onOpenReservation}
              className="w-full py-3.5 px-4 rounded-2xl bg-gold-gradient text-wine-950 font-black text-xs uppercase tracking-wider shadow-gold-sm hover:brightness-110 flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserve Table / Private Dastarkhwan</span>
            </button>
          </div>

          {/* Right Column: Live Interactive Google Map Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[420px] rounded-3xl overflow-hidden border border-gold-500/40 bg-wine-950 shadow-2xl flex flex-col justify-between">
              
              {/* Google Maps Live Embed */}
              <div className="absolute inset-0 z-0">
                <iframe
                  title="Zouk Biryani & Main Course Location Map"
                  src={RESTAURANT_INFO.links.mapEmbedUrl || "https://maps.google.com/maps?q=28.4630847,77.5104355&hl=en&z=16&output=embed"}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Card Top Header Overlay */}
              <div className="relative z-10 p-5 flex items-center justify-between bg-gradient-to-b from-wine-950/95 via-wine-950/70 to-transparent">
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-wine-900/90 border border-gold-500/40 text-gold-300 text-xs font-semibold backdrop-blur-md shadow-gold-sm">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Verified Google Maps Location</span>
                </div>
                <span className="text-xs text-cream-200 bg-wine-900/90 px-3 py-1 rounded-xl backdrop-blur-md border border-wine-700 font-medium">
                  📍 Omaxe NRI City Centre
                </span>
              </div>

              {/* Bottom Actions Bar Overlay */}
              <div className="relative z-10 p-5 bg-gradient-to-t from-wine-950 via-wine-950/95 to-transparent border-t border-wine-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-cream-200 text-center sm:text-left">
                  <strong className="text-gold-400 block font-serif text-sm">ZOUK BIRYANI &amp; MAIN COURSE</strong>
                  <span>🚗 Valet Parking &amp; Air Conditioned Dining Available</span>
                </div>
                <a
                  href={RESTAURANT_INFO.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-gold-gradient text-wine-950 font-black text-xs flex items-center gap-2 shadow-gold-sm hover:brightness-110 transition-all whitespace-nowrap active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Live Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
