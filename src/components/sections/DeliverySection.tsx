import React, { useState, useMemo } from 'react';
import { 
  DELIVERY_CONFIG, 
  GREATER_NOIDA_SECTORS, 
  getDeliveryFeeByDistance, 
  DeliveryTier 
} from '../../data/deliveryConfig';
import { useCart } from '../../context/CartContext';
import { MandalaPattern } from '../ui/MandalaPattern';
import { 
  MapPin, 
  Navigation, 
  Receipt, 
  Truck, 
  Clock, 
  Sparkles, 
  Compass, 
  PhoneCall, 
  MessageCircle, 
  Info, 
  CheckCircle2, 
  Flame,
  Phone
} from 'lucide-react';

export const DeliverySection: React.FC = () => {
  const { openCart, updateDeliveryDistance } = useCart();

  // Interactive Estimator State
  const [selectedSector, setSelectedSector] = useState<string>(GREATER_NOIDA_SECTORS[0].name);
  const [customDistance, setCustomDistance] = useState<number>(GREATER_NOIDA_SECTORS[0].approxDistanceKm);
  const [manualMode, setManualMode] = useState<boolean>(false);

  // Handle Sector Change
  const handleSectorChange = (sectorName: string) => {
    const loc = GREATER_NOIDA_SECTORS.find((s) => s.name === sectorName);
    if (loc) {
      setSelectedSector(loc.name);
      setCustomDistance(loc.approxDistanceKm);
      setManualMode(false);
      updateDeliveryDistance?.(loc.approxDistanceKm, loc.name);
    }
  };

  // Handle Custom Distance Slider
  const handleDistanceSlider = (val: number) => {
    setCustomDistance(val);
    setManualMode(true);
    setSelectedSector('Custom Distance Location');
    updateDeliveryDistance?.(val, `Approx. ${val} km from restaurant`);
  };

  // Calculated Tier & Fee
  const currentCalculation = useMemo(() => {
    return getDeliveryFeeByDistance(customDistance);
  }, [customDistance]);

  return (
    <section 
      id="delivery" 
      className="relative py-20 lg:py-28 bg-wine-950 text-cream-100 overflow-hidden border-t border-gold-500/20"
      aria-label="Delivery Information and Distance Based Charges"
    >
      {/* Background Decorative Mandala Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <MandalaPattern className="w-full h-full text-gold-500" />
      </div>

      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gold opacity-15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-wine-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* MAIN SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine-900/90 border border-gold-500/40 text-gold-300 text-xs font-serif tracking-widest uppercase shadow-gold-sm">
            <Truck className="w-3.5 h-3.5 text-gold-400" />
            <span>Royal Doorstep Service</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cream-100 via-gold-200 to-cream-100 tracking-tight">
            DELIVERY AT YOUR DOORSTEP
          </h2>

          <p className="text-gold-300/90 font-serif italic text-base sm:text-lg">
            Freshly prepared. Carefully packed. Delivered to you.
          </p>

          <p className="text-cream-300/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Delivery charges are calculated based on the distance from our restaurant to your delivery location.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. DELIVERY INFORMATION CARD */}
        {/* ========================================================================= */}
        <div className="mb-14 bg-gradient-to-br from-wine-900/90 via-wine-925/80 to-wine-950 border border-gold-500/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>ORDER FROM ZOUK</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 leading-snug">
                Authentic Royal Feasts, Delivered Fresh &amp; Steaming Hot
              </h3>

              <p className="text-cream-200/90 text-sm sm:text-base leading-relaxed">
                Enjoy your favourite Biryani &amp; Main Course dishes from the comfort of your home. We carefully prepare and pack every order before sending it to you.
              </p>

              <div className="p-3.5 rounded-2xl bg-wine-950/70 border border-gold-500/25 flex items-start gap-3">
                <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <p className="text-xs text-cream-200/90 leading-relaxed">
                  <strong className="text-gold-300">Notice:</strong> Delivery charges are distance-based and may vary according to your location.
                </p>
              </div>

              {/* Packaging Standards Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {DELIVERY_CONFIG.packagingHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-cream-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Restaurant Dispatch Hub Box */}
            <div className="lg:col-span-5">
              <div className="bg-wine-950/90 border border-gold-500/35 rounded-2xl p-6 space-y-4 shadow-xl text-center sm:text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-cream-100">Our Kitchen Dispatch Center</h4>
                    <p className="text-[11px] text-gold-300">{DELIVERY_CONFIG.restaurantLocation.landmark}</p>
                  </div>
                </div>

                <div className="text-xs text-cream-300/80 space-y-1 pl-0 sm:pl-13">
                  <p className="font-semibold text-cream-100">{DELIVERY_CONFIG.restaurantLocation.address}</p>
                  <p>{DELIVERY_CONFIG.restaurantLocation.area}, {DELIVERY_CONFIG.restaurantLocation.city} – {DELIVERY_CONFIG.restaurantLocation.pincode}</p>
                  <p className="text-gold-400 pt-1 flex items-center gap-1.5 justify-center sm:justify-start">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Delivery Hours: {DELIVERY_CONFIG.deliveryHours}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-wine-800 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <a
                    href={`tel:${DELIVERY_CONFIG.hotlinePhone.replace(/[^0-9+]/g, '')}`}
                    className="px-3.5 py-2 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/30 text-gold-300 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                    <span>Call Hotline</span>
                  </a>
                  <a
                    href={`https://wa.me/${DELIVERY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Zouk Biryani, I would like to inquire about home delivery to my area.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DISTANCE-BASED DELIVERY CHARGES TABLE */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Receipt className="w-4 h-4" />
                <span>Distance-Based Delivery Slabs</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
                Delivery Charges
              </h3>
            </div>
            <span className="text-xs text-gold-300/80 bg-wine-900/90 px-3.5 py-1.5 rounded-xl border border-gold-500/30 self-start sm:self-auto font-medium">
              Official Restaurant Delivery Rates
            </span>
          </div>

          {/* Slabs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DELIVERY_CONFIG.tiers.map((tier: DeliveryTier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  tier.isPopular
                    ? 'bg-gradient-to-b from-wine-850 via-wine-900 to-wine-950 border-2 border-gold-400/80 shadow-gold-md scale-[1.02]'
                    : 'bg-wine-900/60 border border-gold-500/25 hover:border-gold-400/50 hover:bg-wine-900/80 shadow-lg'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-wine-950 font-black text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-gold-sm">
                    Local Zone
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold tracking-widest text-gold-400 uppercase">
                      DISTANCE
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-wine-800 text-cream-300 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold-400" />
                      {tier.estimatedTime}
                    </span>
                  </div>

                  <div className="font-serif text-2xl font-bold text-cream-100">
                    {tier.distanceLabel}
                  </div>

                  <p className="text-xs text-cream-300/80 leading-relaxed min-h-[36px]">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-wine-800/80 flex items-baseline justify-between">
                  <span className="text-xs text-cream-400 font-medium">DELIVERY CHARGE</span>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-extrabold text-gold-300">
                      ₹{tier.charge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beyond 10 KM Note */}
          <div className="mt-5 p-4 rounded-2xl bg-wine-900/60 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-cream-200">
              <Info className="w-4 h-4 text-gold-400 shrink-0" />
              <span>
                <strong>Distances beyond 10 KM:</strong> {DELIVERY_CONFIG.beyond10KmNotice}
              </span>
            </div>
            <a
              href={`tel:${DELIVERY_CONFIG.hotlinePhone.replace(/[^0-9+]/g, '')}`}
              className="px-3.5 py-1.5 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/40 text-gold-300 font-bold text-[11px] flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>Contact Hotline</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. HOW DELIVERY CHARGES WORK (3-STEP VISUAL) */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Simple 3-Step Process</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
              How Delivery Charges Work
            </h3>
            <p className="text-xs sm:text-sm text-cream-300/80">
              Clear distance calculation with every order
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="relative bg-wine-900/50 border border-gold-500/25 hover:border-gold-400/50 rounded-2xl p-6 sm:p-7 space-y-4 group transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl font-black text-gold-500/30 group-hover:text-gold-400/50 transition-colors">
                  01
                </span>
              </div>

              <h4 className="font-serif text-lg font-bold text-cream-100 uppercase tracking-wide">
                ENTER YOUR LOCATION
              </h4>

              <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed">
                Provide your delivery location while placing your order.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-wine-900/50 border border-gold-500/25 hover:border-gold-400/50 rounded-2xl p-6 sm:p-7 space-y-4 group transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                  <Navigation className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl font-black text-gold-500/30 group-hover:text-gold-400/50 transition-colors">
                  02
                </span>
              </div>

              <h4 className="font-serif text-lg font-bold text-cream-100 uppercase tracking-wide">
                DISTANCE IS CALCULATED
              </h4>

              <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed">
                Delivery distance is determined from the restaurant to your location.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-wine-900/50 border border-gold-500/25 hover:border-gold-400/50 rounded-2xl p-6 sm:p-7 space-y-4 group transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                  <Receipt className="w-6 h-6" />
                </div>
                <span className="font-serif text-3xl font-black text-gold-500/30 group-hover:text-gold-400/50 transition-colors">
                  03
                </span>
              </div>

              <h4 className="font-serif text-lg font-bold text-cream-100 uppercase tracking-wide">
                DELIVERY CHARGE IS APPLIED
              </h4>

              <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed">
                The applicable delivery charge is added according to the distance.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. LOCATION / DISTANCE ESTIMATOR UI ("CHECK DELIVERY CHARGE") */}
        {/* ========================================================================= */}
        <div className="mb-14 bg-gradient-to-r from-wine-900 via-wine-850 to-wine-900 border-2 border-gold-500/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100">
                Check your delivery charge
              </h3>
              <p className="text-xs sm:text-sm text-gold-300/90">
                Delivery charges depend on your distance from Zouk Biryani.
              </p>
            </div>

            {/* Location Selector / Distance Input */}
            <div className="bg-wine-950/80 border border-wine-700/80 rounded-2xl p-5 sm:p-6 space-y-5">
              
              {/* Sector Quick Select */}
              <div>
                <label className="block text-xs font-serif font-bold text-gold-300 uppercase tracking-wider mb-2">
                  Select Your Greater Noida Society / Sector:
                </label>
                <select
                  value={manualMode ? '' : selectedSector}
                  onChange={(e) => handleSectorChange(e.target.value)}
                  className="w-full bg-wine-900 border border-gold-500/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-cream-100 focus:outline-none focus:border-gold-400 cursor-pointer"
                >
                  {GREATER_NOIDA_SECTORS.map((s) => (
                    <option key={s.name} value={s.name} className="bg-wine-950 text-cream-100">
                      {s.name} ({s.approxDistanceKm} km)
                    </option>
                  ))}
                </select>
              </div>

              {/* Distance Slider */}
              <div className="space-y-2 pt-2 border-t border-wine-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cream-300 font-medium">
                    Or adjust estimated distance manually:
                  </span>
                  <span className="font-serif font-bold text-gold-300 text-sm">
                    {customDistance} km
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.1"
                  value={customDistance}
                  onChange={(e) => handleDistanceSlider(parseFloat(e.target.value))}
                  className="w-full h-2 bg-wine-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
                />
                <div className="flex justify-between text-[10px] text-cream-400 font-mono">
                  <span>2–3 KM (₹30)</span>
                  <span>3–5 KM (₹50)</span>
                  <span>5–7 KM (₹70)</span>
                  <span>7–10 KM (₹90)</span>
                  <span>&gt;10 KM (Contact)</span>
                </div>
              </div>

              {/* Live Calculated Estimate Result Card */}
              <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-wine-900 via-wine-850 to-wine-900 border border-gold-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
                {currentCalculation.isBeyond10Km ? (
                  <div className="space-y-1 text-center sm:text-left w-full">
                    <div className="text-[11px] text-gold-400 uppercase tracking-widest font-semibold">
                      Distance: {customDistance} KM (Beyond Standard Delivery Zone)
                    </div>
                    <div className="font-serif text-base font-bold text-cream-100">
                      {currentCalculation.message}
                    </div>
                    <p className="text-xs text-cream-300/80">
                      Please contact our kitchen hotline directly for special delivery arrangements.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-1 text-center sm:text-left">
                      <div className="text-[11px] text-gold-400 uppercase tracking-widest font-semibold">
                        Applicable Delivery Slab
                      </div>
                      <div className="font-serif text-lg font-bold text-cream-100 flex items-center gap-2 justify-center sm:justify-start">
                        <span>{currentCalculation.tier?.distanceLabel}</span>
                        <span className="text-xs font-normal text-cream-300">({currentCalculation.tier?.description})</span>
                      </div>
                      <div className="text-xs text-cream-300 flex items-center gap-1.5 justify-center sm:justify-start">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        <span>Est. Delivery Time: <strong className="text-cream-100">{currentCalculation.tier?.estimatedTime}</strong></span>
                      </div>
                    </div>

                    <div className="text-center sm:text-right shrink-0">
                      <div className="text-[10px] uppercase tracking-wider text-cream-400">
                        Delivery Charge
                      </div>
                      <div className="font-serif text-3xl font-black text-gold-300">
                        ₹{currentCalculation.fee}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#menu"
                  className="flex-1 py-3 px-4 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-gold-sm transition-all"
                >
                  <Flame className="w-4 h-4" />
                  <span>Explore Menu &amp; Order</span>
                </a>
                <button
                  onClick={openCart}
                  className="py-3 px-6 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/40 text-gold-300 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>View Feast Tray</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. DELIVERY NOTE & DISCLAIMER */}
        {/* ========================================================================= */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="p-4 rounded-2xl bg-wine-900/60 border border-gold-500/20 text-xs text-cream-300/90 leading-relaxed">
            <p className="font-medium">
              <span className="text-gold-400 font-serif font-bold">Delivery Note: </span>
              {DELIVERY_CONFIG.deliveryNotice}
            </p>
          </div>
          <p className="text-[11px] text-cream-400/60">
            For special corporate catering or large handi bulk inquiries, please contact our kitchen hotline directly.
          </p>
        </div>

      </div>
    </section>
  );
};
