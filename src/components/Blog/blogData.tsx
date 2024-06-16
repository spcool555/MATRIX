import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Earth Electrode Systems",
    paragraph:
      "To complement our highly successful material supply business, we also offer a complete Electrical Earthing Design Service using CDEGS software.",
    image: "/images/sk/b1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Lightning Protection Systems",
    paragraph:
      "Our team of highly experienced professional Engineers & Technicians design Lightning Protection Systems (LPS) to the IEC 62305 standard or local derivative.",
    image: "/images/sk/b2.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Protect EV Charging Stations?",
    paragraph:
      "In this blog, we will understand the surge risks faced in EV charging stations and the process of choosing the right Surge Protector Devices for your EV Charging Station. ",
    image: "/images/sk/b3.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
