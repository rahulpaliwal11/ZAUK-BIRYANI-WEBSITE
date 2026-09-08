export type MenuCategory = 
  | 'all'
  | 'dum-biryani'
  | 'non-veg-main-course'
  | 'veg-main-course'
  | 'tandoor'
  | 'appetizers'
  | 'thalis'
  | 'breads'
  | 'rolls'
  | 'chinese'
  | 'burger-pav'
  | 'desserts'
  | 'beverages-mojito'
  | 'extras';

export type DietaryType = 'veg' | 'non-veg' | 'egg';

export type SpiceLevel = 'mild' | 'medium' | 'spicy' | 'extra-spicy';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  halfPrice?: number;
  originalPrice?: number;
  category: MenuCategory;
  dietary: DietaryType;
  spiceLevel?: SpiceLevel;
  serves: string; // e.g. "Serves 1-2"
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  tags?: string[];
  preparationTime?: string; // e.g. "25-30 mins"
  portions?: { label: string; price: number }[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedPortion?: string;
  notes?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  code: string;
  discount: string;
  validity: string;
  badge: string;
  bgGradient?: string;
  terms?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  dishRecommended: string;
  comment: string;
  verifiedOrder: boolean;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'storefront' | 'dining' | 'ambience' | 'dishes' | 'craft' | 'ingredients' | string;
  imageUrl: string;
  description: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  story: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
  };
  openingHours: {
    weekdays: string;
    weekends: string;
    dineIn: string;
    delivery: string;
  };
  stats: {
    happyGuests: string;
    dumPotsServed: string;
    secretSpices: string;
    yearsOfHeritage: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  links: {
    googleMaps: string;
    mapEmbedUrl?: string;
    zomato: string;
    swiggy: string;
  };
  features: Array<{
    title: string;
    subtitle: string;
    icon: string;
  }>;
}
