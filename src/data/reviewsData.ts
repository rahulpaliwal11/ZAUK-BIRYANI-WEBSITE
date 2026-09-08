import { Review } from '../types';

/**
 * SAMPLE / PLACEHOLDER REVIEWS
 * These represent sample guest experiences until verified customer reviews are linked.
 */
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aditya Vardhan Rao',
    rating: 5,
    date: '2 days ago',
    dishRecommended: 'Royal Zafrani Mutton Dum Biryani',
    comment: 'Without doubt the finest dum biryani I have tasted outside Hyderabad! The moment the dough seal on the clay handi broke, the royal saffron and cardamom aroma filled the entire room. The mutton was so tender it fell off the bone effortlessly.',
    verifiedOrder: true,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'rev-2',
    author: 'Meera Sengupta',
    rating: 5,
    date: '1 week ago',
    dishRecommended: 'Grand Shahi Dastarkhwan Feast',
    comment: 'Ordered for our family anniversary dinner. The packaging is pure luxury—earthen handis wrapped in royal gold fabric seals. The Galouti Kebabs melted like butter on the tongue and the Shahi Phirni was the sweetest ending. 10/10 recommendation!',
    verifiedOrder: true,
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'rev-3',
    author: 'Karan Malhotra',
    rating: 5,
    date: '2 weeks ago',
    dishRecommended: 'Shahi Dum Pukht Chicken Biryani',
    comment: 'The grain separation on the basmati rice is sheer art. You can tell they use genuine aged rice and pure saffron instead of artificial essences. The Burani garlic raita is so addictive. Truly a luxury culinary experience.',
    verifiedOrder: true,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'rev-4',
    author: 'Ananya Deshmukh',
    rating: 5,
    date: '3 weeks ago',
    dishRecommended: 'Noorani Paneer Dum Biryani',
    comment: 'As a vegetarian, finding an authentic dum biryani with rich depth of flavor is rare. Zauk Biryani nailed it! The paneer was incredibly soft, infused with smoky charcoal notes and fragrant spices. We will be ordering every weekend.',
    verifiedOrder: true,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
];
