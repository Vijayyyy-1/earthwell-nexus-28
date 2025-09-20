import officeBuilding1 from "@/assets/office-building-1.jpg";
import heroBuilding from "@/assets/hero-commercial-building.jpg";
import heroImg from "@/assets/hero.jpg";
import retailCenter from "@/assets/retail-center.jpg";
import warehouse from "@/assets/warehouse-industrial.jpg";
import aryan from "@/assets/Aryan-Tiwari.jpg";
import omkar from "@/assets/Omkar-Jadhav.jpg";

// Mock property data for Earthwell Realty (India)
export interface Property {
  id: string;
  title: string;
  type: "office" | "retail" | "industrial" | "warehouse";
  category: "commercial" | "preleased" | "residential";
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
    img?: string;
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
    category :"commercial",
    price: 1300000000, // ₹130 Crore
    sqft: 65000,
    location: {
      address: "G Block, Bandra Kurla Complex",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400051",
      coordinates: [72.8601, 19.0664],
    },
    images: [officeBuilding1, heroBuilding, retailCenter],
    description:
      "A prestigious Grade-A office tower centrally located in Mumbai's pre-eminent financial and commercial district, Bandra Kurla Complex (BKC). This architectural marvel offers expansive floor plates with floor-to-ceiling windows, providing panoramic city views and abundant natural light. Equipped with state-of-the-art infrastructure including LEED Gold Certification, destination control elevators, and 24/7 power backup, it provides a seamless and sustainable work environment. Ideal for multinational corporations and leading financial institutions seeking a strategic and high-profile address.",
    features: [
      "LEED Gold Certified",
      "Floor-to-ceiling Windows",
      "Destination Control Elevators",
      "24/7 Power Backup",
      "Advanced HVAC Systems",
      "High-Speed Fiber Connectivity",
    ],
    amenities: [
      "Rooftop Cafeteria with City Views",
      "Valet Parking & Dedicated Basement Parking",
      "Exclusive Executive Fitness Center",
      "Professional Business Lounge & Meeting Rooms",
      "Concierge Services",
    ],
    zoning: "Commercial Office",
    yearBuilt: 2019,
    parkingSpaces: 250,
    availability: "available",
    listingDate: "2024-01-20",
    agent: {
      name: "Omkar Jadhav",
      phone: "+91 98200 98200",
      email: "omkar.jadhav@earthwellrealty.in",
      img: omkar,
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
    likes: 560,
    interested: 445,
    beds: 3,
    baths: 3,
  },
  {
    id: "prop-102",
    title: "Koramangala High-Street Retail Space",
    type: "retail",
    category : "residential",
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
      "A prime high-street retail destination situated on the bustling 80 Feet Road in Koramangala, Bengaluru's most sought-after commercial and residential hub. This expansive property boasts exceptional street frontage and visibility, attracting high foot traffic from affluent residents and young professionals. Featuring high ceilings, a modern glass facade, and ample space for prominent signage, it's perfectly suited for flagship stores, luxury boutiques, or a premium dining establishment looking to establish a dominant presence in a vibrant market.",
    features: [
      "Excellent Street Frontage & Visibility",
      "High Ceilings for Dynamic Displays",
      "Modern Glass Facade for Brand Appeal",
      "Ample Signage Space for Brand Identity",
      "Direct Road Access",
      "Strategic Location in a High-Growth Area",
    ],
    amenities: [
      "Dedicated Basement Parking for Customers",
      "24/7 Advanced Security Systems",
      "Reliable Power Backup for Uninterrupted Operations",
      "Customer Lift & Service Lift Access",
      "Spacious Interiors for Flexible Layouts",
    ],
    zoning: "Commercial Retail",
    yearBuilt: 2017,
    parkingSpaces: 80,
    availability: "available",
    listingDate: "2024-02-10",
    agent: {
      name: "Aryan Tiwari",
      phone: "+91 98200 98200",
      email: "aryan.tiwari@earthwellrealty.in",
      img: aryan,
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
    category :"commercial",
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
      "An expansive, state-of-the-art warehousing and logistics facility strategically located in Phase 3 of the Chakan Industrial Area, Pune. This Grade-A property offers a remarkable 36 ft clear height, 50 loading docks equipped with automatic levelers, and a comprehensive ESFR sprinkler system for optimal safety. Its proximity to the Mumbai-Pune Expressway and major manufacturing clusters makes it an ideal hub for third-party logistics (3PL) providers, e-commerce giants, and automotive companies seeking efficient distribution solutions across Western India.",
    features: [
      "36 ft Clear Height for Vertical Storage",
      "50 Loading Docks with Automatic Levelers",
      "ESFR Sprinkler System for Fire Safety",
      "Insulated Roofing to Maintain Temperature",
      "High-Strength Industrial Flooring",
      "Proximity to Major Highways & Manufacturing Hubs",
    ],
    amenities: [
      "Dedicated Truck Parking Bay",
      "Integrated Office & Admin Block",
      "24/7 Manned Security Cabin & CCTV Surveillance",
      "In-built Weighbridge",
      "Drivers' Rest Area",
    ],
    zoning: "Industrial",
    yearBuilt: 2021,
    parkingSpaces: 100,
    availability: "leased",
    listingDate: "2024-01-15",
    agent: {
      name: "Omkar Jadhav",
      phone: "+91 98200 98200",
      email: "omkar.jadhav@earthwellrealty.in",
      img: omkar,
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
    likes: 231,
    interested: 104,
  },
  {
    id: "prop-104",
    title: "Gurugram Cyber City IT Hub",
    type: "office",
    category : "preleased",
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
      "An iconic and highly sought-after office building located in the heart of DLF Cyber City, Gurugram – India's premier IT and business district. This IGBC Platinum Rated facility offers world-class infrastructure designed for efficiency and collaboration, featuring centralized HVAC, 100% power backup, and cutting-edge fiber optic connectivity. With its strategic location, excellent connectivity, and proximity to major corporate headquarters, it provides an unparalleled environment for Fortune 500 companies and leading tech firms seeking a prestigious and dynamic workspace.",
    features: [
      "IGBC Platinum Rated for Sustainability",
      "Centralized HVAC for Optimal Climate Control",
      "100% Power Backup with Redundant Systems",
      "High-Speed Fiber Optic Connectivity Infrastructure",
      "Modular Office Spaces",
      "Advanced Security Systems",
    ],
    amenities: [
      "Vibrant Multi-cuisine Food Court & Cafes",
      "Ample Multi-level Parking for Staff & Visitors",
      "On-site Day Care Center",
      "Complimentary Shuttle Service to Nearest Metro Station",
      "Fitness and Wellness Facilities",
    ],
    zoning: "IT Park/SEZ",
    yearBuilt: 2016,
    parkingSpaces: 400,
    availability: "pending",
    listingDate: "2024-02-05",
    agent: {
      name: "Aryan Tiwari",
      phone: "+91 98200 98200",
      email: "aryan.tiwari@earthwellrealty.in",
      img: aryan,
    },
    financials: {
      capRate: 7.8,
      noi: 85800000,
      grossIncome: 112000000,
      expenses: 26200000,
    },
    likes: 200,
    interested: 76,
  },
  {
    id: "prop-105",
    title: "Hyderabad Pharma Industrial Unit",
    type: "industrial",
    category :"commercial",
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
      "A cutting-edge, specialized industrial facility located within Hyderabad's renowned Genome Valley – India's leading biotech and pharma research hub. This property is meticulously designed to meet the stringent requirements of the pharmaceutical and biotechnology sectors, featuring an Effluent Treatment Plant (ETP), high power sanction, and infrastructure ready for cleanrooms and R&D laboratories. It offers a secure and compliant environment for manufacturing, research, and development operations, ensuring operational excellence and adherence to industry standards.",
    features: [
      "Integrated Effluent Treatment Plant (ETP)",
      "High Power Sanction & Reliable Supply",
      "Zero Discharge Compliance Infrastructure",
      "Advanced Material Handling Systems",
      "Cleanroom-ready & Lab Spaces",
      "Controlled Environment Capabilities",
    ],
    amenities: [
      "Dedicated Admin Office Block",
      "On-site Quality Control Laboratory",
      "Staff Quarters & Canteen Facility",
      "Secure Perimeter with Access Control",
      "Ample Parking for Trucks & Staff",
    ],
    zoning: "Industrial - Pharma",
    yearBuilt: 2018,
    parkingSpaces: 120,
    availability: "available",
    listingDate: "2024-03-01",
    agent: {
      name: "Omkar Jadhav",
      phone: "+91 98200 98200",
      email: "omkar.jadhav@earthwellrealty.in",
      img: omkar,
    },
    financials: {
      capRate: 8.2,
      noi: 49200000,
      grossIncome: 65000000,
      expenses: 15800000,
    },
    likes: 1322,
    interested: 544,
  },
  {
    id: "prop-106",
    title: "OMR Chennai Tech Park",
    type: "office",
    category :"preleased",
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
      "A cutting-edge IT park situated on Chennai's rapidly developing Old Mahabalipuram Road (OMR), known as the city's IT corridor. This modern facility offers large, highly efficient floor plates, designed to accommodate technology, ITES, and BPO companies seeking scalable and collaborative workspaces. With redundant power supply, high-speed internet infrastructure, and abundant natural light, it creates an optimal environment for productivity and innovation. The campus features extensive amenities, making it a complete ecosystem for corporate operations.",
    features: [
      "Scalable & Flexible Office Spaces",
      "Redundant Power Supply & Backup",
      "High-Speed Internet & Data Connectivity",
      "Ample Natural Light & Energy-Efficient Design",
      "Modern Glass Facade",
      "Access Control & Security Systems",
    ],
    amenities: [
      "Spacious Multi-cuisine Food Court",
      "On-site Gymnasium & Wellness Center",
      "Indoor Games & Recreation Zones",
      "Extensive Landscaping & Green Areas",
      "Dedicated Parking for Employees & Visitors",
    ],
    zoning: "IT Park/Commercial",
    yearBuilt: 2020,
    parkingSpaces: 500,
    availability: "available",
    listingDate: "2024-01-25",
    agent: {
      name: "Aryan Tiwari",
      phone: "+91 98200 98200",
      email: "aryan.tiwari@earthwellrealty.in",
      img: aryan,
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
    likes: 2000,
    interested: 1125,
  },
  {
    id: "prop-107",
    title: "Park Street Heritage Retail Building",
    type: "retail",
    category : "residential",
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
      "A truly exceptional and iconic heritage building, meticulously restored to offer unparalleled prime retail space on Kolkata's most prestigious high street – Park Street. This rare opportunity combines historical grandeur with modern amenities, featuring impressive heritage architecture, soaring ceilings, and expansive storefronts ensuring maximum visibility. With its strategic location amidst a high-footfall zone and luxury establishments, it is the perfect canvas for a flagship luxury brand, a high-end restaurant, or an exclusive lifestyle store seeking a distinguished address.",
    features: [
      "Iconic Heritage Architecture (Restored)",
      "Unbeatable High Street Location with High Footfall",
      "Excellent Storefront Visibility & Brand Exposure",
      "Direct Ground Floor Access",
      "Soaring Ceilings & Spacious Layouts",
      "Period Details with Modern Upgrades",
    ],
    amenities: [
      "Professional Valet Service Available",
      "Exquisitely Restored Interiors",
      "Upgraded Modern Utilities & Infrastructure",
      "Dedicated Security Personnel",
      "Backup Power Supply",
    ],
    zoning: "Prime Commercial",
    yearBuilt: 1940, // Renovated 2022
    parkingSpaces: 30,
    availability: "available",
    listingDate: "2024-02-18",
    agent: {
      name: "Aryan Tiwari",
      phone: "+91 98200 98200",
      email: "aryan.tiwari@earthwellrealty.in",
      img: aryan,
    },
    financials: {
      capRate: 7.0,
      noi: 49000000,
      grossIncome: 65000000,
      expenses: 16000000,
    },
    likes: 70,
    interested: 11,
  },
  {
    id: "prop-108",
    title: "Bhiwandi Mega Warehouse Hub",
    type: "warehouse",
    category :"preleased",
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
      "A colossal, cutting-edge warehousing and fulfillment center positioned in Bhiwandi, India's undisputed largest logistics and distribution hub. This Grade-A facility spans 400,000 sqft with a Pre-Engineered Building (PEB) structure, featuring an impressive 40 ft eave height and FM2 compliant flooring, ensuring durability and operational efficiency. Equipped with multiple dock doors and automated fire safety systems, it's a perfect solution for e-commerce giants, large-scale distributors, and 3PL providers requiring immense capacity, strategic connectivity to major highways, and robust operational infrastructure.",
    features: [
      "Robust PEB Structure",
      "Impressive 40 ft Eave Height",
      "FM2 Compliant Flooring for Heavy Loads",
      "Multiple Dock Doors with Levelers",
      "Automated Fire Safety & Sprinkler Systems",
      "Strategic Location on Mumbai-Nashik Highway",
    ],
    amenities: [
      "Dedicated Drivers' Rest Area",
      "Spacious Canteen Facility for Staff",
      "Advanced CCTV Surveillance & 24/7 Security",
      "Ample Truck & Trailer Parking",
      "Integrated Office Space & Utility Areas",
    ],
    zoning: "Logistics Park",
    yearBuilt: 2022,
    parkingSpaces: 200,
    availability: "available",
    listingDate: "2024-03-05",
    agent: {
      name: "Omkar Jadhav",
      phone: "+91 98200 98200",
      email: "omkar.jadhav@earthwellrealty.in",
      img: omkar,
    },
    financials: {
      capRate: 9.0,
      noi: 103500000,
      grossIncome: 125000000,
      expenses: 21500000,
    },
    likes: 495,
    interested: 150,
  },
  {
    id: "prop-109",
    title: "SG Highway Commercial Complex",
    type: "office",
    category : "preleased",
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
      "A sophisticated, modern commercial building prominently situated on Ahmedabad's prime Sarkhej-Gandhinagar (SG) Highway in Bodakdev. This architecturally striking complex features an impressive glass facade and offers versatile office and retail spaces designed for contemporary businesses. Its energy-efficient design, flexible office layouts, and high-speed elevators ensure a premium working environment. With unparalleled connectivity and proximity to key business districts and residential areas, it provides an ideal base for companies seeking growth and visibility in one of Gujarat's most dynamic cities.",
    features: [
      "Impressive Modern Glass Facade",
      "Energy Efficient Design & Systems",
      "Flexible & Customizable Office Layouts",
      "High-Speed Elevators",
      "Excellent Connectivity to Major Arterial Road",
      "Professional & Well-Maintained Interiors",
    ],
    amenities: [
      "Multi-level Dedicated Parking",
      "On-site Cafeteria & Food Services",
      "Professional Building Management & Maintenance",
      "24/7 Advanced Security & Surveillance",
      "Conference & Meeting Facilities",
    ],
    zoning: "Commercial",
    yearBuilt: 2018,
    parkingSpaces: 150,
    availability: "available",
    listingDate: "2024-02-22",
    agent: {
      name: "Aryan Tiwari",
      phone: "+91 98200 98200",
      email: "aryan.tiwari@earthwellrealty.in",
      img: aryan,
    },
    financials: {
      capRate: 7.5,
      noi: 41250000,
      grossIncome: 54000000,
      expenses: 12750000,
    },
    likes: 720,
    interested: 460,
  },
  {
    id: "prop-110",
    title: "Noida Manufacturing Plant",
    type: "industrial",
    category :"commercial",
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
      "A robust and fully-equipped manufacturing facility strategically located in Sector 63, Noida – a well-established and highly sought-after industrial zone within the National Capital Region (NCR). This expansive plant is built to handle heavy-duty operations, featuring reinforced flooring, multiple crane bays, and a high power connection, making it perfectly suitable for electronics, automotive, FMCG, or light engineering production. With ample open space for logistics and future expansion, it provides a comprehensive solution for companies looking for efficient and scalable industrial operations near Delhi.",
    features: [
      "Heavy Duty Industrial Flooring",
      "Multiple Crane Bays & Overhead Cranes (optional)",
      "High Power Connection (Dedicated Substation Potential)",
      "Dedicated Loading Bays & Docks",
      "Built-to-Suit Expansion Potential",
      "Robust PEB Structure",
    ],
    amenities: [
      "Separate Administrative Building",
      "Large Workers' Canteen & Rest Areas",
      "Integrated Tool Room & Maintenance Bay",
      "Ample Open Space for Storage & Movement",
      "24/7 Security & CCTV Surveillance",
    ],
    zoning: "Industrial Manufacturing",
    yearBuilt: 2015,
    parkingSpaces: 80,
    availability: "pending",
    listingDate: "2024-03-10",
    agent: {
      name: "Omkar Jadhav",
      phone: "+91 98200 98200",
      email: "omkar.jadhav@earthwellrealty.in",
      img: omkar,
    },
    financials: {
      capRate: 8.8,
      noi: 66000000,
      grossIncome: 82000000,
      expenses: 16000000,
    },
    likes: 87,
    interested: 12,
  },
  {
    id: "prop-111",
    title: "Hinjawadi Phase 1 IT Office",
    type: "office",
    category :"preleased",
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
      "A premium office space located within Phase 1 of the renowned Rajiv Gandhi Infotech Park, Hinjawadi – Pune's largest and most dynamic IT hub. This property is part of a larger, well-managed campus that provides a professional and vibrant ecosystem for technology and ITES companies. Offering large, efficient floor plates and potential for plug-and-play solutions, it benefits from SEZ benefits and excellent connectivity. The campus boasts a wide array of amenities, fostering a collaborative and supportive environment for employees and businesses alike.",
    features: [
      "Ready-to-Move 'Plug-and-Play' Option Available",
      "Large, Efficient Floor Plates for Flexible Layouts",
      "SEZ Benefits for IT/ITES Companies",
      "Excellent Connectivity to Major Residential & Commercial Zones",
      "Integrated Campus Environment",
      "Redundant Power & Data Connectivity",
    ],
    amenities: [
      "Expansive Campus Food Court & Cafeterias",
      "Internal Shuttle Service within the Park",
      "Dedicated Sports Facilities & Recreation Zones",
      "Modern Amphitheater for Events & Presentations",
      "Visitor & Employee Parking",
    ],
    zoning: "SEZ/IT Park",
    yearBuilt: 2017,
    parkingSpaces: 300,
    availability: "leased",
    listingDate: "2024-01-05",
    agent: {
      name: "Omkar Jadhav",
      phone: "+91 98200 98200",
      email: "omkar.jadhav@earthwellrealty.in",
      img: omkar,
    },
    financials: {
      capRate: 8.0,
      noi: 54400000,
      grossIncome: 69000000,
      expenses: 14600000,
    },
    tenants: [{ name: "Infosys Limited", leaseEnd: "2031-03-31", sqft: 90000 }],
    likes: 554,
    interested: 432,
  },
  {
    id: "prop-112",
    title: "Jaipur Showroom and Warehouse",
    type: "retail",
    category : "residential",
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
      "A highly versatile property combining a spacious retail showroom on the ground floor with integrated warehousing space at the rear, perfectly located on the bustling Tonk Road in Jaipur. This unique offering provides main road frontage for maximum retail visibility, coupled with convenient, separate access for warehouse operations and efficient logistics. Ideal for businesses in the automotive, furniture, electronics, or large format retail sectors that require both a prominent customer-facing presence and substantial back-end storage and distribution capabilities. Capitalize on high traffic and strategic access.",
    features: [
      "Exceptional Main Road Frontage on Tonk Road",
      "High Visibility for Retail Operations",
      "Separate Access Points for Showroom & Warehouse",
      "Dedicated Goods Lift",
      "Spacious Layout for Product Display & Storage",
      "Modern Construction",
    ],
    amenities: [
      "Ample Customer Parking Area",
      "Dedicated Staff Area & Facilities",
      "Efficient Loading/Unloading Bay",
      "Integrated Office Space",
      "24/7 Security Provisions",
    ],
    zoning: "Commercial",
    yearBuilt: 2019,
    parkingSpaces: 50,
    availability: "available",
    listingDate: "2024-02-28",
    agent: {
      name: "Omkar Jadhav",
      phone: "+91 98200 98200",
      email: "omkar.jadhav@earthwellrealty.in",
      img: omkar,
    },
    financials: {
      capRate: 7.6,
      noi: 19000000,
      grossIncome: 24000000,
      expenses: 5000000,
    },
    likes: 231,
    interested: 150,
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
