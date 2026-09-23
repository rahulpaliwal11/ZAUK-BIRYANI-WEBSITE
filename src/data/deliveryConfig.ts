/**
 * ZOUK BIRYANI & MAIN COURSE
 * CENTRAL AUTHORITATIVE DELIVERY CHARGES CONFIGURATION
 *
 * AUTHORITATIVE RESTAURANT DELIVERY RATES:
 * 1. 2–3 KM                 → ₹30
 * 2. Above 3 KM up to 5 KM  → ₹50
 * 3. Above 5 KM up to 7 KM  → ₹70
 * 4. Above 7 KM up to 10 KM → ₹90
 *
 * Beyond 10 KM: No automatic charge ("Delivery availability beyond 10 KM — Please contact us.")
 */

export interface DeliveryTier {
  id: string;
  distanceLabel: string;
  minDistanceKm: number;
  maxDistanceKm: number;
  charge: number; // Delivery fee in ₹
  estimatedTime: string; // e.g. "25–35 mins"
  description: string;
  isPopular?: boolean;
}

export interface GreaterNoidaLocation {
  name: string;
  sector: string;
  approxDistanceKm: number;
  areaType?: 'Residential' | 'Commercial' | 'Educational Hub' | 'Institutional';
}

export interface DeliveryConfig {
  restaurantName: string;
  restaurantLocation: {
    address: string;
    area: string;
    city: string;
    pincode: string;
    landmark: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  tiers: DeliveryTier[];
  defaultDeliveryFee: number;
  beyond10KmNotice: string;
  deliveryNotice: string;
  hotlinePhone: string;
  whatsappNumber: string;
  deliveryHours: string;
  packagingHighlights: string[];
}

export const DELIVERY_CONFIG: DeliveryConfig = {
  restaurantName: 'Zouk Biryani & Main Course',
  restaurantLocation: {
    address: 'GF-06, Tower C, Omaxe NRI City Centre',
    area: 'Near Pari Chowk / Omega 2',
    city: 'Greater Noida',
    pincode: '201310',
    landmark: 'Opposite Pari Chowk Metro',
    coordinates: {
      lat: 28.4744,
      lng: 77.5040,
    },
  },
  // EXACT RESTAURANT DELIVERY CHARGES
  tiers: [
    {
      id: 'tier-2-3km',
      distanceLabel: '2–3 KM',
      minDistanceKm: 2,
      maxDistanceKm: 3,
      charge: 30,
      estimatedTime: '25–35 mins',
      description: 'Local neighborhood, Pari Chowk & immediate sectors',
      isPopular: true,
    },
    {
      id: 'tier-3-5km',
      distanceLabel: '3–5 KM',
      minDistanceKm: 3,
      maxDistanceKm: 5,
      charge: 50,
      estimatedTime: '35–45 mins',
      description: 'Central Greater Noida residential sectors, societies & campuses',
    },
    {
      id: 'tier-5-7km',
      distanceLabel: '5–7 KM',
      minDistanceKm: 5,
      maxDistanceKm: 7,
      charge: 70,
      estimatedTime: '45–55 mins',
      description: 'Mid-distance residential sectors, Alpha/Beta/Gamma/Delta',
    },
    {
      id: 'tier-7-10km',
      distanceLabel: '7–10 KM',
      minDistanceKm: 7,
      maxDistanceKm: 10,
      charge: 90,
      estimatedTime: '55–65 mins',
      description: 'Outer sectors, Expressway zones & institutional areas',
    },
  ],
  defaultDeliveryFee: 30,
  beyond10KmNotice: 'Delivery availability beyond 10 KM — Please contact us.',
  deliveryNotice:
    'Delivery charges are calculated based on the delivery distance. The applicable charge will be shown before you place your order.',
  hotlinePhone: '+91 89207 93479',
  whatsappNumber: '+91 89207 93479',
  deliveryHours: '12:00 PM – 12:00 AM (Midnight)',
  packagingHighlights: [
    'Clay Handi / Sealed Hot Foil Containers',
    'Spill-Proof Insulated Thermal Bags',
    'Accompaniments & Fresh Cutlery Included',
    'Contactless Delivery Available',
  ],
};

/**
 * Pre-defined Greater Noida sectors around Omaxe NRI City Centre
 */
export const GREATER_NOIDA_SECTORS: GreaterNoidaLocation[] = [
  { name: 'Omaxe NRI City / Palm Greens', sector: 'NRI City', approxDistanceKm: 0.5, areaType: 'Residential' },
  { name: 'Pari Chowk / Metro Station', sector: 'Pari Chowk', approxDistanceKm: 1.2, areaType: 'Commercial' },
  { name: 'Alpha 1 (Commercial & Residential)', sector: 'Sector Alpha 1', approxDistanceKm: 2.2, areaType: 'Residential' },
  { name: 'Alpha 2 (Golf Course Road / Market)', sector: 'Sector Alpha 2', approxDistanceKm: 2.8, areaType: 'Residential' },
  { name: 'Beta 1 & Beta 2 Sectors', sector: 'Sector Beta 1/2', approxDistanceKm: 3.2, areaType: 'Residential' },
  { name: 'Gamma 1 & Gamma 2 Sectors', sector: 'Sector Gamma 1/2', approxDistanceKm: 3.6, areaType: 'Residential' },
  { name: 'Delta 1, Delta 2 & Delta 3', sector: 'Sector Delta', approxDistanceKm: 4.5, areaType: 'Residential' },
  { name: 'Knowledge Park I, II & III (Hostels/Campuses)', sector: 'Knowledge Park', approxDistanceKm: 2.9, areaType: 'Educational Hub' },
  { name: 'Jaypee Greens (Wish Town / Golf View)', sector: 'Jaypee Greens', approxDistanceKm: 3.8, areaType: 'Residential' },
  { name: 'Chi 1, 2, 3, 4 & Purvanchal Royal City', sector: 'Sector Chi', approxDistanceKm: 4.8, areaType: 'Residential' },
  { name: 'Pi 1 & Pi 2 / Eldeco Residency', sector: 'Sector Pi', approxDistanceKm: 5.8, areaType: 'Residential' },
  { name: 'Zeta 1, Eta 1 & Eta 2', sector: 'Sector Zeta / Eta', approxDistanceKm: 6.5, areaType: 'Residential' },
  { name: 'Omicron 1, 2, 3 & Sector MU', sector: 'Sector Omicron / MU', approxDistanceKm: 7.8, areaType: 'Residential' },
  { name: 'Swarna Nagari & Sector 31', sector: 'Swarna Nagari', approxDistanceKm: 2.0, areaType: 'Residential' },
  { name: 'Greater Noida West / Extended Zone (>10 KM)', sector: 'Gr. Noida West', approxDistanceKm: 14.0, areaType: 'Residential' },
];

export interface DeliveryCalculationResult {
  fee: number | null;
  tier: DeliveryTier | null;
  isBeyond10Km: boolean;
  message?: string;
}

/**
 * Calculates delivery fee and matching tier from distance in kilometers
 *
 * EXACT CALCULATION RULES:
 * - distance <= 3 KM (including 2–3 KM & local) → ₹30
 * - distance > 3 && distance <= 5 KM           → ₹50
 * - distance > 5 && distance <= 7 KM           → ₹70
 * - distance > 7 && distance <= 10 KM          → ₹90
 * - distance > 10 KM                           → No automatic charge; Contact restaurant
 */
export const getDeliveryFeeByDistance = (
  distanceKm: number
): DeliveryCalculationResult => {
  const safeDistance = Math.max(0, distanceKm);

  if (safeDistance > 10) {
    return {
      fee: null,
      tier: null,
      isBeyond10Km: true,
      message: DELIVERY_CONFIG.beyond10KmNotice,
    };
  }

  if (safeDistance <= 3) {
    return {
      fee: 30,
      tier: DELIVERY_CONFIG.tiers[0], // 2–3 KM
      isBeyond10Km: false,
    };
  }

  if (safeDistance <= 5) {
    return {
      fee: 50,
      tier: DELIVERY_CONFIG.tiers[1], // 3–5 KM
      isBeyond10Km: false,
    };
  }

  if (safeDistance <= 7) {
    return {
      fee: 70,
      tier: DELIVERY_CONFIG.tiers[2], // 5–7 KM
      isBeyond10Km: false,
    };
  }

  // safeDistance > 7 && safeDistance <= 10
  return {
    fee: 90,
    tier: DELIVERY_CONFIG.tiers[3], // 7–10 KM
    isBeyond10Km: false,
  };
};
