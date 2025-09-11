import officeBuilding1 from "@/assets/office-building-1.jpg";
import heroBuilding from "@/assets/hero-commercial-building.jpg";
import heroImg from "@/assets/hero.jpg";
import retailCenter from "@/assets/retail-center.jpg";
import warehouse from "@/assets/warehouse-industrial.jpg";
// Mock property data for Earthwell Realty
export interface Property {
  id: string;
  title: string;
  type: 'office' | 'retail' | 'industrial' | 'warehouse';
  price: number;
  sqft: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    coordinates: [number, number];
  };
  images: string[];
  description: string;
  features: string[];
  amenities: string[];
  zoning: string;
  yearBuilt: number;
  parkingSpaces: number;
  availability: 'available' | 'leased' | 'pending';
  listingDate: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  financials: {
    capRate: number;
    noi: number;
    grossIncome: number;
    expenses: number;
  };
  tenants?: {
    name: string;
    leaseEnd: string;
    sqft: number;
  }[];
}

export const mockProperties: Property[] = [
  {
    id: "prop-001",
    title: "Premium Downtown Office Tower",
    type: "office",
    price: 15500000,
    sqft: 45000,
    location: {
      address: "1200 Corporate Plaza",
      city: "Atlanta",
      state: "GA",
      zip: "30309",
      coordinates: [-84.3880, 33.7490]
    },
    images:  [officeBuilding1, heroBuilding],
    description: "A prestigious Class A office building in the heart of Atlanta's business district. Features modern amenities, floor-to-ceiling windows, and exceptional city views. Perfect for corporate headquarters or multi-tenant investment.",
    features: [
      "Class A Office Space",
      "Floor-to-ceiling Windows",
      "Modern HVAC System",
      "High-speed Elevators",
      "24/7 Security",
      "Conference Facilities"
    ],
    amenities: [
      "Fitness Center",
      "Executive Parking",
      "Rooftop Terrace",
      "Concierge Service",
      "Business Center",
      "Restaurant on-site"
    ],
    zoning: "C-2 Commercial",
    yearBuilt: 2018,
    parkingSpaces: 180,
    availability: "available",
    listingDate: "2024-01-15",
    agent: {
      name: "Sarah Chen",
      phone: "(404) 555-0123",
      email: "sarah.chen@earthwellrealty.com"
    },
    financials: {
      capRate: 6.5,
      noi: 1007500,
      grossIncome: 1350000,
      expenses: 342500
    },
    tenants: [
      {
        name: "TechCorp Solutions",
        leaseEnd: "2028-12-31",
        sqft: 12000
      },
      {
        name: "Global Finance Group",
        leaseEnd: "2027-06-30",
        sqft: 8500
      }
    ]
  },
  {
    id: "prop-002",
    title: "Luxury Retail Shopping Center",
    type: "retail",
    price: 8750000,
    sqft: 28000,
    location: {
      address: "5500 Fashion Boulevard",
      city: "Charlotte",
      state: "NC",
      zip: "28277",
      coordinates: [-80.8431, 35.2271]
    },
    images:  [heroImg],
    description: "Prime retail destination in Charlotte's upscale shopping district. High foot traffic location with excellent visibility and accessibility. Ideal for luxury brands and high-end retail concepts.",
    features: [
      "High-Traffic Location",
      "Premium Storefronts",
      "Modern Architecture",
      "Excellent Visibility",
      "Easy Access",
      "Flexible Layouts"
    ],
    amenities: [
      "Ample Parking",
      "Food Court",
      "Customer Lounges",
      "Event Spaces",
      "Valet Parking",
      "Security Patrol"
    ],
    zoning: "B-2 Business",
    yearBuilt: 2015,
    parkingSpaces: 350,
    availability: "available",
    listingDate: "2024-02-01",
    agent: {
      name: "Michael Rodriguez",
      phone: "(704) 555-0198",
      email: "michael.rodriguez@earthwellrealty.com"
    },
    financials: {
      capRate: 7.2,
      noi: 630000,
      grossIncome: 875000,
      expenses: 245000
    },
    tenants: [
      {
        name: "Luxury Fashion Boutique",
        leaseEnd: "2029-03-31",
        sqft: 4500
      },
      {
        name: "Premium Electronics Store",
        leaseEnd: "2026-12-31",
        sqft: 6200
      }
    ]
  },
  {
    id: "prop-003",
    title: "Modern Logistics & Distribution Center",
    type: "warehouse",
    price: 12300000,
    sqft: 125000,
    location: {
      address: "8800 Industrial Parkway",
      city: "Memphis",
      state: "TN",
      zip: "38118",
      coordinates: [-90.0490, 35.1495]
    },
    images:  [retailCenter],
    description: "State-of-the-art distribution facility strategically located near major transportation hubs. Features modern dock facilities, high ceilings, and advanced logistics capabilities.",
    features: [
      "Clear Height 32'",
      "40 Dock Doors",
      "Drive-in Doors",
      "LED Lighting",
      "ESFR Sprinkler System",
      "Rail Access Available"
    ],
    amenities: [
      "Office Space Included",
      "Employee Parking",
      "Truck Court",
      "Maintenance Shop",
      "Security System",
      "Scale House"
    ],
    zoning: "I-2 Industrial",
    yearBuilt: 2020,
    parkingSpaces: 95,
    availability: "available",
    listingDate: "2024-01-28",
    agent: {
      name: "David Thompson",
      phone: "(901) 555-0167",
      email: "david.thompson@earthwellrealty.com"
    },
    financials: {
      capRate: 8.1,
      noi: 996300,
      grossIncome: 1230000,
      expenses: 233700
    }
  },
  {
    id: "prop-004",
    title: "Class A Medical Office Building",
    type: "office",
    price: 6800000,
    sqft: 24000,
    location: {
      address: "3400 Healthcare Drive",
      city: "Nashville",
      state: "TN",
      zip: "37203",
      coordinates: [-86.7816, 36.1627]
    },
    images:  [warehouse],
    description: "Premier medical office building adjacent to major hospital campus. Fully equipped for healthcare tenants with specialized infrastructure and convenient patient access.",
    features: [
      "Medical Gas Systems",
      "Enhanced HVAC",
      "Wide Corridors",
      "Accessible Design",
      "Backup Power",
      "Medical Waste Systems"
    ],
    amenities: [
      "Patient Parking",
      "Cafeteria",
      "Pharmacy On-site",
      "Lab Services",
      "Conference Rooms",
      "Covered Walkways"
    ],
    zoning: "PUD Planned Unit Development",
    yearBuilt: 2017,
    parkingSpaces: 120,
    availability: "leased",
    listingDate: "2024-01-10",
    agent: {
      name: "Lisa Park",
      phone: "(615) 555-0142",
      email: "lisa.park@earthwellrealty.com"
    },
    financials: {
      capRate: 6.8,
      noi: 462400,
      grossIncome: 612000,
      expenses: 149600
    },
    tenants: [
      {
        name: "Premier Cardiology Group",
        leaseEnd: "2030-05-31",
        sqft: 8000
      },
      {
        name: "Advanced Imaging Center",
        leaseEnd: "2029-08-31",
        sqft: 6500
      }
    ]
  },
  {
    id: "prop-005",
    title: "Industrial Manufacturing Facility",
    type: "industrial",
    price: 18900000,
    sqft: 156000,
    location: {
      address: "7200 Manufacturing Way",
      city: "Birmingham",
      state: "AL",
      zip: "35215",
      coordinates: [-86.7991, 33.5207]
    },
    images: [officeBuilding1],
    description: "Heavy-duty manufacturing facility with crane capabilities and specialized power infrastructure. Ideal for automotive, aerospace, or heavy equipment manufacturing operations.",
    features: [
      "30-Ton Bridge Crane",
      "480V 3-Phase Power",
      "Compressed Air System",
      "Heavy Floor Loading",
      "Rail Siding Access",
      "Environmental Controls"
    ],
    amenities: [
      "Administrative Offices",
      "Employee Facilities",
      "Maintenance Shop",
      "Quality Control Lab",
      "Shipping/Receiving",
      "Security Monitoring"
    ],
    zoning: "M-2 Heavy Industrial",
    yearBuilt: 2012,
    parkingSpaces: 145,
    availability: "pending",
    listingDate: "2024-02-05",
    agent: {
      name: "Robert Williams",
      phone: "(205) 555-0189",
      email: "robert.williams@earthwellrealty.com"
    },
    financials: {
      capRate: 8.5,
      noi: 1606500,
      grossIncome: 1890000,
      expenses: 283500
    }
  },
  {
    id: "prop-006",
    title: "Boutique Office Campus",
    type: "office",
    price: 9200000,
    sqft: 32000,
    location: {
      address: "4500 Innovation Boulevard",
      city: "Raleigh",
      state: "NC",
      zip: "27606",
      coordinates: [-78.6382, 35.7796]
    },
    images: [heroBuilding],
    description: "Contemporary office campus in Research Triangle Park area. Features flexible floor plates, outdoor workspace, and proximity to major tech companies and universities.",
    features: [
      "Flexible Floor Plates",
      "Natural Lighting",
      "Modern Infrastructure",
      "High-Speed Internet",
      "Green Building Features",
      "Outdoor Workspace"
    ],
    amenities: [
      "Fitness Center",
      "Café",
      "Conference Center",
      "Collaboration Spaces",
      "Electric Car Charging",
      "Bike Storage"
    ],
    zoning: "O-2 Office",
    yearBuilt: 2019,
    parkingSpaces: 160,
    availability: "available",
    listingDate: "2024-01-22",
    agent: {
      name: "Jennifer Lee",
      phone: "(919) 555-0134",
      email: "jennifer.lee@earthwellrealty.com"
    },
    financials: {
      capRate: 6.9,
      noi: 634800,
      grossIncome: 828000,
      expenses: 193200
    },
    tenants: [
      {
        name: "TechStart Innovation Hub",
        leaseEnd: "2028-09-30",
        sqft: 15000
      }
    ]
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find(property => property.id === id);
};

export const getPropertiesByType = (type: string): Property[] => {
  if (type === 'all') return mockProperties;
  return mockProperties.filter(property => property.type === type);
};

export const searchProperties = (query: string): Property[] => {
  const searchTerm = query.toLowerCase();
  return mockProperties.filter(property => 
    property.title.toLowerCase().includes(searchTerm) ||
    property.type.toLowerCase().includes(searchTerm) ||
    property.location.city.toLowerCase().includes(searchTerm) ||
    property.location.state.toLowerCase().includes(searchTerm) ||
    property.description.toLowerCase().includes(searchTerm)
  );
};