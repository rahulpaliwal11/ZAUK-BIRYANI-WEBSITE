import { MenuItem } from '../types';

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items', icon: 'Crown' },
  { id: 'dum-biryani', label: 'Dum Biryani', icon: 'Flame' },
  { id: 'appetizers', label: 'Appetizers & Kebabs', icon: 'Sparkles' },
  { id: 'tandoor', label: 'Tandoor Specials', icon: 'Drumstick' },
  { id: 'thalis', label: 'Royal Thalis', icon: 'Crown' },
  { id: 'non-veg-main-course', label: 'Non-Veg Main Course', icon: 'Utensils' },
  { id: 'veg-main-course', label: 'Veg Main Course', icon: 'Leaf' },
  { id: 'chinese', label: 'Chinese & Starters', icon: 'Utensils' },
  { id: 'burger-pav', label: 'Burger & Pav', icon: 'Utensils' },
  { id: 'breads', label: 'Breads & Parathas', icon: 'Layers' },
  { id: 'rolls', label: 'Kathi Rolls', icon: 'Flame' },
  { id: 'desserts', label: 'Shahi Desserts', icon: 'HeartHandshake' },
  { id: 'beverages-mojito', label: 'Mojitos & Beverages', icon: 'GlassWater' },
  { id: 'extras', label: 'Accompaniments', icon: 'PlusCircle' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'paneer-fried-rice',
    name: 'Paneer Fried Rice',
    description: 'Soft paneer cubes tossed with fragrant fried basmati rice, fresh garden vegetables, and aromatic Indo-Chinese sauces.',
    price: 199,
    category: 'chinese',
    dietary: 'veg',
    spiceLevel: 'medium',
    serves: 'Serves 1-2',
    isBestseller: true,
    rating: 4.8,
    reviewCount: 142,
    imageUrl: '/images/dishes/paneer-fried-rice.jpg',
    tags: ['Pure Veg', 'Fresh Paneer', 'Wok Tossed', 'Indo-Chinese'],
    preparationTime: '15-20 mins',
  },
];
