import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Flame, 
  Sparkles, 
  Utensils, 
  Crown, 
  Drumstick, 
  Leaf, 
  Layers, 
  GlassWater, 
  HeartHandshake, 
  Phone
} from 'lucide-react';

interface PhysicalMenuCardViewProps {
  onOpenFullscreen?: (pageIndex: number) => void;
}

export const PhysicalMenuCardView: React.FC<PhysicalMenuCardViewProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="bg-wine-900/90 border border-gold-500/40 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-card-dark">
        {/* Page Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
          {[
            { page: 1, label: 'Page 1: Cover' },
            { page: 2, label: 'Page 2: Starters & Biryani' },
            { page: 3, label: 'Page 3: Main Course & Thalis' },
            { page: 4, label: 'Page 4: Desserts & Beverages' },
          ].map((tab) => (
            <button
              key={tab.page}
              onClick={() => setCurrentPage(tab.page)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                currentPage === tab.page
                  ? 'bg-gold-gradient text-wine-950 shadow-gold-sm'
                  : 'bg-wine-950/80 text-cream-300 hover:text-cream-100 hover:bg-wine-850 border border-wine-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1 bg-wine-950 rounded-xl border border-wine-800 p-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg text-cream-300 hover:text-gold-300 disabled:opacity-30 disabled:hover:text-cream-300 transition-colors"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-gold-300 px-2 font-mono">
              {currentPage} / 4
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
              disabled={currentPage === 4}
              className="p-1.5 rounded-lg text-cream-300 hover:text-gold-300 disabled:opacity-30 disabled:hover:text-cream-300 transition-colors"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/30 text-cream-200 text-xs font-bold transition-colors"
            title="Print or Save as PDF"
          >
            <Download className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          PHYSICAL MENU CARD CONTAINER (EXACT 4-PAGE PHYSICAL REPLICA)
          ========================================================================= */}
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/50 bg-[#16050b] relative text-cream-100 font-sans">
        
        {/* ================= PAGE 1: COVER PAGE ================= */}
        {currentPage === 1 && (
          <div className="p-8 sm:p-14 min-h-[620px] flex flex-col items-center justify-between text-center relative overflow-hidden bg-gradient-to-b from-[#3a0817] via-[#24030d] to-[#16050b]">
            {/* Ornamental Gold Outer Border */}
            <div className="absolute inset-4 sm:inset-6 border-2 border-gold-500/60 rounded-2xl pointer-events-none flex flex-col justify-between p-2">
              <div className="flex justify-between text-gold-400 text-xs tracking-widest">
                <span>✦ ✦ ✦ ✦ ✦</span>
                <span>✦ ✦ ✦ ✦ ✦</span>
              </div>
              <div className="flex justify-between text-gold-400 text-xs tracking-widest">
                <span>✦ ✦ ✦ ✦ ✦</span>
                <span>✦ ✦ ✦ ✦ ✦</span>
              </div>
            </div>

            {/* Top Brand Name */}
            <div className="pt-8 relative z-10 space-y-2">
              <h1 className="font-serif text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-100 to-gold-400 tracking-wider drop-shadow-md">
                ZOUK
              </h1>
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] w-12 sm:w-20 bg-gold-500/80" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-cream-200">
                  BIRYANI &amp; MAIN COURSE
                </span>
                <div className="h-[1px] w-12 sm:w-20 bg-gold-500/80" />
              </div>
            </div>

            {/* Central Royal Medallion */}
            <div className="my-8 sm:my-10 relative z-10">
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border-4 border-dashed border-gold-500/80 flex items-center justify-center relative bg-gradient-to-b from-wine-900/60 to-wine-950/80 shadow-2xl shadow-gold-500/20">
                <div className="absolute inset-2 rounded-full border border-gold-400/40" />
                <div className="text-center">
                  <span className="font-serif text-6xl sm:text-7xl font-black text-gold-300 drop-shadow-lg block">
                    Z
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400 mx-auto mt-1" />
                </div>
              </div>
            </div>

            {/* Bottom Menu Title */}
            <div className="pb-8 relative z-10 space-y-3 max-w-lg">
              <div className="border-y-2 border-gold-500/70 py-2.5">
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-cream-100">
                  FOOD &amp; DESSERTS
                </h2>
              </div>

              <div className="inline-block">
                <span className="text-base sm:text-xl font-bold uppercase tracking-widest text-gold-300 border-b-2 border-gold-400 pb-1">
                  OFFICIAL MENU CARD
                </span>
              </div>

              <p className="text-xs text-cream-300/80 pt-2 font-light">
                Authentic Dum Pukht Dum Biryani &amp; Mughlai Delicacies • Omaxe NRI City Centre, Greater Noida
              </p>
            </div>
          </div>
        )}

        {/* ================= PAGE 2: STARTERS & BIRYANI ================= */}
        {currentPage === 2 && (
          <div className="p-6 sm:p-10 bg-[#1c040d] relative text-cream-100">
            {/* Header */}
            <div className="text-center border-b-2 border-gold-500/50 pb-4 mb-6">
              <h2 className="font-serif text-3xl font-black text-gold-300 tracking-wider">ZOUK</h2>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream-300">BIRYANI &amp; MAIN COURSE</p>
              <div className="mt-2 inline-block px-3 py-0.5 rounded-full bg-wine-900 border border-gold-500/40 text-[10px] uppercase font-bold text-gold-400">
                TRADITIONAL RECIPES MADE WITH PREMIUM INGREDIENTS
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: DUM BIRYANI & APPETIZERS */}
              <div className="space-y-6">
                {/* DUM BIRYANI */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">DUM BIRYANI</h3>
                    </div>
                    <span className="text-[10px] text-cream-300 font-mono font-bold">2 Pcs (Half) / 4 Pcs (Full)</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Vegetable Dum Biryani', p1: '199', p2: '299', veg: true },
                      { name: 'Soya Dum Biryani', p1: '209', p2: '309', veg: true },
                      { name: 'Paneer Tikka Dum Biryani', p1: '219', p2: '319', veg: true },
                      { name: 'Egg Dum Biryani', p1: '219', p2: '319', egg: true },
                      { name: 'Chicken Dum Biryani', p1: '229', p2: '359' },
                      { name: 'Chicken Tikka Dum Biryani', p1: '239', p2: '369' },
                      { name: 'Chicken Galouti Dum Biryani', p1: '249', p2: '399' },
                      { name: 'Chicken Seekh Dum Biryani', p1: '249', p2: '399' },
                      { name: 'Chicken-65 Dum Biryani', p1: '249', p2: '399' },
                      { name: 'Mutton Dum Biryani', p1: '269', p2: '409' },
                      { name: 'Mutton Seekh Dum Biryani', p1: '309', p2: '449' },
                      { name: 'Mutton Galouti Dum Biryani', p1: '309', p2: '459' },
                      { name: 'Fish Tikka Dum Biryani', p1: '259', p2: '399' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-400' : item.egg ? 'bg-amber-400' : 'bg-red-400'}`} />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.p1} / ₹{item.p2}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* APPETIZERS */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">APPETIZERS</h3>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Chilli Potato', price: '169', veg: true },
                      { name: 'Honey Chilli Potato', price: '189', veg: true },
                      { name: 'Chilli Paneer', price: '209', veg: true },
                      { name: 'Veg Galouti Kebab', price: '199', veg: true },
                      { name: 'Veg Spring Roll', price: '199', veg: true },
                      { name: 'Paneer Spring Roll', price: '219', veg: true },
                      { name: 'Chicken Spring Roll', price: '239' },
                      { name: 'Chicken - 65', price: '219' },
                      { name: 'Chilli Chicken', price: '239' },
                      { name: 'Chicken Lollipop', price: '209' },
                      { name: 'Sticky Chicken Wings', price: '239' },
                      { name: 'Chicken Galouti Kebab', price: '249' },
                      { name: 'Mutton Galouti Kebab', price: '399' },
                      { name: 'Chicken Galouti with Paratha', price: '179 / 319' },
                      { name: 'Mutton Galouti with Paratha', price: '239 / 449' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: CHINESE & TANDOOR */}
              <div className="space-y-6">
                {/* CHINESE */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">CHINESE</h3>
                    </div>
                    <span className="text-[10px] text-cream-300 font-mono font-bold">Half / Full</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Hakka Noodle', p1: '119', p2: '189', veg: true },
                      { name: 'Chilli Garlic Noodle', p1: '139', p2: '209', veg: true },
                      { name: 'Egg Noodle', p1: '139', p2: '209', egg: true },
                      { name: 'Chicken Noodle', p1: '159', p2: '239' },
                      { name: 'Veg Fried Rice', p1: '129', p2: '209', veg: true },
                      { name: 'Paneer Fried Rice', p1: '139', p2: '219', veg: true },
                      { name: 'Egg Fried Rice', p1: '139', p2: '219', egg: true },
                      { name: 'Chicken Fried Rice', p1: '149', p2: '269' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-400' : item.egg ? 'bg-amber-400' : 'bg-red-400'}`} />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.p1} / ₹{item.p2}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TANDOOR */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Drumstick className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">TANDOOR</h3>
                    </div>
                    <span className="text-[10px] text-cream-300 font-mono font-bold">Half / Full</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Tandoori Soya Chaap', price: '129 / 219', veg: true },
                      { name: 'Malai Soya Chaap', price: '139 / 229', veg: true },
                      { name: 'Afghani Soya Chaap', price: '139 / 229', veg: true },
                      { name: 'Paneer Tikka', price: '149 / 249', veg: true },
                      { name: 'Malai Paneer Tikka', price: '159 / 259', veg: true },
                      { name: 'Veg Tandoori Platter (12 Pcs)', price: '399', veg: true },
                      { name: 'Chicken Seekh Kebab', price: '169 / 289' },
                      { name: 'Tandoori Chicken', price: '259 / 409' },
                      { name: 'Afghani Chicken Dry', price: '289 / 469' },
                      { name: 'Chicken Tikka', price: '199 / 309' },
                      { name: 'Chicken Malai Tikka', price: '239 / 329' },
                      { name: 'Non Veg Tandoori Platter (10 Pcs)', price: '499' },
                      { name: 'Mutton Seekh Kebab', price: '209 / 419' },
                      { name: 'Mutton Burra', price: '399' },
                      { name: 'Fish Tikka', price: '219 / 399' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 3: MAIN COURSE & THALIS ================= */}
        {currentPage === 3 && (
          <div className="p-6 sm:p-10 bg-[#1c040d] relative text-cream-100">
            {/* Header */}
            <div className="text-center border-b-2 border-gold-500/50 pb-4 mb-6">
              <h2 className="font-serif text-3xl font-black text-gold-300 tracking-wider">ZOUK</h2>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream-300">ROYAL MAIN COURSE &amp; THALIS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: THALIS & NON-VEG MAIN COURSE */}
              <div className="space-y-6">
                {/* THALIS */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <Crown className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">ROYAL THALIS</h3>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    {[
                      { name: 'Delux Veg Thali', desc: 'Paneer of The Day, Dal Makhani, Rice, Butter Roti, Raita, Salad', price: '219', veg: true },
                      { name: 'Premium Veg Thali', desc: 'Paneer of The Day, Dal Makhani, Paneer Tikka Biryani, Butter Naan, Dessert, Salad', price: '289', veg: true },
                      { name: 'Delux Non Veg Thali', desc: 'Chicken of The Day, Dal Makhani, Rice, Butter Roti, Raita, Salad', price: '289' },
                      { name: 'Premium Non Veg Thali', desc: 'Chicken of The Day, Dal Makhani, Chicken Tikka Biryani, Butter Naan, Dessert, Salad', price: '319' },
                      { name: 'Mutton Thali', desc: 'Mutton of The Day, Mutton Korma, Rice, Khamiri Roti, Raita, Salad', price: '339' },
                    ].map((item, idx) => (
                      <div key={idx} className="border-b border-wine-800/80 pb-2 last:border-0 last:pb-0">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-cream-100 flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                            {item.name}
                          </span>
                          <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                        </div>
                        <p className="text-[10px] text-cream-300/80 mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* NON-VEG MAIN COURSE */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">NON VEG MAIN COURSE</h3>
                    </div>
                    <span className="text-[10px] text-cream-300 font-mono">Quarter / Half / Full</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Chicken Curry', price: '239 / 359 / 639' },
                      { name: 'Kadhai Chicken', price: '249 / 369 / 659' },
                      { name: 'Butter Chicken', price: '249 / 369 / 659' },
                      { name: 'Chicken Qorma', price: '249 / 369 / 659' },
                      { name: 'Chicken Rara', price: '269 / 379 / 689' },
                      { name: 'Chicken Jahangiri', price: '249 / 369 / 659' },
                      { name: 'Chicken Stew', price: '269 / 379 / 689' },
                      { name: 'Saag Chicken', price: '249 / 369 / 659' },
                      { name: 'Afghani Cream Chicken', price: '249 / 369 / 659' },
                      { name: 'Chicken Keema Aloo', price: '299' },
                      { name: 'Butter Chicken Boneless', price: '249 / 369 / 659' },
                      { name: 'Chicken Jahangiri Boneless', price: '249 / 369 / 659' },
                      { name: 'Afghani Cream Chicken Boneless', price: '249 / 369 / 659' },
                      { name: 'Chicken Tikka Masala Boneless', price: '249 / 369 / 659' },
                      { name: 'Fish Curry', price: '249 / 369 / 659' },
                      { name: 'Mutton Curry', price: '259 / 419' },
                      { name: 'Mutton Kadhai', price: '269 / 439' },
                      { name: 'Mutton Nehari', price: '289 / 459' },
                      { name: 'Mutton Qorma', price: '269 / 439' },
                      { name: 'Mutton Stew', price: '289 / 459' },
                      { name: 'Mutton Jahangiri', price: '269 / 439' },
                      { name: 'Egg Curry', price: '179 / 239', egg: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.egg ? 'bg-amber-400' : 'bg-red-400'}`} />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: BREADS, PARATHAS, VEG MAIN & ROLLS */}
              <div className="space-y-6">
                {/* BREADS & PARATHAS */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <Layers className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">BREADS &amp; PARATHAS</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                    {[
                      { name: 'Rumali Roti', price: '25' },
                      { name: 'Khamiri Roti', price: '25' },
                      { name: 'Plain Naan', price: '30' },
                      { name: 'Butter Naan', price: '35' },
                      { name: 'Garlic Naan', price: '45' },
                      { name: 'Roghini Naan', price: '50' },
                      { name: 'Whole Wheat Tandoori Roti', price: '25' },
                      { name: 'Tandoori Butter Roti', price: '30' },
                      { name: 'Khamiri Butter Roti', price: '30' },
                      { name: 'Laccha Paratha', price: '30' },
                      { name: 'Ulta Tawa Paratha', price: '30' },
                      { name: 'Stuff Naan', price: '60' },
                      { name: 'Aloo Paratha', price: '99' },
                      { name: 'Paneer Paratha', price: '139' },
                      { name: 'Chicken Keema Paratha', price: '179' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-cream-200">{item.name}</span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VEG MAIN COURSE */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-emerald-400" />
                      <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">VEG MAIN COURSE</h3>
                    </div>
                    <span className="text-[10px] text-cream-300 font-mono">Half / Full</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Dal Fry', price: '139 / 229' },
                      { name: 'Dal Tadka', price: '139 / 229' },
                      { name: 'Dal Makhani', price: '149 / 239' },
                      { name: 'Butter Paneer Masala', price: '149 / 259' },
                      { name: 'Rara Paneer', price: '159 / 269' },
                      { name: 'Kadhai Paneer', price: '149 / 239' },
                      { name: 'Shahi Paneer', price: '149 / 239' },
                      { name: 'Matar Paneer', price: '149 / 239' },
                      { name: 'Malai Kofta', price: '249' },
                      { name: 'Mix Vegetable', price: '149 / 219' },
                      { name: 'Hara Dhaniya Aloo Masala', price: '149 / 219' },
                      { name: 'Paneer Bhurji', price: '249' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROLLS */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <Flame className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">KATHI ROLLS</h3>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Chicken Seekh Roll', price: '199' },
                      { name: 'Chicken Tikka Roll', price: '199' },
                      { name: 'Chicken Malai Tikka Roll', price: '199' },
                      { name: 'Mutton Seekh Roll', price: '239' },
                      { name: 'Paneer Tikka Roll', price: '199', veg: true },
                      { name: 'Soya Tikka Roll', price: '199', veg: true },
                      { name: 'Malai Chap Roll', price: '199', veg: true },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 4: DESSERTS, MOJITOS & BEVERAGES ================= */}
        {currentPage === 4 && (
          <div className="p-6 sm:p-10 bg-[#1c040d] relative text-cream-100">
            {/* Header */}
            <div className="text-center border-b-2 border-gold-500/50 pb-4 mb-6">
              <h2 className="font-serif text-3xl font-black text-gold-300 tracking-wider">ZOUK</h2>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream-300">DESSERTS, MOJITOS, BURGERS &amp; BEVERAGES</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: DESSERT, BEVERAGES & EXTRAS */}
              <div className="space-y-6">
                {/* DESSERT */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <HeartHandshake className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">SHAHI DESSERT</h3>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Shahi Tukda', price: '120' },
                      { name: 'Zafrani Phirni', price: '80' },
                      { name: 'Gulab Jamun', price: '60' },
                      { name: 'Kheer', price: '80' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-cream-200">{item.name}</span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BEVERAGES */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <GlassWater className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">BEVERAGES</h3>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Special Elaichi Tea', price: '25' },
                      { name: 'Hot Coffee', price: '60' },
                      { name: 'Cold Coffee', price: '80' },
                      { name: 'Cold Drink', price: 'MRP' },
                      { name: 'Fresh Lime Soda', price: '50' },
                      { name: 'Masala Shikanji', price: '60' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-cream-200">{item.name}</span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EXTRA ACCOMPANIMENTS */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <Utensils className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">ACCOMPANIMENTS (EXTRA)</h3>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Boondi Raita', price: '20' },
                      { name: 'Mix Veg Raita', price: '30' },
                      { name: 'Extra Salad', price: '30' },
                      { name: 'Extra Gravy', price: '50' },
                      { name: 'Plain Rice', price: '129' },
                      { name: 'Jeera Rice', price: '179' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-cream-200">{item.name}</span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: MOJITO & BURGER/PAV */}
              <div className="space-y-6">
                {/* MOJITO */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <GlassWater className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">MOJITOS</h3>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Blue Berry Mojito', price: '119' },
                      { name: 'Lemon & Mint Mojito', price: '119' },
                      { name: 'Green Apple Mojito', price: '119' },
                      { name: 'Varjin Mojito', price: '119' },
                      { name: 'Litchi Mojito', price: '119' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-cream-200">{item.name}</span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BURGER & PAV */}
                <div className="bg-wine-900/60 border border-gold-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 border-b border-gold-500/40 pb-2 mb-3">
                    <Utensils className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-base font-black text-gold-300 uppercase tracking-wider">BURGER &amp; PAV</h3>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Veg Cheese Burger', price: '119', veg: true },
                      { name: 'Paneer Cheese Burger', price: '140', veg: true },
                      { name: 'Chicken Galouti Cheese Burger', price: '145' },
                      { name: 'Chicken Seekh Cheese Burger', price: '155' },
                      { name: 'Mutton Seekh Cheese Burger', price: '199' },
                      { name: 'Mutton Galouti Cheese Burger', price: '199' },
                      { name: 'Fish Tikka Cheese Burger', price: '169' },
                      { name: 'Veg Bun Pav', price: '129', veg: true },
                      { name: 'Chicken Bun Pav', price: '169' },
                      { name: 'Mutton Bun Pav', price: '219' },
                      { name: 'Chicken Keema Pav', price: '149' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                          <span className="text-cream-200">{item.name}</span>
                        </span>
                        <span className="font-mono text-gold-400 font-bold">₹{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hotline Banner on Page 4 */}
                <div className="p-4 rounded-2xl bg-wine-950 border border-gold-500/40 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-wine-900 border border-gold-500/30 text-gold-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gold-400 font-bold">Order Hotline &amp; WhatsApp</p>
                      <p className="font-serif text-sm font-bold text-cream-100">+91 8920793479</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918920793479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gold-gradient text-wine-950 font-black text-xs shadow-gold-sm hover:brightness-110 active:scale-95 transition-all"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Page Navigation Bar Inside Card */}
        <div className="p-4 bg-[#120208] border-t border-gold-500/40 flex items-center justify-between text-xs text-cream-300">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 text-gold-300 font-bold disabled:opacity-30 hover:underline"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Page
          </button>

          <span className="font-mono text-gold-400 font-bold">
            Page {currentPage} of 4 • ZOUK Official Menu Card
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
            disabled={currentPage === 4}
            className="flex items-center gap-1 text-gold-300 font-bold disabled:opacity-30 hover:underline"
          >
            Next Page <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
