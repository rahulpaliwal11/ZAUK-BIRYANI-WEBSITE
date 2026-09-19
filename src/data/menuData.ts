import { MenuItem } from '../types';

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items', icon: 'Crown' },
  { id: 'dum-biryani', label: 'Dum Biryani', icon: 'Flame' },
  { id: 'appetizers', label: 'Appetizers & Kebabs', icon: 'Sparkles' },
  { id: 'chinese', label: 'Chinese & Starters', icon: 'Utensils' },
  { id: 'tandoor', label: 'Tandoor Specials', icon: 'Drumstick' },
  { id: 'thalis', label: 'Royal Thalis', icon: 'Crown' },
  { id: 'non-veg-main-course', label: 'Non-Veg Main Course', icon: 'Utensils' },
  { id: 'veg-main-course', label: 'Veg Main Course', icon: 'Leaf' },
  { id: 'breads', label: 'Breads & Parathas', icon: 'Layers' },
  { id: 'rolls', label: 'Kathi Rolls', icon: 'Flame' },
  { id: 'burger-pav', label: 'Burger & Pav', icon: 'Utensils' },
  { id: 'desserts', label: 'Shahi Desserts', icon: 'HeartHandshake' },
  { id: 'beverages-mojito', label: 'Mojitos & Beverages', icon: 'GlassWater' },
  { id: 'extras', label: 'Accompaniments', icon: 'PlusCircle' },
] as const;

/**
 * MENU ITEMS DATABASE
 * Cleared and ready for your new menu items, pricing, and descriptions.
 */
export const MENU_ITEMS: MenuItem[] = [];
