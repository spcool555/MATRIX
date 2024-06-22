const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    submenu: [
      {
        title: "Earthing",
        links: [
          { title: "Earth Rods", path: "/frontend" },
          { title: "  Earth Rod Seals", path: "/backend" },
          { title: "  Earth Rod Seals", path: "/backend" },
          { title: "  Earth Inspection Housings", path: "/backend" },
          { title: "  Low-Resistance Earthing Compound", path: "/backend" },
          { title: "  Lattice Mats", path: "/backend" },
          { title: "  Earth Bars", path: "/backend" },
          { title: "    'U' Bolt Clamps ", path: "/backend" },
        ],
      },

      {
        title: "Lightning Protection",
        links: [
          { title: "Air Rods", path: "/ios" },
          { title: "B Bonds", path: "/android" },
          { title: " DC Clips", path: "/android" },
          { title: " Strike Pads", path: "/android" },
          { title: " Bimetallic Connectors", path: "/android" },
          { title: " Pyramid Holdfast ", path: "/android" },
          { title: " Oblong Junction Clamps ", path: "/android" },
          { title: " Square Tape Clamps", path: "/android" },
          { title: " Free-Standing Air Terminals", path: "/android" },
        ],
      },

      {
        title: "Conductors",
        links: [
          { title: "Bare Copper Tapes", path: "/ios" },
          { title: "Bare Aluminium Tapes", path: "/android" },
          { title: "PVC Covered Copper Tapes", path: "/android" },
          { title: "PVC Covered Aluminium Tapes", path: "/android" },
          { title: "LSOH Covered Copper Tapes", path: "/android" },
          { title: "Tinned Copper Tapes", path: "/android" },
          { title: " Bare Hard Drawn Copper Bars ", path: "/android" },
          { title: " Bare Solid Circular Copper Conductor", path: "/android" },
          { title: " Bare Stranded Copper Conductors", path: "/android" },
        ],
      },

      {
        title: "Fastners & Fixings",
        links: [
          { title: " Security Fixings", path: "/ios" },
          { title: "Hexagon Head Set Screws", path: "/android" },
          { title: "Hexagon Nuts", path: "/android" },
          { title: "Spring Washers", path: "/android" },
          { title: "Countersunk Wood Screw", path: "/android" },
          { title: "Tinned Copper Tapes", path: "/android" },
          { title: " Round Head Wood Screws ", path: "/android" },
          { title: "  Rail", path: "/android" },
          { title: " Plastic Wall Plugs", path: "/android" },
        ],
      },
      {
        title: "Surge Protection",
        links: [
          { title: " Mains Distribution Protection", path: "/ios" },
          { title: " Mains, Single Circuit Protection", path: "/android" },
          { title: "Data Line Protection", path: "/android" },
          { title: "Telecom Protection", path: "/android" },
          { title: "   Photovoltaic Protection", path: "/android" },
          { title: "   Equipotential Bonding", path: "/android" },
          { title: "  Low Voltage Type 2 ", path: "/android" },
          { title: " Countersunk Machine Screws", path: "/android" },
          { title: "  SPA Range", path: "/android" },
          { title: "     Mains Socket Strips", path: "/android" },
          { title: "  Accessories", path: "/android" },
        ],
      },

      {
        title: "Exothermik Welding",
        links: [
          { title: "    Bar to Bar", path: "/ios" },
          { title: " Bar to Earth Rod", path: "/android" },
          { title: "Bar to Steel Surface", path: "/android" },
          { title: "Cable to Bar", path: "/android" },
          { title: "Cable to Cable", path: "/android" },
          { title: " Cable to Earth Rod", path: "/android" },
          { title: "  Cable to Rebar ", path: "/android" },
          { title: " Cable to Steel Surface", path: "/android" },
          { title: " Stud to Steel Surface ", path: "/android" },
          { title: "  Welding Powders  ", path: "/android" },
        ],
      },
    ],
  },
  {
    title: "Technical Services",
    submenu: [
      {
        title: "Earth Electrode System",

        img: "https://images.unsplash.com/photo-1610028290816-5d937a395a49?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "To complement our highly successful material supply business, we also offer a complete Electrical Earthing Design Service.",
        links: [{ title: "Find Out More", path: "/" }],
      },
      {
        title: "Lightning Protection System",
        img: "https://plus.unsplash.com/premium_photo-1664304434345-8b8e6b512532?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "To complement our highly successful material supply business, we also offer a complete Electrical Earthing Design Service.",
        links: [{ title: "Find Out More", path: "/" }],
      },
      {
        title: "Earthing Design System",

        img: "https://plus.unsplash.com/premium_photo-1677643917895-09dbeb21c834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc: "To complement our highly successful material supply business, we also offer a complete Electrical Earthing Design Service.",

        links: [{ title: "Find Out More", path: "/" }],
      },
      {
        title: "G78 Mobile Phone Base Stations",
        img: "https://plus.unsplash.com/premium_photo-1664693751181-41a6f6c347b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vYmlsZSUyMHBob25lJTIwYmFzZSUyMHN5c3llbXxlbnwwfHwwfHx8MA%3D%3D",
        desc: "To complement our highly successful material supply business, we also offer a complete Electrical Earthing Design Service.",
        links: [{ title: "Find Out More", path: "/" }],
      },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/Projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default menuData;
