import prj from "../assets/prj.jpeg";
import prj1 from "../assets/prj1.jpeg";
import project1 from "../assets/project-11.jpg";
import project2 from "../assets/project-10.jpg";
import project3 from "../assets/project-9.jpg";

import gallery1 from "../assets/project-11.jpg";
import gallery2 from "../assets/project-10.jpg";
import gallery3 from "../assets/project-9.jpg";
import gallery4 from "../assets/project-11.jpg";
import gallery5 from "../assets/project-9.jpg";

export const projects = [
  {
    id: 1,
    title: "Land Minning",
    client: "RRS Company",
    location: "San Francisco",
    area: "550,000 sf",
    year: 2019,
    budget: "$245,000,000",
    architect: "Scott & Austin",
    sector: "Tunnel, Transport",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem? Modi cum fugit officia dolores eligendi, rem. Quibusdam quas impedit perspiciatis iure maiores.",
    mainImage: project1,
    gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
    isLatest: false,
  },
  {
    id: 2,
    title: "Work Management",
    client: "Delta Group",
    location: "Lagos, Nigeria",
    area: "320,000 sf",
    year: 2021,
    budget: "$180,000,000",
    architect: "Miller & James",
    sector: "Corporate, ICT",
    description:
      "Sustainable workspaces designed to improve collaboration and efficiency across departments, featuring modern infrastructure and flexible layouts for future expansions.",
    mainImage: project2,
    gallery: [gallery2, gallery3, gallery4, gallery5, gallery1],
    isLatest: false,
  },
  {
    id: 3,
    title: "Material Engineering",
    client: "Zenith Materials Ltd",
    location: "Houston, USA",
    area: "410,000 sf",
    year: 2018,
    budget: "$220,000,000",
    architect: "Brown & Partners",
    sector: "Industrial, R&D",
    description:
      "A world-class facility focused on advanced material research and engineering, enabling new technologies that drive innovation in aerospace and automotive industries.",
    mainImage: project3,
    gallery: [gallery3, gallery1, gallery2, gallery5, gallery4],
    isLatest: false,
  },
  {
    id: 4,
    title: "Power and Energy",
    client: "EcoEnergy Corp",
    location: "Cape Town, South Africa",
    area: "600,000 sf",
    year: 2020,
    budget: "$300,000,000",
    architect: "Green Solutions",
    sector: "Energy, Utilities",
    description:
      "Development of renewable energy infrastructure with a focus on wind and solar integration, designed to reduce carbon emissions and power thousands of homes sustainably.",
    mainImage: project1,
    gallery: [gallery1, gallery4, gallery2, gallery3, gallery5],
    isLatest: false,
  },
  {
    id: 5,
    title: "Land Minning",
    client: "Pacific Minerals",
    location: "Perth, Australia",
    area: "700,000 sf",
    year: 2017,
    budget: "$280,000,000",
    architect: "Stone & Build",
    sector: "Mining, Industrial",
    description:
      "Large-scale mining project focused on resource extraction with sustainable practices, balancing industrial growth while maintaining environmental responsibility.",
    mainImage: project3,
    gallery: [gallery5, gallery3, gallery1, gallery4, gallery2],
    isLatest: false,
  },
  {
    id: 6,
    title: "Work Management",
    client: "Skyline Builders",
    location: "Dubai, UAE",
    area: "450,000 sf",
    year: 2022,
    budget: "$260,000,000",
    architect: "Modern Edge",
    sector: "Corporate, High-rise",
    description:
      "Innovative office tower designed with smart building technology and green certification, creating a modern landmark for corporate headquarters.",
    mainImage: project2,
    gallery: [gallery2, gallery1, gallery3, gallery5, gallery4],
    isLatest: false,
  },
  {
    id: 7,
    title: "Material Engineering",
    client: "CoreTech Industries",
    location: "Berlin, Germany",
    area: "380,000 sf",
    year: 2021,
    budget: "$210,000,000",
    architect: "FutureBuild GmbH",
    sector: "Industrial, R&D",
    description:
      "Cutting-edge research facility specializing in lightweight composites and sustainable materials, supporting Europe’s growing manufacturing sector.",
    mainImage: project3,
    gallery: [gallery3, gallery5, gallery1, gallery4, gallery2],
    isLatest: false,
  },
  {
    id: 8,
    title: "Power and Energy",
    client: "SolarNext",
    location: "Madrid, Spain",
    area: "500,000 sf",
    year: 2019,
    budget: "$275,000,000",
    architect: "SunTech Architects",
    sector: "Energy, Renewables",
    description:
      "A solar farm development project delivering sustainable electricity to urban and rural areas, pushing forward Spain’s renewable energy agenda.",
    mainImage: project1,
    gallery: [gallery4, gallery1, gallery3, gallery5, gallery2],
    isLatest: false,
  },
  {
    id: 9,
    title: "Work Management",
    client: "Prime Developments",
    location: "Toronto, Canada",
    area: "360,000 sf",
    year: 2023,
    budget: "$190,000,000",
    architect: "UrbanSpace Design",
    sector: "Corporate, Technology",
    description:
      "Modern corporate campus integrating open office spaces, digital infrastructure, and eco-friendly construction standards to promote future-ready enterprises.",
    mainImage: project2,
    gallery: [gallery2, gallery3, gallery5, gallery1, gallery4],
    isLatest: false,
  },
  // From Latest Projects
  {
    id: 10,
    title: "Headquarters of the Nigeria Security and Civil Defence Corps, Sauka, Abuja",
    client: "Tantita Security Services Nigeria",
    location: "Sauka, Abuja",
    area: "850,000 sf",
    year: 2024,
    budget: "$320,000,000",
    architect: "Veekites Global Services",
    sector: "Security, Infrastructure",
    description:
      "The Command Control and Communication Centre project delivering security infrastructure across Nigeria...",
    mainImage: prj,
    gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
    isLatest: true,
  },
  {
    id: 11,
    title: "Green Energy Plant",
    client: "EcoFuture Energy",
    location: "Nairobi, Kenya",
    area: "620,000 sf",
    year: 2023,
    budget: "$270,000,000",
    architect: "Sustain Design Group",
    sector: "Energy, Renewables",
    description:
      "A sustainable energy project delivering clean power and driving eco-friendly development with solar...",
    mainImage: prj1,
    gallery: [gallery2, gallery3, gallery5, gallery1, gallery4],
    isLatest: true,
  },
];


  export const slides = [
    {
      title: "Veekites Global Services Limited",
      text: "Building, Powering, and Connecting Industries.",
    },
    {
      title: "Veekites Global Services Limited",
      text: "Your Partner in Construction, Energy, and Marine Services.",
    },
    {
      title: "Veekites Global Services Limited",
      text: "Delivering Excellence in Projects, Procurement, and Maritime.",
    },
    {
      title: "Veekites Global Services Limited",
      text: "Engineering Growth, Navigating Futures.",
    },
  ];