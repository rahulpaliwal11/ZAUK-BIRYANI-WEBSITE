import React from 'react';
import { SAMPLE_REVIEWS } from '../../data/reviewsData';
import { MandalaPattern } from '../ui/MandalaPattern';
import { Star, Quote, CheckCircle2, Sparkles, MessageSquareHeart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-wine-900/90 relative overflow-hidden">
      {/* Background Lighting & Mandala */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-wine-600/15 rounded-full blur-3xl pointer-events-none" />
      <MandalaPattern size={500} opacity={0.04} spin={false} className="top-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-850 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <MessageSquareHeart className="w-3.5 h-3.5 text-gold-400" />
            <span>Guest Impressions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            Loved By Biryani Lovers
          </h2>
          <p className="text-sm text-cream-200/90 font-light">
            Read what our esteemed patrons say about our aroma, melt-in-mouth cuts, and royal dining experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative p-6 rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/60 shadow-card-dark hover:shadow-gold-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30 group-hover:text-gold-400 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs text-cream-200 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Recommended Dish Info */}
              <div className="mt-6 pt-4 border-t border-wine-800">
                <div className="flex items-center gap-3">
                  {rev.avatarUrl && (
                    <img
                      src={rev.avatarUrl}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-gold-500/40 shadow-sm"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-serif text-xs font-bold text-cream-100">
                        {rev.author}
                      </h4>
                      {rev.verifiedOrder && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </div>
                    <span className="text-[10px] text-gold-300 font-semibold block truncate max-w-[170px]">
                      Favorite: {rev.dishRecommended}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-cream-400 inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Sample guest impressions showcasing our high quality standards &amp; culinary passion</span>
          </p>
        </div>
      </div>
    </section>
  );
};
