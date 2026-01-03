export const caseStudies = [
  {
    main_image_src: "",
    project_title: "Privacy-first AI operational in airplane mode.",
    logo_src: "",
    description: "Differentiation through privacy-first AI, extended battery life, and offline capability. Devices operate in airplane mode while maintaining full AI functionality.",
    features: [
      "Personal assistants without internet dependency",
      "Offline translation & creative writing assistance",
      "Privacy-first journaling & knowledge management",
    ],
    case_study_link: "#",
    name: "Consumer Electronics",
    demo_images: [],
    test_img: "",
    testimonial: `"The offline capability allowed us to ship a voice assistant that actually works on hikes and flights. Game changer."`,
    founder_name: "Hardware OEM Partner",
    position: "VP Product",
  },
  {
    main_image_src: "",
    project_title: "Real-time decision making without cloud latency.",
    logo_src: "",
    description: "Real-time decision-making without network dependency and intellectual property protection. Factory data never leaves the premises.",
    features: [
      "Anomaly detection identifying defects in real-time",
      "Predictive maintenance analyzing vibration & acoustics",
      "Reduced downtime through immediate edge inference",
    ],
    case_study_link: "#",
    name: "Industrial IoT",
    demo_images: [],
    test_img: "",
    testimonial: `"Our factory floor data is too sensitive for the cloud. Zevion's edge architecture gave us the intelligence we needed without the risk."`,
    founder_name: "Manufacturing Lead",
    position: "Operations Director",
  },
  {
    main_image_src: "",
    project_title: "Zero-latency autonomy for GPS-denied environments.",
    logo_src: "",
    description: "Zero-latency autonomy enabling immediate sensor-to-action loops. Operation in GPS-denied or network-denied environments.",
    features: [
      "Navigation in dynamic, unconnected environments",
      "Split-second sensor fusion and decision making",
      "Reduced dependency on expensive cloud connectivity",
    ],
    case_study_link: "#",
    name: "Robotics",
    demo_images: [],
    test_img: "",
    testimonial: `"Latency kills robots. processing everything on-device meant our drones could fly faster and safer than ever before."`,
    founder_name: "Robotics Startup",
    position: "CTO",
  },
  {
    main_image_src: "",
    project_title: "HIPAA-compliant local diagnostic assistance.",
    logo_src: "",
    description: "HIPAA compliance through local data processing. Diagnostic assistance without patient data transmission.",
    features: [
      "Real-time patient monitoring with local alerts",
      "Portable diagnostic tools for remote areas",
      "Complete patient data privacy",
    ],
    case_study_link: "#",
    name: "Healthcare",
    demo_images: [],
    test_img: "",
    testimonial: `"We can finally deploy AI diagnostics in rural clinics with spotty internet, saving lives where cloud AI couldn't reach."`,
    founder_name: "MedTech Innovator",
    position: "Head of R&D",
  },
  {
    main_image_src: "",
    project_title: "Mission-critical intelligence for air-gapped systems.",
    logo_src: "",
    description: "Mandatory offline operation for security and air-gapped environments. No cloud dependency eliminates external vulnerabilities.",
    features: [
      "Secure decision support in field operations",
      "Infrastructure monitoring (grids, water, transport)",
      "Air-gapped compatibility",
    ],
    case_study_link: "#",
    name: "Defense",
    demo_images: [],
    test_img: "",
    testimonial: `"Security is non-negotiable. Zevion's firmware-level AI gave us the capability we needed without opening a single network port."`,
    founder_name: "Defense Contractor",
    position: "Systems Architect",
  },
  {
    main_image_src: "",
    project_title: "In-vehicle intelligence without cellular dead zones.",
    logo_src: "",
    description: "In-vehicle intelligence without cellular dead zones. Predictive maintenance and driver monitoring.",
    features: [
      "Driver attention monitoring & safety alerts",
      "Predictive fleet maintenance",
      "In-cabin voice assistants that work everywhere",
    ],
    case_study_link: "#",
    name: "Automotive",
    demo_images: [],
    test_img: "",
    testimonial: `"Our drivers rely on these systems in remote routes. Cloud-dependent AI was simply not an option."`,
    founder_name: "Fleet Operator",
    position: "Technical Director",
  },
];

export interface CaseStudyType {
  main_image_src: string;
  project_title: string;
  logo_src: string;
  description: string;
  features: string[];
  case_study_link: string;
  name: string;
  demo_images: string[];
  project_link?: string | null;
  cta_links?: {
    "let's talk": string;
    "read case study": string;
  };
  test_img?: string;
  testimonial?: string;
  founder_name?: string;
  position?: string;
}
