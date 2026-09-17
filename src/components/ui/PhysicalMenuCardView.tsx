import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Utensils
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
            { page: 2, label: 'Page 2: Starters & Biryani (0)' },
            { page: 3, label: 'Page 3: Main Course & Thalis (0)' },
            { page: 4, label: 'Page 4: Desserts & Beverages (0)' },
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
          PHYSICAL MENU CARD PAGES (0 ITEMS STATE)
          ========================================================================= */}
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/50 bg-[#16050b] relative text-cream-100 font-sans">
        
        {/* PAGE 1: COVER PAGE */}
        {currentPage === 1 && (
          <div className="p-8 sm:p-14 min-h-[500px] flex flex-col items-center justify-between text-center relative overflow-hidden bg-gradient-to-b from-[#3a0817] via-[#24030d] to-[#16050b]">
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
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-dashed border-gold-500/80 flex items-center justify-center relative bg-gradient-to-b from-wine-900/60 to-wine-950/80 shadow-2xl shadow-gold-500/20">
                <div className="absolute inset-2 rounded-full border border-gold-400/40" />
                <div className="text-center">
                  <span className="font-serif text-5xl sm:text-6xl font-black text-gold-300 drop-shadow-lg block">
                    Z
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400 mx-auto mt-1" />
                </div>
              </div>
            </div>

            {/* Bottom Menu Title */}
            <div className="pb-8 relative z-10 space-y-3 max-w-lg">
              <div className="border-y-2 border-gold-500/70 py-2">
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-cream-100">
                  FOOD &amp; DESSERTS
                </h2>
              </div>

              <div className="inline-block">
                <span className="text-base sm:text-xl font-bold uppercase tracking-widest text-gold-300 border-b-2 border-gold-400 pb-1">
                  OFFICIAL MENU CARD (0 ITEMS LISTED)
                </span>
              </div>

              <p className="text-xs text-cream-300/80 pt-2">
                All food items and dishes have been cleared. Currently 0 items are listed on the menu.
              </p>
            </div>
          </div>
        )}

        {/* PAGES 2, 3, 4: 0 ITEMS CLEARED STATE */}
        {currentPage > 1 && (
          <div className="p-8 sm:p-14 min-h-[500px] flex flex-col items-center justify-center text-center space-y-6 bg-[#1f040c]">
            <div className="w-16 h-16 rounded-2xl bg-wine-900 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto shadow-gold-sm">
              <Utensils className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Page {currentPage} of 4
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-cream-100">
                0 Items in Menu
              </h3>
              <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed">
                All items and photographs have been removed as requested. No dishes are currently active on this page.
              </p>
            </div>

            {/* Hotline banner */}
            <div className="p-4 rounded-2xl bg-wine-950 border border-gold-500/40 max-w-md w-full flex items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gold-400 font-bold">Direct Inquiries</p>
                <p className="font-serif text-sm font-bold text-cream-100">+91 8920793479</p>
              </div>
              <a
                href="https://wa.me/918920793439"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-gold-gradient text-wine-950 font-bold text-xs"
              >
                WhatsApp Us
              </a>
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
            Page {currentPage} of 4 • 0 Items Listed
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
