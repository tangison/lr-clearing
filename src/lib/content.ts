/**
 * L&R Clearing Agency CC. Central content registry.
 * Single source of truth for all copy across the site.
 * Aligns with the official Company Profile supplied by the client.
 * No invented facts (no founding year, no fake client names, no fake metrics).
 */

export const company = {
  legalName: "L&R Clearing Agency CC",
  tradingName: "L&R Clearing Agency CC",
  tagline: "Your Trusted Partner in Customs Clearing, Freight Forwarding and Logistics Solutions.",
  shortTagline: "Customs Clearing, Freight Forwarding & Logistics Solutions",
  country: "Namibia",
  regions: ["Namibia", "Southern Africa"],
  registration: "CC/2012/1572",
  vat: "05757590615",
  email: "hello@lrclearing.com",
  altEmail: "ops.clearing@gmail.com",
  phone: "+264 83 785 7640",
  phoneDisplay: "+264 83 785 7640",
  officeHours: "07:30 to 17:00, Monday to Friday",
  whatsapp: "264813759901",
  address: {
    line1: "Cnr 10th Road & Sam Nujoma Ave",
    city: "Walvis Bay",
    country: "Namibia",
  },
  ports: ["Walvis Bay", "Lüderitz"],
  social: {
    whatsapp: "https://wa.me/264813759901",
  },
} as const;

export const about = {
  title: "About Us",
  intro:
    "L&R Clearing Agency CC is a proudly Namibian-owned customs clearing and forwarding company committed to delivering professional, efficient, and reliable logistics solutions to businesses and individuals involved in international trade.",
  body: [
    "We specialize in customs clearance, freight forwarding, cargo coordination, and supply chain support, ensuring that goods move seamlessly through ports, border posts, and various transport networks. Our objective is to simplify the import and export process while ensuring full compliance with Namibian and regional customs regulations.",
    "Through a customer-focused approach and a commitment to excellence, L&R Clearing Agency CC strives to become a trusted logistics partner within Namibia, Southern Africa, and beyond. Our team combines operational discipline with deep regulatory knowledge, allowing clients to navigate complex cross-border trade requirements with confidence.",
    "Our operational footprint covers both major Namibian ports (Walvis Bay and Lüderitz), as well as key border posts connecting Namibia to Angola, Zambia, Zimbabwe, Botswana, and South Africa. We coordinate with shipping lines, airlines, road haulers, port authorities, and customs officials to deliver end-to-end cargo visibility and timely clearance.",
  ],
};

export const vision = {
  title: "Vision",
  statement:
    "To be the preferred customs clearing and logistics partner in Namibia and the Southern African region by providing world-class, efficient, and innovative supply chain solutions.",
};

export const mission = {
  title: "Mission",
  statement:
    "To provide professional customs clearing and freight forwarding services that ensure timely cargo movement, regulatory compliance, and exceptional customer satisfaction.",
};

export const coreValues = [
  {
    name: "Integrity",
    description: "We conduct business with honesty, transparency, and professionalism.",
  },
  {
    name: "Excellence",
    description: "We are committed to delivering high-quality services that exceed customer expectations.",
  },
  {
    name: "Reliability",
    description: "We provide dependable solutions that customers can trust.",
  },
  {
    name: "Efficiency",
    description: "We strive to minimize delays and optimize the movement of cargo.",
  },
  {
    name: "Customer Focus",
    description: "We place our clients' needs at the center of everything we do.",
  },
  {
    name: "Compliance",
    description: "We uphold all customs, port, and international trade regulations.",
  },
];

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  items: string[];
  icon: "customs" | "freight" | "port" | "documents" | "cargo" | "logistics" | "specialized";
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "customs-clearing",
    number: "01",
    title: "Customs Clearing Services",
    shortDescription:
      "Full import, export, transit, and bonded cargo clearance through Namibian and regional customs.",
    longDescription:
      "Our licensed customs clearing agents handle every aspect of customs formalities on behalf of importers and exporters. From tariff classification to duty calculation and final release, we ensure each declaration is accurate, compliant, and submitted within the shortest possible timeframe. We act as the direct liaison between our clients and the Namibian Customs and Excise division, managing queries, queries, inspections, and assessments so that cargo is released without unnecessary delay.",
    items: [
      "Import customs clearance",
      "Export customs clearance",
      "Temporary import and export permits",
      "Bonded cargo processing",
      "Transit documentation",
      "Customs tariff classification",
      "Customs valuation assistance",
      "Duty and tax calculation",
      "Customs consultancy and advisory services",
    ],
    icon: "customs",
    image: "/images/services/customs-clearing.jpeg",
    imageAlt: "Customs officer inspecting cargo documents at a border crossing",
  },
  {
    slug: "freight-forwarding",
    number: "02",
    title: "Freight Forwarding Services",
    shortDescription:
      "Sea, air, and road freight coordination across Namibia, SADC, and global trade lanes.",
    longDescription:
      "We plan, book, and coordinate the movement of cargo by sea, air, and road, selecting the most efficient mode (or combination of modes) for each shipment. Our forwarding desk works with established carriers, shipping lines, and airlines to secure space, negotiate rates, and manage the documentation required at each leg of the journey. Cross-border road freight is a particular strength, given Namibia's strategic position linking Atlantic ports with SADC inland markets.",
    items: [
      "Sea freight forwarding (FCL & LCL)",
      "Air freight forwarding",
      "Road freight coordination",
      "Cross-border logistics",
      "Multimodal transportation solutions",
      "Door-to-door delivery coordination",
    ],
    icon: "freight",
    image: "/images/services/freight-forwarding.jpeg",
    imageAlt: "Container ship being loaded at a port terminal",
  },
  {
    slug: "port-and-border-operations",
    number: "03",
    title: "Port & Border Operations",
    shortDescription:
      "On-the-ground clearance at Walvis Bay, Lüderitz, and major Southern African border posts.",
    longDescription:
      "Our port and border teams are physically present where it matters: at Walvis Bay Port, Lüderitz Port, and at the border posts connecting Namibia to its neighbours. We coordinate container releases, terminal handling, port health and agriculture inspections, and the multi-step release process that follows customs clearance. For cross-border traffic, we manage the documentation handover between clearing agents on either side of the border to keep transit times predictable.",
    items: [
      "Walvis Bay Port cargo clearance",
      "Lüderitz Port cargo clearance",
      "Border post documentation and processing",
      "Port release coordination",
      "Container movement coordination",
    ],
    icon: "port",
    image: "/images/services/walvis-bay-port.jpeg",
    imageAlt: "Aerial view of Walvis Bay port container terminal",
  },
  {
    slug: "import-export-documentation",
    number: "04",
    title: "Import & Export Documentation",
    shortDescription:
      "Accurate preparation, verification, and submission of all SARS/SAD and supporting trade documents.",
    longDescription:
      "Correct documentation is the foundation of a smooth clearance. Our documentation desk prepares and verifies every document required by Namibian Customs, port authorities, and destination countries. We check commercial invoices, packing lists, certificates of origin, permits, and shipping documents for consistency before submission, because a single mismatched figure can hold cargo for days. We also assist clients in applying for the permits and licences relevant to their commodity.",
    items: [
      "Bills of Entry",
      "Commercial invoices verification",
      "Packing lists processing",
      "Certificates of origin",
      "Permits and licenses assistance",
      "SAD documentation",
      "Shipping and transport documentation",
    ],
    icon: "documents",
    image: "/images/scenes/customs-2.jpeg",
    imageAlt: "Customs documentation review at a border post",
  },
  {
    slug: "cargo-management",
    number: "05",
    title: "Cargo Management",
    shortDescription:
      "End-to-end cargo tracking, status updates, and release coordination for every shipment.",
    longDescription:
      "Once a shipment is in motion, our cargo management service keeps it visible. We monitor container movements, terminal status, customs progress, and carrier ETAs, then relay concise updates to clients at each milestone. When exceptions arise (a customs hold, a port congestion delay, a missed connection), we flag them immediately and propose a corrective action rather than waiting for the client to ask.",
    items: [
      "Cargo tracking and monitoring",
      "Shipment status updates",
      "Container coordination",
      "Delivery scheduling",
      "Cargo release arrangements",
    ],
    icon: "cargo",
    image: "/images/scenes/cargo-ship-2.jpeg",
    imageAlt: "Cargo ship docked at container terminal",
  },
  {
    slug: "supply-chain-solutions",
    number: "06",
    title: "Logistics & Supply Chain Solutions",
    shortDescription:
      "Coordination, consolidation, warehousing, and 3PL support across the supply chain.",
    longDescription:
      "For clients who need more than point-to-point movement, we offer broader supply chain coordination. This includes cargo consolidation (combining multiple LCL shipments into a single FCL for cost efficiency), warehousing coordination through trusted partners, and third-party logistics (3PL) support where we take operational ownership of part or all of a client's inbound or outbound flow. The goal is a measurable reduction in lead time, cost, and administrative overhead.",
    items: [
      "Supply chain coordination",
      "Distribution support",
      "Cargo consolidation",
      "Warehousing coordination",
      "Third-party logistics (3PL) support",
    ],
    icon: "logistics",
    image: "/images/services/warehouse.jpeg",
    imageAlt: "Warehouse interior with storage racks at a distribution center",
  },
  {
    slug: "specialized-services",
    number: "07",
    title: "Specialized Services",
    shortDescription:
      "Project cargo, mining, agriculture, vehicles, abnormal loads, and dangerous goods documentation.",
    longDescription:
      "Some shipments fall outside standard clearance patterns. Our specialized desk handles project cargo for mining and industrial sites, agricultural product logistics (including permits and phytosanitary requirements), household and personal effects clearance, vehicle imports and exports, dangerous goods documentation assistance, and oversized or abnormal cargo coordination. Each of these requires a different regulatory path, and we know which path to take.",
    items: [
      "Project cargo coordination",
      "Mining and industrial shipments",
      "Agricultural products logistics",
      "Household and personal effects clearance",
      "Vehicle imports and exports",
      "Dangerous goods documentation assistance",
      "Oversized and abnormal cargo coordination",
    ],
    icon: "specialized",
    image: "/images/scenes/truck-highway.jpeg",
    imageAlt: "Long-haul truck on highway carrying specialized cargo",
  },
];

export const industries = [
  {
    name: "Mining Industry",
    description:
      "Import of heavy machinery, explosives precursors, reagents, and consumables for Namibia's uranium, gold, zinc, and diamond operations; export of mineral concentrates.",
    icon: "mining",
    image: "/images/industries/mining.jpeg",
    imageAlt: "Mining dump truck operating in an open-pit mine",
  },
  {
    name: "Agriculture Sector",
    description:
      "Export of beef, grapes, dates, and other primary produce; import of farming equipment, fertilizers, and agrochemicals with full phytosanitary and permit support.",
    icon: "agriculture",
    image: "/images/industries/agriculture.jpeg",
    imageAlt: "Agricultural grape vineyard at harvest time",
  },
  {
    name: "Manufacturing Industry",
    description:
      "Inbound raw materials and outbound finished goods, with bonded warehouse arrangements and drawback claims where applicable.",
    icon: "manufacturing",
    image: "/images/industries/manufacturing.jpeg",
    imageAlt: "Factory manufacturing production line",
  },
  {
    name: "Construction Sector",
    description:
      "Clearance of structural steel, cement, roofing materials, and project equipment for civil and building contractors across Namibia.",
    icon: "construction",
    image: "/images/industries/construction.jpeg",
    imageAlt: "Construction site with building materials and crane",
  },
  {
    name: "Retail & Wholesale Businesses",
    description:
      "High-volume containerized imports of consumer goods through Walvis Bay, with consolidation and distribution support to inland distribution centres.",
    icon: "retail",
    image: "/images/scenes/warehouse-wide.jpeg",
    imageAlt: "Warehouse distribution center with storage racks",
  },
  {
    name: "Automotive Industry",
    description:
      "Vehicle imports (new and used), spare parts, and the specific clearance regime that applies to used vehicle imports into Namibia.",
    icon: "automotive",
    image: "/images/scenes/truck-highway.jpeg",
    imageAlt: "Vehicles being transported by long-haul truck",
  },
  {
    name: "Fisheries Sector",
    description:
      "Export of fresh and frozen fish and fishmeal through Lüderitz and Walvis Bay, including cold-chain coordination and health certificate verification.",
    icon: "fisheries",
    image: "/images/industries/fisheries.jpeg",
    imageAlt: "Fishing trawler vessel at port",
  },
  {
    name: "Oil & Gas Industry",
    description:
      "Support for exploration and production campaigns, including temporary imports of drilling equipment and dangerous goods documentation.",
    icon: "oilgas",
    image: "/images/scenes/port-sunset.jpeg",
    imageAlt: "Industrial port operations at sunset",
  },
  {
    name: "General Trading Companies",
    description:
      "Routine import/export clearance for traders across all commodity categories, with competitive per-line pricing.",
    icon: "trading",
    image: "/images/scenes/port-wide.jpeg",
    imageAlt: "Wide view of commercial port operations",
  },
  {
    name: "Small & Medium Enterprises (SMEs)",
    description:
      "Accessible, advisory-led clearance for first-time importers and growing SMEs, with plain-language explanations of every step.",
    icon: "sme",
    image: "/images/scenes/port-aerial.jpeg",
    imageAlt: "Aerial view of port logistics infrastructure",
  },
];

export const competitiveAdvantages = [
  "Professional and responsive service",
  "Strong understanding of customs regulations",
  "Efficient cargo processing",
  "Customer-focused approach",
  "Competitive and cost-effective solutions",
  "Commitment to compliance and excellence",
  "Reliable communication and shipment updates",
];

export const commitment = {
  title: "Our Commitment",
  body: "At L&R Clearing Agency CC, we are committed to facilitating trade by providing dependable customs clearing and forwarding services that enable our clients to focus on growing their businesses. We aim to build long-term relationships founded on trust, professionalism, and exceptional service delivery.",
};

export const healthSafety = {
  title: "Health, Safety & Compliance",
  body: "L&R Clearing Agency CC is committed to maintaining the highest standards of safety, ethical conduct, and regulatory compliance. We adhere to applicable customs laws, port regulations, and international trade requirements to ensure secure and responsible cargo handling.",
};

export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqCategories = [
  "Customs Clearance",
  "Freight Forwarding",
  "Imports",
  "Exports",
  "Documentation",
  "Logistics",
  "Vehicle Imports",
  "Port Operations",
] as const;

export const faqs: FAQItem[] = [
  {
    category: "Customs Clearance",
    question: "What documents do I need to import goods into Namibia?",
    answer:
      "For a standard commercial import you will need a commercial invoice, packing list, bill of lading or airway bill, SAD 500 declaration, and any commodity-specific permits (e.g. SABS letter of authority, phytosanitary certificate, or radio communication licence). We will review your documents for consistency before submission and advise on any missing items.",
  },
  {
    category: "Customs Clearance",
    question: "How long does customs clearance take in Namibia?",
    answer:
      "A straightforward, fully-documented clearance at Walvis Bay or Lüderitz typically completes within 24–48 hours of arrival, provided no inspection or query is raised. Transit cargo and shipments requiring permits may take longer. We monitor each file daily and escalate delays immediately.",
  },
  {
    category: "Customs Clearance",
    question: "What is a Bill of Entry and why is it required?",
    answer:
      "A Bill of Entry (in Namibia, the SAD 500 declaration) is the official document submitted to Customs declaring the nature, value, origin, and tariff classification of imported or exported goods. It is the legal basis on which duty and VAT are assessed and the cargo is released.",
  },
  {
    category: "Freight Forwarding",
    question: "What is the difference between FCL and LCL sea freight?",
    answer:
      "FCL (Full Container Load) means your cargo fills an entire container and you pay a flat rate per container. LCL (Less than Container Load) means your cargo shares a container with other shippers and you pay per cubic metre or tonne, whichever is greater. FCL is more cost-effective above ~15 CBM; LCL suits smaller consignments.",
  },
  {
    category: "Freight Forwarding",
    question: "Can you arrange door-to-door delivery?",
    answer:
      "Yes. We coordinate door-to-door delivery across Namibia and the wider SADC region by combining sea, air, and road legs. We will quote an all-in rate covering origin handling, freight, destination clearance, and final delivery, or itemise each leg if you prefer.",
  },
  {
    category: "Freight Forwarding",
    question: "Which ports do you operate through?",
    answer:
      "We clear cargo through both Namibian ports (Walvis Bay and Lüderitz), and arrange cross-border road freight via the major border posts (Ariamsveld, Noordoewer, Ngoma, Katima Mulilo, Oshikango, Trans-Kalahari) into South Africa, Botswana, Zambia, Zimbabwe, and beyond.",
  },
  {
    category: "Imports",
    question: "How are import duty and VAT calculated in Namibia?",
    answer:
      "Import duty is calculated as a percentage of the customs value (usually CIF) using the tariff rate for the relevant HS code. VAT is charged at 15% on the sum of customs value + duty + any excise. Some goods qualify for SACU preferential rates or specific rebates. We will calculate the exact liability before submission so there are no surprises.",
  },
  {
    category: "Imports",
    question: "Can you handle temporary imports?",
    answer:
      "Yes. We process temporary import permits for equipment, exhibition goods, and project cargo, and arrange the relevant carnets or rebate provisions so that duty is suspended or refunded on re-export. This is common for mining exploration equipment and construction plant.",
  },
  {
    category: "Exports",
    question: "What is a Certificate of Origin and when do I need one?",
    answer:
      "A Certificate of Origin (COO) declares the country in which your goods were produced. It is required when your buyer claims preferential tariff treatment under SADC, COMESA, or other trade agreements, and may be required by the importing country even where no preference applies. We arrange COOs through the Namibia Chamber of Commerce and Industry on your behalf.",
  },
  {
    category: "Exports",
    question: "Do you handle exports of perishable goods?",
    answer:
      "Yes. We coordinate cold-chain exports of fish, meat, grapes, and other perishables through Walvis Bay and Lüderitz, including booking reefer containers, arranging pre-cooling, and verifying health and phytosanitary certificates prior to loading.",
  },
  {
    category: "Documentation",
    question: "What is SAD documentation?",
    answer:
      "SAD stands for Single Administrative Document: the standard customs declaration form used across SACU member states. In Namibia it is the SAD 500 for imports and SAD 504 for exports. We complete and submit these declarations electronically via ASYCUDA World on your behalf.",
  },
  {
    category: "Documentation",
    question: "What happens if my documents contain an error?",
    answer:
      "Errors are corrected through a customs amendment process (VOC (Voluntary Disclosure) or a formal SAD 500 amendment, depending on timing and severity). Minor clerical errors are routinely corrected post-release; material errors affecting value or tariff must be disclosed to avoid penalty. We handle the entire correction process for you.",
  },
  {
    category: "Logistics",
    question: "Can you arrange warehousing or storage?",
    answer:
      "Yes, through trusted partners at Walvis Bay, Lüderitz, and inland locations including Windhoek. We can arrange bonded storage (where duty is suspended until release), general warehousing, and cross-docking for time-critical distribution.",
  },
  {
    category: "Logistics",
    question: "Do you offer cargo consolidation?",
    answer:
      "Yes. We consolidate multiple LCL shipments from different suppliers into a single FCL to reduce per-unit freight cost. This is particularly valuable for retail and trading clients sourcing from multiple origins in Asia or Europe.",
  },
  {
    category: "Vehicle Imports",
    question: "What rules apply to importing a used vehicle into Namibia?",
    answer:
      "Used vehicle imports are subject to specific permit requirements, roadworthiness inspection, and the standard customs duty plus VAT on the customs value. We handle the import permit, clearance, and coordination with the relevant testing station. Bring your export documentation, vehicle registration, and purchase invoice, and we will guide you through the rest.",
  },
  {
    category: "Vehicle Imports",
    question: "Can you arrange vehicle exports from Namibia?",
    answer:
      "Yes. We handle export declarations, port handling, and roll-on/roll-off or container booking for vehicles being exported from Namibia to SADC destinations or overseas markets. We also coordinate with the buyer's clearing agent at destination.",
  },
  {
    category: "Port Operations",
    question: "What is the difference between port release and customs release?",
    answer:
      "Customs release means the SAD 500 has been assessed and duties paid, and Customs has authorised release of the cargo. Port release means the terminal operator has released the container against payment of THC, storage, and other port charges, and it can be collected. Both are required before a container can leave the port.",
  },
  {
    category: "Port Operations",
    question: "How do I avoid port storage charges?",
    answer:
      "Submit complete and accurate documents at least 48 hours before vessel arrival, ensure duties are paid promptly on assessment, and arrange transport as soon as the container is releasable. We monitor these milestones daily and will alert you the moment action is required from your side.",
  },
];

export const stats = [
  { value: "2", label: "Namibian Ports Served", suffix: "" },
  { value: "5", label: "Major Border Posts Covered", suffix: "+" },
  { value: "7", label: "Service Categories", suffix: "" },
  { value: "10", label: "Industries Served", suffix: "" },
];

export type TeamMember = {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  phone: string;
  whatsapp: string;
  email: string;
  image: string;
  imageAlt: string;
};

export const team: TeamMember[] = [
  {
    name: "Linus Sibungo",
    title: "Founder & Managing Director",
    credentials: "PhD, Transportation & Logistics Management",
    bio: "Linus founded L&R Clearing Agency CC with a vision to build a world-class, proudly Namibian customs clearing and freight forwarding company. With a doctorate in Transportation & Logistics Management and years of hands-on experience at Namibia's ports and border posts, he leads the company's operations, strategic growth, and international partnerships.",
    phone: "+264 83 785 7640",
    whatsapp: "+264 81 375 9901",
    email: "hello@lrclearing.com",
    image: "/images/team/linus-sibungo.jpeg",
    imageAlt: "Linus Sibungo, Founder & Managing Director of L&R Clearing Agency CC",
  },
  {
    name: "Patience Sibungo",
    title: "Admin & Finance Director",
    credentials: "",
    bio: "Patience oversees the financial health, administrative operations, and compliance framework of L&R Clearing Agency CC. Her meticulous approach to financial management and client administration ensures that every shipment is handled with full accountability and transparency from first contact through to final delivery.",
    phone: "+264 81 842 5922",
    whatsapp: "+264 81 842 5922",
    email: "hello@lrclearing.com",
    image: "/images/team/patience-sibungo.jpeg",
    imageAlt: "Patience Sibungo, Admin & Finance Director of L&R Clearing Agency CC",
  },
];

// TODO: source a real construction.jpeg. The current placeholder remains on the
// Construction industry card only. All other industry/scene/service images
// have been replaced with client-supplied Namibia-authentic photos (2026-06-26).

/**
 * Instant Quote pricing.
 *
 * Flat-fee customs clearing for the most common vehicle and equipment
 * movements across SACU and SADC lanes. Sourced directly from the client
 * (L&R Clearing Agency CC, 2026-06-27). All prices are in Namibian Dollars
 * (N$), pegged 1:1 to the South African Rand, and represent the clearing
 * agent fee only. Duties, VAT, port charges, and transport are billed
 * separately at cost.
 *
 * For lanes marked as "quote on request" (Japan/UK imports, project cargo),
 * the ops manager prepares a detailed quote based on vehicle type, origin
 * port, and any applicable permits.
 */
export type InstantQuote = {
  slug: string;
  category: "Vehicles" | "Commercial & Mining Equipment";
  title: string;
  jurisdiction: string;
  direction: "Import" | "Export" | "Import & Export";
  priceNad: number | null; // null = quote on request
  priceLabel: string; // formatted display
  notes?: string;
  whatsappPrefill: string; // pre-filled WhatsApp message
};

const WA_BASE = "https://wa.me/264813759901?text=";

export const instantQuotes: InstantQuote[] = [
  {
    slug: "namibia-namra-vehicle-import",
    category: "Vehicles",
    title: "Namibia NAMRA Vehicle Import Clearance",
    jurisdiction: "Namibia (NAMRA)",
    direction: "Import",
    priceNad: 3500,
    priceLabel: "N$ 3,500",
    notes:
      "Covers SAD 500 submission, duty/VAT calculation, and coordination with the testing station for used vehicle imports.",
    whatsappPrefill:
      WA_BASE +
      encodeURIComponent(
        "Hi L&R Clearing, I would like to book a Namibia NAMRA vehicle import clearance (N$ 3,500). Vehicle details:"
      ),
  },
  {
    slug: "namibia-namra-vehicle-export",
    category: "Vehicles",
    title: "Namibia NAMRA Vehicle Export Clearance",
    jurisdiction: "Namibia (NAMRA)",
    direction: "Export",
    priceNad: 2500,
    priceLabel: "N$ 2,500",
    notes:
      "Covers SAD 504 export declaration, port handling coordination, and RORO or container booking.",
    whatsappPrefill:
      WA_BASE +
      encodeURIComponent(
        "Hi L&R Clearing, I would like to book a Namibia NAMRA vehicle export clearance (N$ 2,500). Vehicle details:"
      ),
  },
  {
    slug: "south-africa-sars-vehicle-import",
    category: "Vehicles",
    title: "South Africa SARS Vehicle Import Clearance",
    jurisdiction: "South Africa (SARS)",
    direction: "Import",
    priceNad: 4500,
    priceLabel: "N$ 4,500",
    notes:
      "Covers SARS clearance for vehicles imported into South Africa via the relevant border post.",
    whatsappPrefill:
      WA_BASE +
      encodeURIComponent(
        "Hi L&R Clearing, I would like to book a South Africa SARS vehicle import clearance (N$ 4,500). Vehicle details:"
      ),
  },
  {
    slug: "south-africa-sars-vehicle-export",
    category: "Vehicles",
    title: "South Africa SARS Vehicle Export Clearance",
    jurisdiction: "South Africa (SARS)",
    direction: "Export",
    priceNad: 2500,
    priceLabel: "N$ 2,500",
    notes:
      "Covers SARS export declaration and border-side documentation handover.",
    whatsappPrefill:
      WA_BASE +
      encodeURIComponent(
        "Hi L&R Clearing, I would like to book a South Africa SARS vehicle export clearance (N$ 2,500). Vehicle details:"
      ),
  },
  {
    slug: "commercial-mining-equipment-namibia",
    category: "Commercial & Mining Equipment",
    title: "Commercial & Mining Equipment Clearance (Namibia)",
    jurisdiction: "Namibia",
    direction: "Import & Export",
    priceNad: 4500,
    priceLabel: "N$ 4,500",
    notes:
      "Flat fee for clearing heavy machinery, mining equipment, and commercial vehicles through Walvis Bay or Lüderitz.",
    whatsappPrefill:
      WA_BASE +
      encodeURIComponent(
        "Hi L&R Clearing, I would like to book a commercial & mining equipment clearance for Namibia (N$ 4,500). Equipment details:"
      ),
  },
  {
    slug: "commercial-mining-equipment-south-africa",
    category: "Commercial & Mining Equipment",
    title: "Commercial & Mining Equipment Clearance (South Africa)",
    jurisdiction: "South Africa",
    direction: "Import & Export",
    priceNad: 4500,
    priceLabel: "N$ 4,500",
    notes:
      "Flat fee for clearing heavy machinery, mining equipment, and commercial vehicles through South African border posts.",
    whatsappPrefill:
      WA_BASE +
      encodeURIComponent(
        "Hi L&R Clearing, I would like to book a commercial & mining equipment clearance for South Africa (N$ 4,500). Equipment details:"
      ),
  },
  {
    slug: "imported-vehicles-japan-uk",
    category: "Vehicles",
    title: "Imported Vehicles from Japan & UK",
    jurisdiction: "Namibia & South Africa",
    direction: "Import",
    priceNad: null,
    priceLabel: "Quote on request",
    notes:
      "Pricing depends on vehicle type, origin port (Japan or UK), and destination. Contact the ops manager for a detailed quote including freight, duty estimate, and permit requirements.",
    whatsappPrefill:
      WA_BASE +
      encodeURIComponent(
        "Hi L&R Clearing, I would like a detailed quote for importing a vehicle from Japan/UK. Vehicle details, origin port, and destination:"
      ),
  },
];

export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Industries", href: "/industries" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: services.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Vision & Mission", href: "/about/vision-mission" },
    { label: "Core Values", href: "/about/core-values" },
    { label: "Why Choose Us", href: "/about/why-choose-us" },
    { label: "Operational Coverage", href: "/about/operational-coverage" },
  ],
  compliance: [
    { label: "Health & Safety", href: "/compliance/health-safety" },
    { label: "Compliance & Regulations", href: "/compliance/regulations" },
    { label: "Customs Advisory", href: "/compliance/customs-advisory" },
    { label: "Risk Management", href: "/compliance/risk-management" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};
