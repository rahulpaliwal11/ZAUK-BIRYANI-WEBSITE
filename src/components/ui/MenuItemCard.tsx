import React from 'react';
import { MenuItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Minus, Flame, Clock, Users, Sparkles } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.item.id === item.id);

  const getSpiceBadge = () => {
    if (!item.spiceLevel) return null;
    switch (item.spiceLevel) {
      case 'mild':
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-700/50">
            <Flame className="w-3 h-3 text-emerald-400" /> Mild Spice
          </span>
        );
      case 'medium':
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-wine-800 text-gold-300 border border-gold-500/30">
            <Flame className="w-3 h-3 text-gold-400" /> Medium
          </span>
        );
      case 'spicy':
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-950/70 text-amber-300 border border-amber-600/50">
            <Flame className="w-3 h-3 text-amber-400" /> Spicy
          </span>
        );
      case 'extra-spicy':
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-700/50">
            <Flame className="w-3 h-3 text-red-400 fill-red-400" /> Extra Fiery
          </span>
        );
    }
  };

  const [imgSrc, setImgSrc] = React.useState(item.imageUrl);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(item.imageUrl);
    setIsLoaded(false);
  }, [item.imageUrl]);

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-wine-card border border-wine-700/80 hover:border-gold-500/60 shadow-card-dark hover:shadow-gold-md transition-all duration-300 overflow-hidden hover:-translate-y-1.5">
      
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-wine-950">
        {!isLoaded && (
          <div className="absolute inset-0 bg-wine-900/80 animate-pulse flex items-center justify-center z-0">
            <span className="text-[11px] font-serif text-gold-400/60 tracking-wider">Zauk Feast</span>
          </div>
        )}
        <img
          src={imgSrc}
          alt={item.name}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            const fallback = item.dietary === 'veg' 
              ? '/images/dishes/vegetable-dum-biryani.jpg' 
              : item.dietary === 'egg' 
                ? '/images/dishes/egg-dum-biryani.jpg' 
                : '/images/dishes/chicken-dum-biryani.jpg';
            if (imgSrc !== fallback) {
              setImgSrc(fallback);
            }
          }}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-108 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Dark subtle wine gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-wine-900 via-transparent to-black/50 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {/* Dietary indicator */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-wine-950/85 backdrop-blur-md border border-wine-700">
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                item.dietary === 'veg' ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-red-500 shadow-sm shadow-red-500/50'
              }`}
            />
            <span className="text-[10px] font-bold uppercase tracking-wider text-cream-200">
              {item.dietary === 'veg' ? 'Pure Veg' : 'Non-Veg'}
            </span>
          </div>

          {/* Bestseller / Chef Special Badge */}
          {item.isChefSpecial ? (
            <span className="flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full bg-gold-gradient text-wine-950 shadow-gold-sm tracking-wide">
              <Sparkles className="w-3 h-3" /> Chef's Special
            </span>
          ) : item.isBestseller ? (
            <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-gold-gradient text-wine-950 shadow-gold-sm tracking-wide">
              ★ Bestseller
            </span>
          ) : null}
        </div>

        {/* Portion and Prep Time Bar */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-cream-200 font-medium pointer-events-none">
          <span className="flex items-center gap-1 bg-wine-950/80 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-wine-700/60 text-[11px]">
            <Users className="w-3 h-3 text-gold-400" /> {item.serves}
          </span>
          {item.preparationTime && (
            <span className="flex items-center gap-1 bg-wine-950/80 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-wine-700/60 text-[11px]">
              <Clock className="w-3 h-3 text-gold-400" /> {item.preparationTime}
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
        <div>
          {/* Rating and Spice */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-gold-400">
              <Star className="w-3.5 h-3.5 fill-gold-400" />
              <span className="text-xs font-bold text-cream-100">{item.rating}</span>
              <span className="text-[11px] text-cream-400">({item.reviewCount})</span>
            </div>
            {getSpiceBadge()}
          </div>

          {/* Dish Title */}
          <h3 className="font-serif text-lg font-bold text-cream-100 group-hover:text-gold-300 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mt-1.5 text-xs text-cream-300/80 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-wine-850 text-gold-300/90 border border-gold-500/20 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Price & Action Row */}
        <div className="pt-3 border-t border-wine-800 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-gold-400">
                ₹{item.price}
              </span>
              {item.originalPrice && (
                <span className="text-xs text-cream-400/60 line-through">
                  ₹{item.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-cream-400">Taxes included</span>
          </div>

          {/* Add to Cart / Quantity Toggle */}
          {cartItem ? (
            <div className="flex items-center gap-2 bg-wine-800 border border-gold-500/50 rounded-xl p-1 shadow-gold-sm">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="w-7 h-7 rounded-lg bg-wine-700 hover:bg-gold-500 hover:text-wine-950 flex items-center justify-center text-cream-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center text-sm font-bold text-gold-300 font-sans">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="w-7 h-7 rounded-lg bg-wine-700 hover:bg-gold-500 hover:text-wine-950 flex items-center justify-center text-cream-100 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem(item)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 font-black text-xs transition-all duration-200 shadow-gold-sm hover:shadow-gold-md active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Feast</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
