import officeBuilding1 from "@/assets/office-building-1.jpg";
import heroBuilding from "@/assets/hero-commercial-building.jpg";
import heroImg from "@/assets/hero.jpg";
import retailCenter from "@/assets/retail-center.jpg";
import warehouse from "@/assets/warehouse-industrial.jpg";

// Mock property data for Earthwell Realty (India)
export interface Property {
  id: string;
  title: string;
  type: "office" | "retail" | "industrial" | "warehouse";
  price: number; // Price in INR
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
  availability: "available" | "leased" | "pending";
  listingDate: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  financials: {
    capRate: number;
    noi: number; // Net Operating Income in INR
    grossIncome: number; // Gross Income in INR
    expenses: number; // Expenses in INR
  };
  tenants?: {
    name: string;
    leaseEnd: string;
    sqft: number;
  }[];
  likes?: number;
  interested?: number;
  beds?: number;
  baths?: number;
}

export const mockProperties: Property[] = [
  {
    id: "prop-101",
    title: "Prime BKC Corporate Tower",
    type: "office",
    price: 1300000000, // ₹130 Crore
    sqft: 65000,
    location: {
      address: "G Block, Bandra Kurla Complex",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400051",
      coordinates: [72.8601, 19.0664],
    },
    images: [officeBuilding1, heroBuilding],
    description:
      "A Grade-A office building in Mumbai's premier financial district, BKC. Offers spectacular views, modern amenities, and proximity to major corporate headquarters.",
    features: [
      "LEED Gold Certified",
      "Floor-to-ceiling Windows",
      "Destination Control Elevators",
      "24/7 Power Backup",
    ],
    amenities: [
      "Rooftop Cafeteria",
      "Valet Parking",
      "Fitness Center",
      "Business Lounge",
    ],
    zoning: "Commercial Office",
    yearBuilt: 2019,
    parkingSpaces: 250,
    availability: "available",
    listingDate: "2024-01-20",
    agent: {
      name: "Rohan Mehra",
      phone: "+91 98200 98200",
      email: "rohan.mehra@earthwellrealty.in",
    },
    financials: {
      capRate: 7.5,
      noi: 97500000,
      grossIncome: 125000000,
      expenses: 27500000,
    },
    tenants: [
      { name: "Global Investment Bank", leaseEnd: "2029-12-31", sqft: 20000 },
      { name: "Innovate Fintech", leaseEnd: "2027-08-31", sqft: 15000 },
    ],
    likes: 42,
    interested: 15,
    beds: 3,
    baths: 3,
  },
  {
    id: "prop-102",
    title: "Koramangala High-Street Retail Space",
    type: "retail",
    price: 450000000, // ₹45 Crore
    sqft: 22000,
    location: {
      address: "80 Feet Road, Koramangala 4th Block",
      city: "Bengaluru",
      state: "Karnataka",
      zip: "560034",
      coordinates: [77.6245, 12.9345],
    },
    images: [retailCenter],
    description:
      "Premium retail property in the heart of Bengaluru's trendiest neighborhood. High foot traffic and visibility, perfect for flagship stores and international brands.",
    features: [
      "Excellent Frontage",
      "High Ceilings",
      "Modern Glass Facade",
      "Ample Signage Space",
    ],
    amenities: [
      "Basement Parking",
      "24/7 Security",
      "Power Backup",
      "Customer Lift",
    ],
    zoning: "Commercial Retail",
    yearBuilt: 2017,
    parkingSpaces: 80,
    availability: "available",
    listingDate: "2024-02-10",
    agent: {
      name: "Anjali Rao",
      phone: "+91 99000 99000",
      email: "anjali.rao@earthwellrealty.in",
    },
    financials: {
      capRate: 8.0,
      noi: 36000000,
      grossIncome: 48000000,
      expenses: 12000000,
    },
    likes: 1042,
    interested: 115,
  },
  {
    id: "prop-103",
    title: "Chakan MIDC Logistics Park",
    type: "warehouse",
    price: 850000000, // ₹85 Crore
    sqft: 250000,
    location: {
      address: "Phase 3, Chakan Industrial Area",
      city: "Pune",
      state: "Maharashtra",
      zip: "410501",
      coordinates: [73.8118, 18.7493],
    },
    images: [warehouse],
    description:
      "State-of-the-art warehousing facility in Pune's prime industrial belt. Excellent connectivity to Mumbai-Pune Expressway and major manufacturing hubs.",
    features: [
      "36 ft Clear Height",
      "50 Loading Docks with Levelers",
      "ESFR Sprinkler System",
      "Insulated Roofing",
    ],
    amenities: [
      "Truck Parking Bay",
      "Office & Admin Block",
      "24/7 Security Cabin",
      "Weighbridge",
    ],
    zoning: "Industrial",
    yearBuilt: 2021,
    parkingSpaces: 100,
    availability: "leased",
    listingDate: "2024-01-15",
    agent: {
      name: "Vikram Patil",
      phone: "+91 98500 98500",
      email: "vikram.patil@earthwellrealty.in",
    },
    financials: {
      capRate: 8.5,
      noi: 72250000,
      grossIncome: 90000000,
      expenses: 17750000,
    },
    tenants: [
      {
        name: "Express Logistics Pvt. Ltd.",
        leaseEnd: "2030-06-30",
        sqft: 250000,
      },
    ],
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-104",
    title: "Gurugram Cyber City IT Hub",
    type: "office",
    price: 1100000000, // ₹110 Crore
    sqft: 80000,
    location: {
      address: "DLF Cyber City, Sector 24",
      city: "Gurugram",
      state: "Haryana",
      zip: "122002",
      coordinates: [77.0883, 28.4944],
    },
    images: [heroImg],
    description:
      "A landmark office building in India's foremost IT and business district. Home to Fortune 500 companies, offering world-class infrastructure and connectivity.",
    features: [
      "IGBC Platinum Rated",
      "Centralized HVAC",
      "100% Power Backup",
      "Fiber Optic Connectivity",
    ],
    amenities: [
      "Multi-cuisine Food Court",
      "Ample Parking",
      "Day Care Center",
      "Shuttle Service to Metro",
    ],
    zoning: "IT Park/SEZ",
    yearBuilt: 2016,
    parkingSpaces: 400,
    availability: "pending",
    listingDate: "2024-02-05",
    agent: {
      name: "Priya Singh",
      phone: "+91 98100 98100",
      email: "priya.singh@earthwellrealty.in",
    },
    financials: {
      capRate: 7.8,
      noi: 85800000,
      grossIncome: 112000000,
      expenses: 26200000,
    },
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-105",
    title: "Hyderabad Pharma Industrial Unit",
    type: "industrial",
    price: 600000000, // ₹60 Crore
    sqft: 150000,
    location: {
      address: "Genome Valley, Shamirpet",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500078",
      coordinates: [78.5898, 17.6253],
    },
    images: [warehouse],
    description:
      "Specialized industrial facility in Hyderabad's premier biotech and pharma hub. Equipped with R&D labs and cleanroom-ready areas.",
    features: [
      "Effluent Treatment Plant (ETP)",
      "High Power Sanction",
      "Zero Discharge Compliance",
      "Material Handling Systems",
    ],
    amenities: [
      "Admin Office Block",
      "Quality Control Lab",
      "Staff Quarters",
      "Secure Perimeter",
    ],
    zoning: "Industrial - Pharma",
    yearBuilt: 2018,
    parkingSpaces: 120,
    availability: "available",
    listingDate: "2024-03-01",
    agent: {
      name: "Suresh Reddy",
      phone: "+91 99490 99490",
      email: "suresh.reddy@earthwellrealty.in",
    },
    financials: {
      capRate: 8.2,
      noi: 49200000,
      grossIncome: 65000000,
      expenses: 15800000,
    },
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-106",
    title: "OMR Chennai Tech Park",
    type: "office",
    price: 950000000, // ₹95 Crore
    sqft: 120000,
    location: {
      address: "Old Mahabalipuram Road, Sholinganallur",
      city: "Chennai",
      state: "Tamil Nadu",
      zip: "600119",
      coordinates: [80.2294, 12.8943],
    },
    images: [heroBuilding],
    description:
      "Modern IT park on Chennai's famed IT corridor. Features large, efficient floor plates ideal for technology and BPO companies.",
    features: [
      "Scalable Office Spaces",
      "Redundant Power Supply",
      "High-Speed Internet",
      "Ample Natural Light",
    ],
    amenities: [
      "Large Food Court",
      "Gymnasium",
      "Indoor Games",
      "Extensive Landscaping",
    ],
    zoning: "IT Park/Commercial",
    yearBuilt: 2020,
    parkingSpaces: 500,
    availability: "available",
    listingDate: "2024-01-25",
    agent: {
      name: "Karthik Raja",
      phone: "+91 98400 98400",
      email: "karthik.raja@earthwellrealty.in",
    },
    financials: {
      capRate: 7.9,
      noi: 75050000,
      grossIncome: 98000000,
      expenses: 22950000,
    },
    tenants: [
      { name: "Cognizant Solutions", leaseEnd: "2028-10-31", sqft: 40000 },
    ],
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-107",
    title: "Park Street Heritage Retail Building",
    type: "retail",
    price: 700000000, // ₹70 Crore
    sqft: 30000,
    location: {
      address: "Park Street",
      city: "Kolkata",
      state: "West Bengal",
      zip: "700016",
      coordinates: [88.3533, 22.5533],
    },
    images: [retailCenter],
    description:
      "An iconic heritage building offering prime retail space on Kolkata's most prestigious high street. A rare opportunity for luxury brands.",
    features: [
      "Heritage Architecture",
      "High Footfall Zone",
      "Excellent Store Visibility",
      "Ground Floor Access",
    ],
    amenities: [
      "Valet Service",
      "Restored Interiors",
      "Modern Utilities",
      "Security Personnel",
    ],
    zoning: "Prime Commercial",
    yearBuilt: 1940, // Renovated 2022
    parkingSpaces: 30,
    availability: "available",
    listingDate: "2024-02-18",
    agent: {
      name: "Aditi Bannerjee",
      phone: "+91 98300 98300",
      email: "aditi.b@earthwellrealty.in",
    },
    financials: {
      capRate: 7.0,
      noi: 49000000,
      grossIncome: 65000000,
      expenses: 16000000,
    },
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-108",
    title: "Bhiwandi Mega Warehouse Hub",
    type: "warehouse",
    price: 1150000000, // ₹115 Crore
    sqft: 400000,
    location: {
      address: "Mumbai-Nashik Highway, Bhiwandi",
      city: "Thane",
      state: "Maharashtra",
      zip: "421302",
      coordinates: [73.0583, 19.2982],
    },
    images: [warehouse, heroImg],
    description:
      "A massive, state-of-the-art warehousing and fulfillment center in India's largest logistics hub. Ideal for e-commerce and large-scale distribution.",
    features: [
      "PEB Structure",
      "40 ft Eave Height",
      "FM2 Compliant Flooring",
      "Multiple Dock Doors",
    ],
    amenities: [
      "Drivers' Rest Area",
      "Canteen Facility",
      "Automated Fire Safety",
      "CCTV Surveillance",
    ],
    zoning: "Logistics Park",
    yearBuilt: 2022,
    parkingSpaces: 200,
    availability: "available",
    listingDate: "2024-03-05",
    agent: {
      name: "Rohan Mehra",
      phone: "+91 98200 98200",
      email: "rohan.mehra@earthwellrealty.in",
    },
    financials: {
      capRate: 9.0,
      noi: 103500000,
      grossIncome: 125000000,
      expenses: 21500000,
    },
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-109",
    title: "SG Highway Commercial Complex",
    type: "office",
    price: 550000000, // ₹55 Crore
    sqft: 50000,
    location: {
      address: "Sarkhej-Gandhinagar Highway, Bodakdev",
      city: "Ahmedabad",
      state: "Gujarat",
      zip: "380054",
      coordinates: [72.5152, 23.0381],
    },
    images: [officeBuilding1],
    description:
      "A modern commercial building on Ahmedabad's main arterial road, offering office and retail spaces with excellent connectivity.",
    features: [
      "Impressive Glass Facade",
      "Energy Efficient Design",
      "Flexible Office Layouts",
      "High-Speed Elevators",
    ],
    amenities: [
      "Multi-level Parking",
      "Cafeteria",
      "Professional Building Management",
      "24/7 Security",
    ],
    zoning: "Commercial",
    yearBuilt: 2018,
    parkingSpaces: 150,
    availability: "available",
    listingDate: "2024-02-22",
    agent: {
      name: "Amit Patel",
      phone: "+91 98250 98250",
      email: "amit.patel@earthwellrealty.in",
    },
    financials: {
      capRate: 7.5,
      noi: 41250000,
      grossIncome: 54000000,
      expenses: 12750000,
    },
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-110",
    title: "Noida Manufacturing Plant",
    type: "industrial",
    price: 750000000, // ₹75 Crore
    sqft: 200000,
    location: {
      address: "Sector 63, Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      zip: "201301",
      coordinates: [77.3739, 28.6252],
    },
    images: [warehouse],
    description:
      "Fully equipped manufacturing facility in a well-established industrial sector of Noida. Suitable for electronics, automotive, or FMCG production.",
    features: [
      "Heavy Duty Flooring",
      "Multiple Crane Bays",
      "High Power Connection",
      "Loading Bays",
    ],
    amenities: [
      "Administrative Building",
      "Workers Canteen",
      "Tool Room",
      "Ample Open Space",
    ],
    zoning: "Industrial Manufacturing",
    yearBuilt: 2015,
    parkingSpaces: 80,
    availability: "pending",
    listingDate: "2024-03-10",
    agent: {
      name: "Priya Singh",
      phone: "+91 98100 98100",
      email: "priya.singh@earthwellrealty.in",
    },
    financials: {
      capRate: 8.8,
      noi: 66000000,
      grossIncome: 82000000,
      expenses: 16000000,
    },
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-111",
    title: "Hinjawadi Phase 1 IT Office",
    type: "office",
    price: 680000000, // ₹68 Crore
    sqft: 90000,
    location: {
      address: "Rajiv Gandhi Infotech Park, Hinjawadi",
      city: "Pune",
      state: "Maharashtra",
      zip: "411057",
      coordinates: [73.7411, 18.5912],
    },
    images: [heroBuilding, officeBuilding1],
    description:
      "Prime office space within Pune's largest IT hub. The building is part of a larger campus with extensive amenities and a professional environment.",
    features: [
      "Plug-and-Play Option",
      "Large Floor Plates",
      "SEZ Benefits",
      "Excellent Connectivity",
    ],
    amenities: [
      "Campus Food Court",
      "Internal Shuttle Service",
      "Sports Facilities",
      "Amphitheater",
    ],
    zoning: "SEZ/IT Park",
    yearBuilt: 2017,
    parkingSpaces: 300,
    availability: "leased",
    listingDate: "2024-01-05",
    agent: {
      name: "Vikram Patil",
      phone: "+91 98500 98500",
      email: "vikram.patil@earthwellrealty.in",
    },
    financials: {
      capRate: 8.0,
      noi: 54400000,
      grossIncome: 69000000,
      expenses: 14600000,
    },
    tenants: [{ name: "Infosys Limited", leaseEnd: "2031-03-31", sqft: 90000 }],
    likes: 42,
    interested: 15,
  },
  {
    id: "prop-112",
    title: "Jaipur Showroom and Warehouse",
    type: "retail",
    price: 250000000, // ₹25 Crore
    sqft: 40000,
    location: {
      address: "Tonk Road",
      city: "Jaipur",
      state: "Rajasthan",
      zip: "302018",
      coordinates: [75.7873, 26.9124],
    },
    images: [retailCenter, warehouse],
    description:
      "A unique property combining a large retail showroom on the ground floor with warehousing space at the rear. Ideal for furniture, automotive, or electronics businesses.",
    features: [
      "Main Road Frontage",
      "High Visibility",
      "Separate Access for Warehouse",
      "Goods Lift",
    ],
    amenities: [
      "Customer Parking",
      "Staff Area",
      "Loading/Unloading Bay",
      "Office Space",
    ],
    zoning: "Commercial",
    yearBuilt: 2019,
    parkingSpaces: 50,
    availability: "available",
    listingDate: "2024-02-28",
    agent: {
      name: "Arjun Singh",
      phone: "+91 98290 98290",
      email: "arjun.singh@earthwellrealty.in",
    },
    financials: {
      capRate: 7.6,
      noi: 19000000,
      grossIncome: 24000000,
      expenses: 5000000,
    },
    likes: 42,
    interested: 15,
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find((property) => property.id === id);
};

export const getPropertiesByType = (type: string): Property[] => {
  if (type === "all") return mockProperties;
  return mockProperties.filter((property) => property.type === type);
};

export const searchProperties = (query: string): Property[] => {
  const searchTerm = query.toLowerCase();
  return mockProperties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm) ||
      property.type.toLowerCase().includes(searchTerm) ||
      property.location.city.toLowerCase().includes(searchTerm) ||
      property.location.state.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm)
  );
};
