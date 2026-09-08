import React, { useEffect } from 'react';
import { GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-3 rounded-full bg-dark-800/80 border border-gold-500/30 text-cream-200 hover:text-cream-100 hover:bg-dark-700 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-dark-800/80 border border-gold-500/30 text-cream-200 hover:text-amber-400 hover:bg-dark-700 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-dark-800/80 border border-gold-500/30 text-cream-200 hover:text-amber-400 hover:bg-dark-700 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Box */}
      <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl shadow-gold-900/30 bg-dark-900">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl">
          <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-gold-400 font-semibold px-3 py-1 rounded-full bg-dark-850 border border-gold-500/20 mb-2">
            <Sparkles className="w-3 h-3" /> {item.category}
          </span>
          <h3 className="font-serif text-xl font-bold text-cream-100">
            {item.title}
          </h3>
          <p className="text-xs text-cream-300 mt-1">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
