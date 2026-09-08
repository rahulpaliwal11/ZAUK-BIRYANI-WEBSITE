import { RestaurantInfo } from '../types';

/**
 * =======================================================================
 * CENTRAL RESTAURANT CONFIGURATION & PLACEHOLDERS
 * =======================================================================
 * Update this file with your actual restaurant information, phone numbers,
 * addresses, and social links when ready. All UI components inherit from here.
 */

export const RESTAURANT_INFO: RestaurantInfo = {
  // Brand details
  name: "Zouk Biryani & Main Course",
  tagline: "The Royal Dum Heritage & Authentic Mughlai Delicacies",
  description: "Crafted in handcrafted earthen handis over slow burning charcoal with 32 secret royal spices, aged Daawat basmati, and pure Kashmiri saffron. Serving authentic Biryani & Royal Main Course in Greater Noida.",
  
  story: "Born out of a deep reverence for centuries-old Awadhi and Nizami culinary traditions, Zouk Biryani & Main Course revives the authentic Dum Pukht style of slow cooking. Every earthen pot is sealed with whole wheat dough, trapping the aromatic steam of royal spices, succulent marinated meats, and fragrant saffron-infused rice. We believe biryani is not just a dish—it is an emotion, a feast of regal memories.",

  // Contact Details
  phone: "+91 8920793479",
  whatsapp: "+91 8920793439",
  email: "zoukbiryanimaincourse@gmail.com",

  // Physical Location
  address: {
    line1: "GF-06, Tower C, Omaxe NRI City Centre",
    line2: "NRI City, Near Pari Chowk",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201310",
  },

  // Hours
  openingHours: {
    weekdays: "12:00 PM – 12:00 AM (Open All 7 Days)",
    weekends: "12:00 PM – 12:00 AM",
    dineIn: "12:00 PM – 11:30 PM",
    delivery: "12:00 PM – 12:00 AM (Midnight)",
  },

  // Stats for Social Proof
  stats: {
    happyGuests: "50,000+",
    dumPotsServed: "120,000+",
    secretSpices: "32 Royal Spices",
    yearsOfHeritage: "25+ Yrs Heritage",
  },

  // Social Channels
  socials: {
    instagram: "https://instagram.com/zoukbiryanimaincourse",
    facebook: "https://facebook.com/zoukbiryanimaincourse",
    youtube: "https://youtube.com/@zoukbiryanimaincourse",
  },

  // Online Food Aggregators & Maps
  links: {
    googleMaps: "https://maps.app.goo.gl/vbHJwHDifavKc8Uo7?g_st=iw",
    mapEmbedUrl: "https://maps.google.com/maps?q=28.4630847,77.5104355&hl=en&z=16&output=embed",
    zomato: "https://www.zomato.com/ncr/restaurants/zouk-biryani-main-course",
    swiggy: "https://www.swiggy.com/restaurants/zouk-biryani-and-main-course",
  },

  // Craft Highlights (Pillars)
  features: [
    {
      title: "100% Authentic Dum Pukht",
      subtitle: "Slow cooked in sealed clay pots on live charcoal",
      icon: "Flame",
    },
    {
      title: "32 Secret Royal Spices",
      subtitle: "Hand-pounded heritage masalas from old Lucknow & Hyderabad",
      icon: "Sparkles",
    },
    {
      title: "Finest Prime Meat Cuts",
      subtitle: "24-hour yogurt & saffron marinade for melt-in-mouth texture",
      icon: "Award",
    },
    {
      title: "Royal Tamper-Proof Handi",
      subtitle: "Delivered piping hot in sustainable clay handis",
      icon: "PackageCheck",
    },
    {
      title: "Pure Shahi Ghee & Saffron",
      subtitle: "Original Kashmiri Mongra Saffron & golden A2 Ghee",
      icon: "Crown",
    },
    {
      title: "45-Min Express Delivery",
      subtitle: "Thermal insulated packaging ensures fresh aroma at doorstep",
      icon: "Clock",
    },
  ],
};
