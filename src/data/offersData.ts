import { SpecialOffer } from '../types';

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'off-1',
    title: 'THE ROYAL DASTARKHWAN FEAST',
    subtitle: 'Flat 20% Off on Grand Family Handis',
    description: 'Order any 2 Jumbo or Party Handis and enjoy 20% discount + 2 complimentary Shahi Zafrani Phirnis.',
    code: 'ZAUKROYAL',
    discount: '20% OFF',
    validity: 'Valid on Orders Above ₹999',
    badge: '👑 Royal Special',
    terms: 'Applicable on Direct & WhatsApp Orders only',
  },
  {
    id: 'off-2',
    title: 'FIRST REGAL INDULGENCE',
    subtitle: 'Flat ₹150 OFF on Your First Order',
    description: 'Welcome to the royal family. Enjoy ₹150 instant discount on your very first dum-cooked clay pot order.',
    code: 'FIRSTDUM',
    discount: '₹150 OFF',
    validity: 'For New Guests • Min Order ₹500',
    badge: '✨ Welcome Gift',
    terms: 'One time use per customer',
  },
  {
    id: 'off-3',
    title: 'MIDWEEK BIRYANI MAHOTSAV',
    subtitle: 'Free Galouti Kebab Platter',
    description: 'Order any 2 Biryanis between Tuesday to Thursday and get a signature 4-piece Awadhi Galouti Kebab platter on the house.',
    code: 'MIDWEEKFEAST',
    discount: 'FREE KEBABS',
    validity: 'Tuesday – Thursday Only',
    badge: '🔥 Chef\'s Treat',
    terms: 'Minimum cart value ₹750',
  },
];
