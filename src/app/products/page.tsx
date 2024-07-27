'use client'
import { Suspense } from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useRouter, useSearchParams } from 'next/navigation';

const SolidEarthingRods = [
  {
    id: 1,
    name: "Solid Copper Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$10",
    imageUrl: "/images/products/earthRod/copper-bonded-ul-earthing-rod.png"
  },
  {
    id: 2,
    name: "Solid Copper Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/earthRod/solid-copper-earth-rods-matrix.png"
  },
  {
    id: 3,
    name: "Solid Copper Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/tscer.png"
  },
  {
    id: 4,
    name: "Solid Copper Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/sser.png",
    category: "earthrod"
  },
  {
    id: 5,
    name: "Solid Copper Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/gsers.png",
    category: "earthrod"
  },
  {
    id: 6,
    name: "Hot Dip Galvanized Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 7,
    name: "Hot Dip Galvanized Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 8,
    name: "Hot Dip Galvanized Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 9,
    name: "Hot Dip Galvanized Solid Earth Rod welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 10,
    name: "Galvanized Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 11,
    name: "Copper Bonded Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 12,
    name: "Copper Bonded Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 13,
    name: "Copper Bonded Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 14,
    name: "Copper Bonded Earth Rod welded busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 15,
    name: "Copper bond Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 16,
    name: "Stainless Steel Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 17,
    name: "Stainless Steel Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 18,
    name: "Stainless Steel Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 19,
    name: "Stainless Steel Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 20,
    name: "Stainless Steel Earth Rods ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 21,
    name: "Molybdenum Stainless Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 22,
    name: "Tinned Copper Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 23,
    name: "Tinned Copper Solid Earth Rods ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 24,
    name: "Tinned Copper Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 25,
    name: "Brass Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 26,
    name: "Brass Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 27,
    name: "Brass Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 28,
    name: "Brass Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 29,
    name: "Graphite Solid Earth Rod Un-Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 30,
    name: "Tinned Copper Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 31,
    name: "Graphite Solid Earth Rod Externally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 32,
    name: "Graphite Solid Earth Rod Internally Threaded",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 33,
    name: "Graphite Solid Earth Rod Welded Busbar Clamp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 34,
    name: "Angular Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 35,
    name: "Spike Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 36,
    name: "Zinc Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 37,
    name: "Nickel Plated Solid Copper Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 38,
    name: "Coupling Dowels",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 39,
    name: "Driving Heads",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 40,
    name: "Driving Spikes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 41,
    name: "Cross Profile Galvanised Steel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 42,
    name: "Nickel Earth Rods",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 43,
    name: "Ion Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 44,
    name: "Nickel Earth Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 45,
    name: "Copper Clad Steel Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
  {
    id: 46,
    name: "Molybdenum Earth Rod",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/npscer.png",
    category: "earthrod"
  },
];

const EarthingSystem = [
  {
    id: 47,
    name: "Tripolar Earthing System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/earthRod/summit_hikking.png"
  },
  {
    id: 48,
    name: "Tripod Earthing System ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/earthRod/summit_hikking.png"
  },
  {
    id: 49,
    name: "Anolyte Grounding System",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$12",
    imageUrl: "/images/products/earthRod/summit_hikking.png"
  },
];

const ChemicalEarthingElectrods = [
  {
    id: 50,
    name: "Hot Dip Galvanized Earthing Electrode ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$15",
    imageUrl: "/images/products/earthRod/ssss.png"
  },
  {
    id: 51,
    name: "Zinc Coated Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 52,
    name: "Alloy Coated Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 53,
    name: "Copper Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 54,
    name: "Copper Bonded Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 55,
    name: "Gi Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 56,
    name: "Stainless Steel Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 57,
    name: "Copper Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 58,
    name: "Brass Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 59,
    name: "Pipe in Strip Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 60,
    name: "Pipe in Pipe Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 61,
    name: "Heavy Duty Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 62,
    name: "Ion Electrolytic Copper Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 63,
    name: "Ion Electrolytic Copper Clad Steel Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 64,
    name: "Ion Electrolytic Stainless Steel Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 65,
    name: "Ion Electrolytic Hot Dip GI Earthing Electrode",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
  {
    id: 66,
    name: "Chemical ground electrodes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/ets-cable-components_plastic-inspection-pits-earth-bars-removebg-preview.png"
  },
];

const PipeEarthingRoads = [
  {
    id: 67,
    name: "CI Earthing Pipe Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/airRod.png"
  },
  {
    id: 68,
    name: "CI Earthing Pipe with GI Clamp ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/airRod2.png"
  },
  {
    id: 69,
    name: "CI Earthing Pipe with Flange",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/airRod2.png"
  },
  {
    id: 70,
    name: "CI Pipe With GI Clamp Mesh Funnel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/airRod2.png"
  },
  {
    id: 71,
    name: "GI Earthing Pipe perforated",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/airRod2.png"
  },
  {
    id: 72,
    name: "Hot Dip Galvanized Earthing Pipe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/airRod2.png"
  },
  {
    id: 73,
    name: "Copper Pipe Earthing Rod ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/earthRod/airRod2.png"
  },
];

const EarthStation =[
  {
    id: 74,
    name: "GI Earth Station  ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/lrc.jpeg"
  },
  {
    id: 75,
    name: "Copper Plate GI Pipe Earth Station ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/lrc.jpeg"
  },
  {
    id: 76,
    name: "Hot Dip GI Earth Station ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/lrc.jpeg"
  },
  {
    id: 77,
    name: "Hot Dip GI Earth Station ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/lrc.jpeg"
  },

  
]
const lgm =[
  {
    id: 13,
    name: "Aluminum busbar ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/Aluminum_busbar.png"
  },

  
]
const ep =[
  {
    id: 14,
    name: "tinned copper busbar type",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/menueimages/tinned copper busbar type.jpeg"
  },

  
]
const ec=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const eb=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const eih=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const lrec=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const busbars=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const cbflsaj=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const ea=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const airrods=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const LightningProtectionClamps=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const Conductors=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const Metals=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const pct=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const ltct=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const tct=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const rct=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const wmct=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]
const nmct=[
  {
    id: 15,
    name: "U-Bolts Clamps - Single Plate Type For Horizontal Flat Tapes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$14",
    imageUrl: "/images/products/uClamps/spuclamp.png"
  },
  
]

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  let products = [];

  if (category === 'SolidEarthingRods') {
    products = SolidEarthingRods;
  } else if (category === 'EarthingSystem') {
    products = EarthingSystem;
  } else if (category === 'ChemicalEarthingElectrods') {
    products = ChemicalEarthingElectrods;
  } else if (category === 'PipeEarthingRoads') {
    products = PipeEarthingRoads;
  } else if (category === 'EarthStation') {
    products = EarthStation;
  }else if (category === 'lgm') {
    products = lgm;
  }else if (category === 'ep') {
    products = ep;
  }else if (category === 'ec') {
    products = ec;
  }else if (category === 'eb') {
    products = eb;
  }
  else if (category === 'eih') {
    products = eih;
  }
  else if (category === 'lrec') {
    products = lrec;
  }
  else if (category === 'busbars') {
    products = busbars;
  }
  else if (category === 'cbflsaj') {
    products = cbflsaj;
  }
  else if (category === 'ea') {
    products = ea;
  }
  else if (category === 'airrods') {
    products = airrods;
  }
  
  else if (category === 'LightningProtectionClamps') {
    products = LightningProtectionClamps;
  }
  else if (category === 'Conductors') {
    products = Conductors;
  }
  else if (category === 'Metals') {
    products = Metals;
  }
  else if (category === 'pct') {
    products = pct;
  }
  else if (category === 'ltct') {
    products = ltct;
  }
  else if (category === 'tct') {
    products = tct;
  }
  else if (category === 'rct') {
    products = rct;
  }
  else if (category === 'wmct') {
    products = wmct;
  }
  else if (category === 'nmct') {
    products = nmct;
  }


  const handleProductClick = (productId) => {
    router.push(`/singleProduct?category=${category}&id=${productId}`);
  };

  const ProductCard = ({ product }) => (
    <a onClick={() => handleProductClick(product.id)} className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
      <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
          <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
        </svg>
      </div>
      <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <div>
        <h3 className="text-lg font-extrabold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        {/* <h4 className="text-lg text-gray-800 font-bold mt-4">{product.price}</h4> */}
      </div>
    </a>
  );

  return (
    <>
      <Breadcrumb
        pageName="Products Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default function SuspenseWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
}
