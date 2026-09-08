import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { MENU_ITEMS } from '../../data/menuData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Phone, 
  Plus, 
  Check, 
  Download, 
  Crown, 
  Flame, 
  Utensils, 
  Layers, 
  HeartHandshake, 
  GlassWater
} from 'lucide-react';

interface PhysicalMenuCardViewProps {
  onOpenFullscreen?: (pageIndex: number) => void;
}

export const PhysicalMenuCardView: React.FC<PhysicalMenuCardViewProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { addItem } = useCart();
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  const handleQuickAdd = (searchName: string, fallbackPrice: number, category: any = 'all') => {
    const item = MENU_ITEMS.find(
      (i) => i.name.toLowerCase().includes(searchName.toLowerCase()) || 
             searchName.toLowerCase().includes(i.name.toLowerCase())
    );

    if (item) {
      addItem(item);
      setAddedItemName(item.name);
    } else {
      // Fallback virtual item
      addItem({
        id: `menu-card-${searchName.toLowerCase().replace(/\s+/g, '-')}`,
        name: searchName,
        description: 'Authentic item from official physical menu card',
        price: fallbackPrice,
        category: category,
        dietary: searchName.toLowerCase().includes('chicken') || searchName.toLowerCase().includes('mutton') || searchName.toLowerCase().includes('fish') ? 'non-veg' : searchName.toLowerCase().includes('egg') ? 'egg' : 'veg',
        serves: 'Portion',
        rating: 4.8,
        reviewCount: 50,
        imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
      });
      setAddedItemName(searchName);
    }

    setTimeout(() => {
      setAddedItemName(null);
    }, 2000);
  };

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
            { page: 2, label: 'Page 2: Biryani & Tandoor' },
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

      {/* Added Toast Notification */}
      {addedItemName && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-900 border border-emerald-500/50 text-cream-100 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <Check className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-xs font-bold text-emerald-200">Added to Cart!</p>
            <p className="text-xs text-cream-200 font-semibold">{addedItemName}</p>
          </div>
        </div>
      )}

      {/* =========================================================================
          PHYSICAL MENU CARD PAGES (AUTHENTIC RECREATION & EXACT STYLING)
          ========================================================================= */}
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/50 bg-[#16050b] relative text-cream-100 font-sans">
        
        {/* =========================================================
            PAGE 1: COVER PAGE
            ========================================================= */}
        {currentPage === 1 && (
          <div className="p-8 sm:p-14 min-h-[750px] flex flex-col items-center justify-between text-center relative overflow-hidden bg-gradient-to-b from-[#3a0817] via-[#24030d] to-[#16050b]">
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
            <div className="my-8 sm:my-12 relative z-10">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-dashed border-gold-500/80 flex items-center justify-center relative bg-gradient-to-b from-wine-900/60 to-wine-950/80 shadow-2xl shadow-gold-500/20">
                {/* Outer pearl ring */}
                <div className="absolute inset-2 rounded-full border border-gold-400/40" />
                
                {/* Inner Logo Glyphs */}
                <div className="text-center">
                  <span className="font-serif text-6xl sm:text-8xl font-black text-gold-300 drop-shadow-lg block">
                    Z
                  </span>
                  <div className="w-3 h-3 rounded-full bg-gold-400 mx-auto mt-1" />
                </div>
              </div>
            </div>

            {/* Bottom Menu Title */}
            <div className="pb-8 relative z-10 space-y-4 max-w-lg">
              <div className="border-y-2 border-gold-500/70 py-3">
                <h2 className="font-serif text-2xl sm:text-4xl font-extrabold uppercase tracking-widest text-cream-100">
                  FOOD &amp; DESSERTS
                </h2>
              </div>

              <div className="inline-block">
                <span className="text-lg sm:text-2xl font-bold uppercase tracking-widest text-gold-300 border-b-2 border-gold-400 pb-1">
                  MENU CARD
                </span>
              </div>

              <p className="text-xs text-cream-300/80 pt-4">
                Authentic Awadhi &amp; Nizami Flavours • Slow Charcoal Dum Pukht • 32 Shahi Spices
              </p>

              <button
                onClick={() => setCurrentPage(2)}
                className="mt-4 px-6 py-2.5 rounded-full bg-gold-gradient text-wine-950 font-black text-xs uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-transform"
              >
                Open Menu Card (Page 2) →
              </button>
            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 2: DUM BIRYANI, APPETIZERS, CHINESE, TANDOOR
            ========================================================= */}
        {currentPage === 2 && (
          <div className="p-5 sm:p-8 space-y-8 bg-[#1f040c]">
            {/* Header */}
            <div className="text-center border-b-2 border-gold-500/40 pb-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-gold-300 tracking-wider">
                ZOUK
              </h2>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream-300">
                BIRYANI &amp; MAIN COURSE
              </p>
              <div className="mt-2 inline-block px-4 py-1 rounded-md border border-dashed border-gold-500/50 bg-wine-950/70">
                <span className="text-xs font-bold text-gold-300 uppercase tracking-widest">
                  TRADITIONAL RECIPES • MADE WITH PREMIUM INGREDIENTS
                </span>
              </div>
            </div>

            {/* Top Row: DUM BIRYANI & CHINESE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* SECTION: DUM BIRYANI */}
              <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                      DUM BIRYANI
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-gold-400 font-mono">
                    <span>(2 pcs)</span>
                    <span>/</span>
                    <span>(4 pcs)</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                  {[
                    { name: 'VEGETABLE DUM BIRYANI', half: 199, full: 299, veg: true },
                    { name: 'SOYA DUM BIRYANI', half: 209, full: 309, veg: true },
                    { name: 'PANEER TIKKA DUM BIRYANI', half: 219, full: 319, veg: true },
                    { name: 'EGG DUM BIRYANI', half: 219, full: 319, egg: true },
                    { name: 'CHICKEN DUM BIRYANI', half: 229, full: 359, nonVeg: true },
                    { name: 'CHICKEN TIKKA DUM BIRYANI', half: 239, full: 369, nonVeg: true },
                    { name: 'CHICKEN GALOUTI DUM BIRYANI', half: 249, full: 399, nonVeg: true },
                    { name: 'CHICKEN SEEKH DUM BIRYANI', half: 249, full: 399, nonVeg: true },
                    { name: 'CHICKEN-65 DUM BIRYANI', half: 249, full: 399, nonVeg: true },
                    { name: 'MUTTON DUM BIRYANI', half: 269, full: 409, nonVeg: true },
                    { name: 'MUTTON SEEKH DUM BIRYANI', half: 309, full: 449, nonVeg: true },
                    { name: 'MUTTON GALOUTI DUM BIRYANI', half: 309, full: 459, nonVeg: true },
                    { name: 'FISH TIKKA DUM BIRYANI', half: 259, full: 399, nonVeg: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-1.5 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.veg ? 'bg-emerald-400' : item.egg ? 'bg-amber-400' : 'bg-red-400'}`} />
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                        <span className="font-mono text-gold-300 font-bold">
                          ₹{item.half} / ₹{item.full}
                        </span>
                        <button
                          onClick={() => handleQuickAdd(item.name, item.full, 'dum-biryani')}
                          className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold transition-all"
                          title="Add to Cart"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: CHINESE */}
              <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                      CHINESE
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-gold-400 font-mono">
                    <span>Half</span>
                    <span>/</span>
                    <span>Full</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                  {[
                    { name: 'HAKKA NOODLE', half: 119, full: 189, veg: true },
                    { name: 'CHILLI GARLIC NOODLE', half: 139, full: 209, veg: true },
                    { name: 'EGG NOODLE', half: 139, full: 209, egg: true },
                    { name: 'CHICKEN NOODLE', half: 159, full: 239, nonVeg: true },
                    { name: 'VEG FRIED RICE', half: 129, full: 209, veg: true },
                    { name: 'PANEER FRIED RICE', half: 139, full: 219, veg: true },
                    { name: 'EGG FRIED RICE', half: 139, full: 219, egg: true },
                    { name: 'CHICKEN FRIED RICE', half: 149, full: 269, nonVeg: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-1.5 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.veg ? 'bg-emerald-400' : item.egg ? 'bg-amber-400' : 'bg-red-400'}`} />
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                        <span className="font-mono text-gold-300 font-bold">
                          ₹{item.half} / ₹{item.full}
                        </span>
                        <button
                          onClick={() => handleQuickAdd(item.name, item.full, 'chinese')}
                          className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold transition-all"
                          title="Add to Cart"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: APPETIZERS & TANDOOR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* SECTION: APPETIZERS */}
              <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                      APPETIZERS
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                </div>

                <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                  {[
                    { name: 'CHILLI POTATO', price: '169', veg: true },
                    { name: 'HONEY CHILLI POTATO', price: '189', veg: true },
                    { name: 'CHILLI PANEER', price: '209', veg: true },
                    { name: 'VEG GALOUTI KEBAB', price: '199', veg: true },
                    { name: 'VEG SPRING ROLL', price: '199', veg: true },
                    { name: 'PANEER SPRING ROLL', price: '219', veg: true },
                    { name: 'CHICKEN SPRING ROLL', price: '239', nonVeg: true },
                    { name: 'CHICKEN - 65', price: '219', nonVeg: true },
                    { name: 'CHILLI CHICKEN', price: '239', nonVeg: true },
                    { name: 'CHICKEN LOLLIPOP', price: '209', nonVeg: true },
                    { name: 'STICKY CHICKEN WINGS', price: '239', nonVeg: true },
                    { name: 'CHICKEN GALOUTI KEBAB', price: '249', nonVeg: true },
                    { name: 'MUTTON GALOUTI KEBAB', price: '399', nonVeg: true },
                    { name: 'CHICKEN GALOUTI WITH PARATHA', price: '179 / 319', nonVeg: true },
                    { name: 'MUTTON GALOUTI WITH PARATHA', price: '239 / 449', nonVeg: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-1.5 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                        <span className="font-mono text-gold-300 font-bold">
                          ₹{item.price}
                        </span>
                        <button
                          onClick={() => handleQuickAdd(item.name, parseInt(item.price), 'appetizers')}
                          className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold transition-all"
                          title="Add to Cart"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: TANDOOR */}
              <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                      TANDOOR
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-gold-400 font-mono">
                    <span>Half</span>
                    <span>/</span>
                    <span>Full</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                  {[
                    { name: 'TANDOORI SOYA CHAAP', price: '129 / 219', veg: true },
                    { name: 'MALAI SOYA CHAAP', price: '139 / 229', veg: true },
                    { name: 'AFGHANI SOYA CHAAP', price: '139 / 229', veg: true },
                    { name: 'PANEER TIKKA', price: '149 / 249', veg: true },
                    { name: 'MALAI PANEER TIKKA', price: '159 / 259', veg: true },
                    { name: 'VEG TANDOORI PLATTER (12 Pcs)', price: '399', veg: true },
                    { name: 'CHICKEN SEEKH KEBAB', price: '169 / 289', nonVeg: true },
                    { name: 'TANDOORI CHICKEN', price: '259 / 409', nonVeg: true },
                    { name: 'AFGHANI CHICKEN DRY', price: '289 / 469', nonVeg: true },
                    { name: 'CHICKEN TIKKA', price: '199 / 309', nonVeg: true },
                    { name: 'CHICKEN MALAI TIKKA', price: '239 / 329', nonVeg: true },
                    { name: 'NON VEG TANDOORI PLATTER (10 Pcs)', price: '499', nonVeg: true },
                    { name: 'MUTTON SEEKH KEBAB', price: '209 / 419', nonVeg: true },
                    { name: 'MUTTON BURRA', price: '399', nonVeg: true },
                    { name: 'FISH TIKKA', price: '219 / 399', nonVeg: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-1.5 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                        <span className="font-mono text-gold-300 font-bold">
                          ₹{item.price}
                        </span>
                        <button
                          onClick={() => handleQuickAdd(item.name, parseInt(item.price.split('/')[0]), 'tandoor')}
                          className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold transition-all"
                          title="Add to Cart"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 3: THALIS, NON-VEG MAIN COURSE, BREADS, VEG & ROLLS
            ========================================================= */}
        {currentPage === 3 && (
          <div className="p-5 sm:p-8 space-y-8 bg-[#1f040c]">
            {/* Header */}
            <div className="text-center border-b-2 border-gold-500/40 pb-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-gold-300 tracking-wider">
                ROYAL CURRIES &amp; THALIS
              </h2>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream-300">
                SLOW COOKED WITH CENTURIES-OLD AWADHI TRADITIONS
              </p>
            </div>

            {/* Top Row: THALIS & BREADS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* SECTION: THALIS */}
              <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                      THALIS
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                </div>

                <div className="space-y-3 text-xs">
                  {[
                    {
                      name: 'DELUX VEG THALI',
                      desc: 'Paneer of The Day, Dal Makhani, Rice, Butter Roti, Raita, Salad',
                      price: 219,
                      veg: true,
                    },
                    {
                      name: 'PREMIUM VEG THALI',
                      desc: 'Paneer of The Day, Dal Makhani, Paneer Tikka Biryani, Butter Naan, Dessert, Salad',
                      price: 289,
                      veg: true,
                    },
                    {
                      name: 'DELUX NON VEG THALI',
                      desc: 'Chicken of The Day, Dal Makhani, Rice, Butter Roti, Raita, Salad',
                      price: 289,
                      nonVeg: true,
                    },
                    {
                      name: 'PREMIUM NON VEG THALI',
                      desc: 'Chicken of The Day, Dal Makhani, Chicken Tikka Biryani, Butter Naan, Dessert, Salad',
                      price: 319,
                      nonVeg: true,
                    },
                    {
                      name: 'MUTTON THALI',
                      desc: 'Mutton of The Day, Mutton Korma, Rice, Khamiri Roti, Raita, Salad',
                      price: 339,
                      nonVeg: true,
                    },
                  ].map((thali, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-wine-900/60 border border-wine-800 group hover:border-gold-500/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${thali.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                          <h4 className="font-bold text-cream-100 group-hover:text-gold-300 transition-colors">
                            {thali.name}
                          </h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gold-400 font-bold">₹{thali.price}</span>
                          <button
                            onClick={() => handleQuickAdd(thali.name, thali.price, 'thalis')}
                            className="px-2 py-0.5 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      <p className="text-[11px] text-cream-300/80 mt-1 leading-relaxed pl-3.5">
                        {thali.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: BREADS & PARATHAS */}
              <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                      BREADS &amp; PARATHAS
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                </div>

                <div className="space-y-1.5 text-xs divide-y divide-wine-800/40">
                  {[
                    { name: 'RUMALI ROTI', price: 25 },
                    { name: 'KHAMIRI ROTI', price: 25 },
                    { name: 'PLAIN NAAN', price: 30 },
                    { name: 'BUTTER NAAN', price: 35 },
                    { name: 'GARLIC NAAN', price: 45 },
                    { name: 'ROGHINI NAAN', price: 50 },
                    { name: 'WHOLE WHEAT TANDOORI ROTI', price: 25 },
                    { name: 'TANDOORI BUTTER ROTI', price: 30 },
                    { name: 'KHAMIRI BUTTER ROTI', price: 30 },
                    { name: 'LACCHA PARATHA', price: 30 },
                    { name: 'ULTA TAWA PARATHA', price: 30 },
                    { name: 'STUFF NAAN', price: 60 },
                    { name: 'ALOO PARATHA', price: 99 },
                    { name: 'PANEER PARATHA', price: 139 },
                    { name: 'CHICKEN KEEMA PARATHA', price: 179 },
                  ].map((bread, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                      <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors">
                        {bread.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-gold-300 font-bold">₹{bread.price}</span>
                        <button
                          onClick={() => handleQuickAdd(bread.name, bread.price, 'breads')}
                          className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: NON VEG MAIN COURSE, VEG MAIN COURSE & ROLLS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* SECTION: NON VEG MAIN COURSE */}
              <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-gold-400" />
                    <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                      NON VEG MAIN COURSE
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-gold-400 font-mono">Half / Full / Handi</span>
                </div>

                <div className="space-y-1.5 text-xs divide-y divide-wine-800/40 max-h-[420px] overflow-y-auto pr-1">
                  {[
                    { name: 'CHICKEN CURRY', price: '239 / 359 / 639' },
                    { name: 'KADHAI CHICKEN', price: '249 / 369 / 659' },
                    { name: 'BUTTER CHICKEN', price: '249 / 369 / 659' },
                    { name: 'CHICKEN QORMA', price: '249 / 369 / 659' },
                    { name: 'CHICKEN RARA', price: '269 / 379 / 689' },
                    { name: 'CHICKEN JAHANGIRI', price: '249 / 369 / 659' },
                    { name: 'CHICKEN STEW', price: '269 / 379 / 689' },
                    { name: 'SAAG CHICKEN', price: '249 / 369 / 659' },
                    { name: 'AFGHANI CREAM CHICKEN', price: '249 / 369 / 659' },
                    { name: 'CHICKEN KEEMA ALOO', price: '299' },
                    { name: 'BUTTER CHICKEN BONELESS', price: '249 / 369 / 659' },
                    { name: 'CHICKEN JAHANGIRI BONELESS', price: '249 / 369 / 659' },
                    { name: 'AFGHANI CREAME CHICKEN BONELESS', price: '249 / 369 / 659' },
                    { name: 'CHICKEN TIKKA MASALA BONELESS', price: '249 / 369 / 659' },
                    { name: 'FISH CURRY', price: '249 / 369 / 659' },
                    { name: 'MUTTON CURRY', price: '259 / 419' },
                    { name: 'MUTTON KADHAI', price: '269 / 439' },
                    { name: 'MUTTON NEHARI', price: '289 / 459' },
                    { name: 'MUTTON QORMA', price: '269 / 439' },
                    { name: 'MUTTON STEW', price: '289 / 459' },
                    { name: 'MUTTON JAHANGIRI', price: '269 / 439' },
                    { name: 'EGG CURRY', price: '179 / 239' },
                  ].map((curry, idx) => (
                    <div key={idx} className="flex items-center justify-between pt-1.5 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                          {curry.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                        <span className="font-mono text-gold-300 font-bold">₹{curry.price}</span>
                        <button
                          onClick={() => handleQuickAdd(curry.name, parseInt(curry.price.split('/')[0]), 'non-veg-main-course')}
                          className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: VEG MAIN COURSE & ROLLS */}
              <div className="space-y-6">
                
                {/* VEG MAIN COURSE */}
                <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        VEG MAIN COURSE
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gold-400 font-mono">Half / Full</span>
                  </div>

                  <div className="space-y-1.5 text-xs divide-y divide-wine-800/40">
                    {[
                      { name: 'DAL FRY', price: '139 / 229' },
                      { name: 'DAL TADKA', price: '139 / 229' },
                      { name: 'DAL MAKHANI', price: '149 / 239' },
                      { name: 'BUTTER PANEER MASALA', price: '149 / 259' },
                      { name: 'RARA PANEER', price: '159 / 269' },
                      { name: 'KADHAI PANEER', price: '149 / 239' },
                      { name: 'SHAHI PANEER', price: '149 / 239' },
                      { name: 'MATAR PANEER', price: '149 / 239' },
                      { name: 'MALAI KOFTA', price: '249' },
                      { name: 'MIX VEGETABLE', price: '149 / 219' },
                      { name: 'HARA DHANIYA ALOO MASALA', price: '149 / 219' },
                      { name: 'PANEER BHURJI', price: '249' },
                    ].map((veg, idx) => (
                      <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                        <div className="flex items-center gap-1.5 min-w-0 flex-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                            {veg.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                          <span className="font-mono text-gold-300 font-bold">₹{veg.price}</span>
                          <button
                            onClick={() => handleQuickAdd(veg.name, parseInt(veg.price.split('/')[0]), 'veg-main-course')}
                            className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROLLS */}
                <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        KATHI ROLLS
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                  </div>

                  <div className="space-y-1.5 text-xs divide-y divide-wine-800/40">
                    {[
                      { name: 'CHICKEN SEEKH ROLL', price: 199, nonVeg: true },
                      { name: 'CHICKEN TIKKA ROLL', price: 199, nonVeg: true },
                      { name: 'CHICKEN MALAI TIKKA ROLL', price: 199, nonVeg: true },
                      { name: 'MUTTON SEEKH ROLL', price: 239, nonVeg: true },
                      { name: 'PANEER TIKKA ROLL', price: 199, veg: true },
                      { name: 'SOYA TIKKA ROLL', price: 199, veg: true },
                      { name: 'MALAI CHAP ROLL', price: 199, veg: true },
                    ].map((roll, idx) => (
                      <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                        <div className="flex items-center gap-1.5 min-w-0 flex-1">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${roll.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                          <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                            {roll.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                          <span className="font-mono text-gold-300 font-bold">₹{roll.price}</span>
                          <button
                            onClick={() => handleQuickAdd(roll.name, roll.price, 'rolls')}
                            className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 4: DESSERTS, MOJITOS, BEVERAGES, BURGERS, EXTRAS & FOOTER
            ========================================================= */}
        {currentPage === 4 && (
          <div className="p-5 sm:p-8 space-y-8 bg-[#1f040c]">
            {/* Header */}
            <div className="text-center border-b-2 border-gold-500/40 pb-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-gold-300 tracking-wider">
                DESSERTS, MOJITOS &amp; BURGERS
              </h2>
              <p className="text-[11px] uppercase tracking-[0.25em] text-cream-300">
                ROYAL REFRESHMENTS &amp; ARTISANAL FEASTS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* LEFT COLUMN: DESSERTS, MOJITO & BEVERAGES */}
              <div className="space-y-6">
                
                {/* DESSERT */}
                <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        DESSERT
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                  </div>

                  <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                    {[
                      { name: 'SHAHI TUKDA', price: 120 },
                      { name: 'ZAFRANI PHIRNI', price: 80 },
                      { name: 'GULAB JAMUN', price: 60 },
                      { name: 'KHEER', price: 80 },
                    ].map((des, idx) => (
                      <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors">
                          {des.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gold-300 font-bold">₹{des.price}</span>
                          <button
                            onClick={() => handleQuickAdd(des.name, des.price, 'desserts')}
                            className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MOJITO */}
                <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <GlassWater className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        MOJITO
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                  </div>

                  <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                    {[
                      { name: 'BLUE BERRY', price: 119 },
                      { name: 'LEMON & MINT', price: 119 },
                      { name: 'GREEN APPLE', price: 119 },
                      { name: 'VARJIN MOJITO', price: 119 },
                      { name: 'LITCHI', price: 119 },
                    ].map((moj, idx) => (
                      <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors">
                          {moj.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gold-300 font-bold">₹{moj.price}</span>
                          <button
                            onClick={() => handleQuickAdd(`${moj.name} Mojito`, moj.price, 'beverages-mojito')}
                            className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BEVERAGES */}
                <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <GlassWater className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        BEVERAGES
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                  </div>

                  <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                    {[
                      { name: 'TEA', price: '25' },
                      { name: 'HOT COFFEE', price: '60' },
                      { name: 'COLD COFFEE', price: '80' },
                      { name: 'COLD DRINK', price: 'MRP' },
                      { name: 'FRESH LIME SODA', price: '50' },
                      { name: 'MASALA SHIKANJI', price: '60' },
                    ].map((bev, idx) => (
                      <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors">
                          {bev.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gold-300 font-bold">
                            {bev.price === 'MRP' ? 'MRP' : `₹${bev.price}`}
                          </span>
                          <button
                            onClick={() => handleQuickAdd(bev.name, bev.price === 'MRP' ? 40 : parseInt(bev.price), 'beverages-mojito')}
                            className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: BURGER & PAV, EXTRAS & ORDER HOTLINE */}
              <div className="space-y-6">
                
                {/* BURGER & PAV */}
                <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        BURGER &amp; PAV
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                  </div>

                  <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                    {[
                      { name: 'VEG CHEESE BURGER', price: 119, veg: true },
                      { name: 'PANEER CHEESE BURGER', price: 140, veg: true },
                      { name: 'CHICKEN GALOUTI CHEESE BURGER', price: 145, nonVeg: true },
                      { name: 'CHICKEN SEEKH CHEESE BURGER', price: 155, nonVeg: true },
                      { name: 'MUTTON SEEKH CHEESE BURGER', price: 199, nonVeg: true },
                      { name: 'MUTTON GALOUTI CHEESE BURGER', price: 199, nonVeg: true },
                      { name: 'FISH TIKKA CHEESE BURGER', price: 169, nonVeg: true },
                      { name: 'VEG BUN PAV', price: 129, veg: true },
                      { name: 'CHICKEN BUN PAV', price: 169, nonVeg: true },
                      { name: 'MUTTON BUN PAV', price: 219, nonVeg: true },
                      { name: 'CHICKEN KEEMA PAV', price: 149, nonVeg: true },
                    ].map((bur, idx) => (
                      <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                        <div className="flex items-center gap-1.5 min-w-0 flex-1">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${bur.veg ? 'bg-emerald-400' : 'bg-red-400'}`} />
                          <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                            {bur.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                          <span className="font-mono text-gold-300 font-bold">₹{bur.price}</span>
                          <button
                            onClick={() => handleQuickAdd(bur.name, bur.price, 'burger-pav')}
                            className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EXTRA */}
                <div className="border border-gold-500/40 rounded-2xl p-4 bg-wine-950/70 relative">
                  <div className="flex items-center justify-between border-b border-gold-500/40 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold-400" />
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        EXTRA
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gold-400 font-mono">Price</span>
                  </div>

                  <div className="space-y-2 text-xs divide-y divide-wine-800/40">
                    {[
                      { name: 'BOONDI RAITA', price: 20 },
                      { name: 'MIX VEG RAITA', price: 30 },
                      { name: 'EXTRA SALAD', price: 30 },
                      { name: 'EXTRA GRAVY', price: 50 },
                      { name: 'PLAIN RICE', price: 129 },
                      { name: 'JEERA RICE', price: 179 },
                    ].map((ext, idx) => (
                      <div key={idx} className="flex items-center justify-between pt-1 group hover:bg-wine-900/50 px-1 rounded transition-colors">
                        <span className="font-semibold text-cream-100 group-hover:text-gold-300 transition-colors">
                          {ext.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gold-300 font-bold">₹{ext.price}</span>
                          <button
                            onClick={() => handleQuickAdd(ext.name, ext.price, 'extras')}
                            className="p-1 rounded bg-wine-800 hover:bg-gold-500 hover:text-wine-950 text-gold-300 text-[10px] font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ORDER HOTLINE BANNER */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-wine-900 to-wine-950 border-2 border-emerald-500/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold">
                        Order Now Hotline / WhatsApp
                      </p>
                      <a 
                        href="tel:+918920793479" 
                        className="font-serif text-lg font-black text-cream-100 hover:text-gold-300 transition-colors"
                      >
                        +91 8920793479
                      </a>
                    </div>
                  </div>
                  
                  <a
                    href="https://wa.me/918920793439?text=Hello%20Zouk%20Biryani,%20I%20would%20like%20to%20place%20an%20order%20from%20the%20Official%20Menu%20Card."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-wine-950 font-bold text-xs transition-colors shadow-lg"
                  >
                    WhatsApp Order
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
            Page {currentPage} of 4 • Official Menu
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
