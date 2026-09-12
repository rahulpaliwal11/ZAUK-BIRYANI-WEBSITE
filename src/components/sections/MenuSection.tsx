import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData';
import { MenuCategory } from '../../types';
import { MenuItemCard } from '../ui/MenuItemCard';
import { MandalaPattern } from '../ui/MandalaPattern';
import { PhysicalMenuCardView } from '../ui/PhysicalMenuCardView';
import { useCart } from '../../context/CartContext';
import { 
  Search, 
  Utensils, 
  Sparkles, 
  Flame, 
  Leaf, 
  Crown, 
  Drumstick, 
  GlassWater, 
  HeartHandshake, 
  PlusCircle, 
  Filter,
  Layers,
  LayoutGrid,
  FileText,
  BookOpen,
  Plus
} from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [viewMode, setViewMode] = useState<'physical-card' | 'cards' | 'menu-book'>('physical-card');
  const { addItem } = useCart();

  // Category Icon Map
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'all': return <Crown className="w-4 h-4" />;
      case 'dum-biryani': return <Flame className="w-4 h-4" />;
      case 'appetizers': return <Sparkles className="w-4 h-4" />;
      case 'chinese': return <Utensils className="w-4 h-4" />;
      case 'tandoor': return <Drumstick className="w-4 h-4" />;
      case 'thalis': return <Crown className="w-4 h-4" />;
      case 'non-veg-main-course': return <Utensils className="w-4 h-4" />;
      case 'veg-main-course': return <Leaf className="w-4 h-4" />;
      case 'breads': return <Layers className="w-4 h-4" />;
      case 'rolls': return <Flame className="w-4 h-4" />;
      case 'burger-pav': return <Utensils className="w-4 h-4" />;
      case 'desserts': return <HeartHandshake className="w-4 h-4" />;
      case 'beverages-mojito': return <GlassWater className="w-4 h-4" />;
      case 'extras': return <PlusCircle className="w-4 h-4" />;
      default: return <Utensils className="w-4 h-4" />;
    }
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesDietary =
        dietaryFilter === 'all' || item.dietary === dietaryFilter;

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  // Group items by category for structured display
  const activeCategories = useMemo(() => {
    if (selectedCategory !== 'all') {
      return MENU_CATEGORIES.filter((c) => c.id === selectedCategory);
    }
    return MENU_CATEGORIES.filter((c) => c.id !== 'all');
  }, [selectedCategory]);

  return (
    <section id="menu" className="py-24 bg-wine-950 relative overflow-hidden">
      {/* Background Accent Gradients & Mandala */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-wine-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <MandalaPattern size={600} opacity={0.04} spin={true} className="bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wine-900 border border-gold-500/35 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Official Restaurant Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-cream-100 tracking-tight">
            Zouk Biryani &amp; Main Course
          </h2>
          <p className="text-sm text-cream-200/90 font-light">
            Explore our official 4-page restaurant menu card, or browse through our interactive digital catalog freshly prepared with 32 Shahi spices.
          </p>
        </div>

        {/* View Mode Switcher Header Bar */}
        <div className="bg-wine-card border border-wine-700/80 rounded-3xl p-5 mb-8 shadow-card-dark backdrop-blur-xl space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-cream-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search biryanis, kebabs, rotis, desserts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-10 pr-4 py-2 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-cream-400 hover:text-cream-100"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode & Dietary Toggle */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              
              {/* View Switcher: Physical Menu Card vs Photo Grid vs Digital List */}
              <div className="flex items-center gap-1 p-1 bg-wine-900 rounded-2xl border border-wine-700">
                <button
                  onClick={() => setViewMode('physical-card')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    viewMode === 'physical-card'
                      ? 'bg-gold-gradient text-wine-950 shadow-sm'
                      : 'text-cream-300 hover:text-cream-100'
                  }`}
                  title="Official 4-Page Physical Menu Card"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Physical Menu Card (4 Pages)</span>
                </button>
                <button
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    viewMode === 'cards'
                      ? 'bg-gold-gradient text-wine-950 shadow-sm'
                      : 'text-cream-300 hover:text-cream-100'
                  }`}
                  title="Photo Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Photo Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('menu-book')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    viewMode === 'menu-book'
                      ? 'bg-gold-gradient text-wine-950 shadow-sm'
                      : 'text-cream-300 hover:text-cream-100'
                  }`}
                  title="Digital Menu Book View"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Digital List</span>
                </button>
              </div>

              {/* Dietary Toggle (All / Pure Veg / Non-Veg) - Applicable to Grid & List */}
              {viewMode !== 'physical-card' && (
                <div className="flex items-center gap-1 p-1 bg-wine-900 rounded-2xl border border-wine-700">
                  <button
                    onClick={() => setDietaryFilter('all')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      dietaryFilter === 'all'
                        ? 'bg-wine-800 text-gold-300 border border-gold-500/50 shadow-sm'
                        : 'text-cream-300 hover:text-cream-100'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setDietaryFilter('veg')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      dietaryFilter === 'veg'
                        ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-500/50 shadow-sm'
                        : 'text-cream-300 hover:text-emerald-300'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/80" />
                    Veg
                  </button>
                  <button
                    onClick={() => setDietaryFilter('non-veg')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      dietaryFilter === 'non-veg'
                        ? 'bg-red-950/90 text-red-200 border border-red-500/50 shadow-sm'
                        : 'text-cream-300 hover:text-red-300'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500/80" />
                    Non-Veg
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Category Tabs Strip (Visible in Photo Grid & Digital List) */}
          {viewMode !== 'physical-card' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-wine-800">
              {MENU_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id;
                const count =
                  category.id === 'all'
                    ? MENU_ITEMS.length
                    : MENU_ITEMS.filter((i) => i.category === category.id).length;

                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as MenuCategory)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? 'bg-wine-800 text-gold-300 border border-gold-500/70 shadow-gold-sm scale-102'
                        : 'bg-wine-900/80 text-cream-300 hover:text-cream-100 hover:bg-wine-850 border border-wine-700/60'
                    }`}
                  >
                    <span className={isActive ? 'text-gold-400' : 'text-cream-400'}>
                      {getCategoryIcon(category.id)}
                    </span>
                    <span>{category.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-gold-500/20 text-gold-300 font-extrabold'
                          : 'bg-wine-950 text-cream-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ==========================================
            ZERO ITEMS STATE / ACTIVE VIEWS
            ========================================== */}
        {MENU_ITEMS.length === 0 ? (
          <div className="text-center py-20 px-6 bg-wine-card rounded-3xl border border-gold-500/30 max-w-2xl mx-auto shadow-card-dark">
            <div className="w-16 h-16 rounded-2xl bg-wine-800 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 mb-2">
              Menu Items Currently 0
            </h3>
            <p className="text-sm text-cream-300/80 max-w-md mx-auto leading-relaxed">
              No food items are currently listed on the menu. All items have been cleared.
            </p>
          </div>
        ) : viewMode === 'physical-card' ? (
          <PhysicalMenuCardView />
        ) : filteredItems.length === 0 ? (
          /* Empty Search Filter State */
          <div className="text-center py-16 px-4 bg-wine-card rounded-3xl border border-wine-700">
            <Filter className="w-12 h-12 text-cream-400/40 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-cream-100">
              No Dishes Found
            </h3>
            <p className="text-xs text-cream-400 mt-1 max-w-sm mx-auto">
              We could not find any items matching your selected filters or search query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-gold-gradient text-wine-950 font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'cards' ? (
          /* ==========================================
             VIEW 2: PHOTO CARDS GRID (CATEGORIZED)
             ========================================== */
          <div className="space-y-12">
            {activeCategories.map((cat) => {
              const categoryItems = filteredItems.filter((i) => i.category === cat.id);
              if (categoryItems.length === 0) return null;

              return (
                <div key={cat.id} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-wine-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-wine-900 border border-gold-500/30 text-gold-400">
                        {getCategoryIcon(cat.id)}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-black text-cream-100">
                          {cat.label}
                        </h3>
                        <p className="text-[11px] text-gold-300/80">
                          {categoryItems.length} delicacies available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Items in this category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryItems.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ==========================================
             VIEW 3: DIGITAL MENU LIST
             ========================================== */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeCategories.map((cat) => {
              const categoryItems = filteredItems.filter((i) => i.category === cat.id);
              if (categoryItems.length === 0) return null;

              return (
                <div
                  key={cat.id}
                  className="rounded-3xl bg-wine-card border border-gold-500/35 p-6 shadow-card-dark relative overflow-hidden"
                >
                  {/* Top Gold Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

                  {/* Category Title */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-wine-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-wine-850 text-gold-400 border border-gold-500/25">
                        {getCategoryIcon(cat.id)}
                      </div>
                      <h3 className="font-serif text-lg font-black text-gold-300 uppercase tracking-wider">
                        {cat.label}
                      </h3>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-wine-900 text-cream-300 border border-wine-700">
                      {categoryItems.length} items
                    </span>
                  </div>

                  {/* List of items with dotted leaders & price */}
                  <div className="space-y-4 divide-y divide-wine-800/50">
                    {categoryItems.map((item) => (
                      <div key={item.id} className="pt-3 first:pt-0 group">
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                item.dietary === 'veg'
                                  ? 'bg-emerald-400'
                                  : item.dietary === 'egg'
                                  ? 'bg-amber-400'
                                  : 'bg-red-400'
                              }`}
                            />
                            <h4 className="text-xs sm:text-sm font-bold text-cream-100 group-hover:text-gold-300 transition-colors truncate">
                              {item.name}
                            </h4>
                          </div>

                          {/* Dotted Leader */}
                          <div className="flex-1 border-b border-dotted border-wine-700/80 mx-2 hidden sm:block" />

                          {/* Price & Add button */}
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="font-serif text-sm font-bold text-gold-400">
                              ₹{item.price}
                            </span>
                            <button
                              onClick={() => addItem(item)}
                              className="px-2.5 py-1 rounded-lg bg-wine-850 hover:bg-gold-500 hover:text-wine-950 border border-gold-500/35 text-[10px] font-bold text-gold-300 transition-all flex items-center gap-1 active:scale-95"
                            >
                              <Plus className="w-3 h-3" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>

                        {/* Serves / Portions & Short Description */}
                        <div className="flex items-center justify-between gap-2 mt-1 text-[11px] text-cream-300/80">
                          <p className="line-clamp-1 flex-1">{item.description}</p>
                          <span className="text-[10px] text-gold-300/90 whitespace-nowrap font-medium">
                            {item.serves}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
