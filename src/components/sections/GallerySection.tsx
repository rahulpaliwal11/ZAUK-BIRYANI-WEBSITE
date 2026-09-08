import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/galleryData';
import { GalleryItem } from '../../types';
import { LightboxModal } from '../ui/LightboxModal';
import { MandalaPattern } from '../ui/MandalaPattern';
import { Camera, ZoomIn, ChevronDown, Sparkles, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const categories = [
    { id: 'all', label: `All Photos (${GALLERY_ITEMS.length})` },
    { id: 'dishes', label: 'Royal Handis & Dishes' },
    { id: 'ambience', label: 'Ambience & Dining' },
    { id: 'storefront', label: 'Storefront & Facade' },
    { id: 'craft', label: 'Dum Craft & Kitchen' },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const visibleGallery = filteredGallery.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGallery.length;

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setVisibleCount(16); // Reset pagination on filter change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, filteredGallery.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredGallery.length);
  };

  return (
    <section id="gallery" className="py-24 bg-wine-950 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-radial-wine opacity-30 pointer-events-none" />
      <MandalaPattern size={550} opacity={0.04} spin={true} className="bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-900 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span>Royal Gallery ({GALLERY_ITEMS.length} Photos)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            A Feast For The Senses
          </h2>
          <p className="text-sm text-cream-200/90 font-light">
            Explore authentic glimpses into our charcoal kitchens, clay handi preparations, and dining atmosphere at Omaxe NRI City Centre, Greater Noida.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gold-gradient text-wine-950 shadow-gold-sm scale-102'
                    : 'bg-wine-900 text-cream-300 hover:text-cream-100 hover:bg-wine-850 border border-wine-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Counter info */}
          <div className="pt-2 text-xs text-cream-400 flex items-center justify-center gap-2">
            <ImageIcon className="w-3.5 h-3.5 text-gold-400" />
            <span>Showing {visibleGallery.length} of {filteredGallery.length} Photographs</span>
          </div>
        </div>

        {/* Gallery Image Grid */}
        {visibleGallery.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {visibleGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="group relative rounded-3xl overflow-hidden aspect-square bg-wine-900 border border-wine-700/80 hover:border-gold-500/70 shadow-card-dark cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold-md"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-gold-400 font-bold">
                          {item.category}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-cream-100 line-clamp-1">
                          {item.title}
                        </h4>
                      </div>
                      <div className="p-2 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-gold-sm">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Pagination Controls */}
            {hasMore && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3.5 rounded-2xl bg-gold-gradient text-wine-950 font-black text-xs uppercase tracking-wider shadow-gold-md hover:brightness-110 flex items-center gap-2 transition-all active:scale-95"
                >
                  <span>Load More Photos (+16)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <button
                  onClick={handleShowAll}
                  className="px-6 py-3.5 rounded-2xl bg-wine-900 hover:bg-wine-850 border border-gold-500/35 text-gold-300 hover:text-gold-200 text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Show All ({filteredGallery.length})</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 px-6 bg-wine-900/40 rounded-3xl border border-wine-800/60 max-w-xl mx-auto backdrop-blur-sm">
            <Camera className="w-10 h-10 text-gold-400/60 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-cream-100">Gallery Updates Coming Soon</h3>
            <p className="text-xs text-cream-300/70 mt-1">Our authentic culinary and kitchen photographs are currently being curated.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeImage}
        items={filteredGallery}
        onClose={() => setActiveImage(null)}
        onSelect={(img) => setActiveImage(img)}
      />
    </section>
  );
};
