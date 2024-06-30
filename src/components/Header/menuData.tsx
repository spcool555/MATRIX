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
          { title: "Earth Rods", path: "/products?category=earthrod" },
          { title: "Earth Rod Seals", path: "/products?category=earthrodseal" },
          { title: "Earth Inspection Housings", path: "/products?category=earthinspectionhousing" },
          { title: "Low-Resistance Earthing Compound", path: "/products?category=lrec" },
          { title: "Lattice Mats", path: "/products?category=lm" },
          { title: "Earth Bars", path: "/products?category=eb" },
          { title: "'U' Bolt Clamps ", path: "/products?category=ubc" },
          { title: "Ecopotential Boundry", path: "/products?category=eb" },
        ],
      },

      {
        title: "Lightning Protection",
        links: [
          { title: "Air Rods", path: "/products?category=airrods" },
          { title: "B Bonds", path: "/products?category=bbond" },
          { title: " DC Clips", path: "/products?category=dcclips" },
          { title: " Strike Pads", path: "/products?category=strikepad" },
          { title: " Bimetallic Connectors", path: "/products?category=bc" },
          { title: " Pyramid Holdfast ", path: "/products?category=ph" },
          { title: " Oblong Junction Clamps ", path: "/products?category=ojc" },
          { title: " Square Tape Clamps", path: "/products?category=stc" },
          { title: " Free-Standing Air Terminals", path: "/products?category=fsat" },
        ],
      },

      {
        title: "Conductors",
        links: [
          { title: "Bare Copper Tapes", path: "/products?category=bct" },
          { title: "Bare Aluminium Tapes", path: "/products?category=bat" },
          { title: "PVC Covered Copper Tapes", path: "/products?category=pvccct" },
          { title: "PVC Covered Aluminium Tapes", path: "/products?category=pvccat" },
          { title: "LSOH Covered Copper Tapes", path: "/products?category=lsohcct" },
          { title: "Tinned Copper Tapes", path: "/products?category=tct" },
          { title: " Bare Hard Drawn Copper Bars ", path: "/products?category=bhdcb" },
          { title: " Bare Solid Circular Copper Conductor", path: "/products?category=bsccc" },
          { title: " Bare Stranded Copper Conductors", path: "/products?category=bscc" },
        ],
      },

      {
        title: "Cable Trags",
        links: [
          { title: " abcd", path: "/ios" },
          { title: " abcd", path: "/ios" },
          { title: " abcd", path: "/ios" },
          { title: " abcd", path: "/ios" },
          { title: " abcd", path: "/ios" },
          { title: " abcd", path: "/ios" },
          { title: " abcd", path: "/ios" },
        
        ],
      },
      // {
      //   title: "Surge Protection",
      //   links: [
      //     { title: " Mains Distribution Protection", path: "/ios" },
      //     { title: " Mains, Single Circuit Protection", path: "/android" },
      //     { title: "Data Line Protection", path: "/android" },
      //     { title: "Telecom Protection", path: "/android" },
      //     { title: "   Photovoltaic Protection", path: "/android" },
      //     { title: "   Equipotential Bonding", path: "/android" },
      //     { title: "  Low Voltage Type 2 ", path: "/android" },
      //     { title: " Countersunk Machine Screws", path: "/android" },
      //     { title: "  SPA Range", path: "/android" },
      //     { title: "     Mains Socket Strips", path: "/android" },
      //     { title: "  Accessories", path: "/android" },
      //   ],
      // },

      {
        title: "Exothermik Welding",
        links: [
          { title: "Bar to Bar", path: "/products?category=btb" },
          { title: "Bar to Earth Rod", path: "/products?category=bter" },
          { title: "Bar to Steel Surface", path: "/products?category=btss" },
          { title: "Cable to Bar", path: "/products?category=ctb" },
          { title: "Cable to Cable", path: "/products?category=ctc" },
          { title: " Cable to Earth Rod", path: "/products?category=cter" },
          { title: "  Cable to Rebar ", path: "/products?category=ctr" },
          { title: " Cable to Steel Surface", path: "/products?category=ctss" },
          { title: " Stud to Steel Surface ", path: "/products?category=stss" },
          { title: "  Welding Powders  ", path: "/products?category=wp" },
        ],
      },
      {
        title: "Fastners & Fixings",
        links: [
          { title: " Security Fixings", path: "/products?category=sf" },
          { title: "Hexagon Head Set Screws", path: "/products?category=hhsc" },
          { title: "Hexagon Nuts", path: "/hn" },
          { title: "Spring Washers", path: "/sw" },
          { title: "Countersunk Wood Screw", path: "/cws" },
          { title: "Tinned Copper Tapes", path: "/tct" },
          { title: "Round Head Wood Screws ", path: "/rhws" },
          { title: "Rail", path: "/rail" },
          { title: "Plastic Wall Plugs", path: "/pwp" },
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
    title: "Clients & Projects",
    path: "/Projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Catelouge",
    path: "#",
  },
];

export default menuData;
