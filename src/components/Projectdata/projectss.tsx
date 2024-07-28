import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../Brands/Brands.css"; // Ensure correct path to your CSS file
import Brands from "../Brands";
import '../../../public/images/countrys/1.png';

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7455096,
  lng: -74.0083012,
};

const images = [
  { url: 'images/countrys/1.png', alt: 'matrix projects' },
  { url: 'images/countrys/2.png', alt: 'matrix projects' },
  { url: 'images/countrys/3.png', alt: 'matrix projects' },
  { url: 'images/countrys/4.png', alt: 'matrix projects' },
  { url: 'images/countrys/5.png', alt: 'matrix projects' },
  { url: 'images/countrys/6.png', alt: 'matrix projects' },
  { url: 'images/countrys/7.png', alt: 'matrix projects' },
  { url: 'images/countrys/8.png', alt: 'matrix projects' },
  { url: 'images/countrys/9.png', alt: 'matrix projects' },
  { url: 'images/countrys/10.png', alt: 'matrix projects' },
  { url: 'images/countrys/11.png', alt: 'matrix projects' },
];

const Projectss = () => {
  // Function to create custom control for Google Map
  const createCenterControl = (map) => {
    const controlButton = document.createElement("button");
    controlButton.classList.add('buttonStyle'); // Example class for styling button

    controlButton.textContent = "Center Map";
    controlButton.title = "Click to recenter the map";
    controlButton.type = "button";
    controlButton.addEventListener("click", () => {
      map.panTo(center); // Pan to center coordinates when clicked
    });
    return controlButton;
  };

  // Initialize Google Map and set up custom control
  const initMap = (map) => {
    const centerControlDiv = document.createElement("div");
    const centerControl = createCenterControl(map);
    centerControlDiv.appendChild(centerControl);
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
  };

  return (
    <>
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="brnds flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                <div className="hh">
                  <h1>Projects</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "60px" }}>
          <center>
            <p style={{ fontStyle: "oblique", fontWeight: "bold" }}>
              <b style={{color:'#F6A705'}}>Matrix Incorporation</b> has worked with and satisfied many international clients
              including companies such as ABB, Siemens, Toshiba, Mitsubishi, BP
              and Shell as well as specialist Earthing & Lightning protection
              installers, electrical engineers and contractors. These companies
              install MATCO&apos;s products for and on behalf of consultants and
              clients. Below is a small selection of projects where Wallis
              materials have been installed and utilised (a full project list is
              available on request).
            </p>
          </center>
        </div>
      </section>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1hXII84tPkwBmWIlxAw3K9qtbK1dDhqM&hl=en&ehbc=2E312F"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <div className="container mx-auto px-4 py-8">
        <center>
          <h1 style={{backgroundColor:'white', color:'#FAA603',  fontSize:'43px'}} className="text-2xl font-bold mb-4">Our Project Country&apos;s</h1>
        </center>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="p-4">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-64 sm:h-48 md:h-64 rounded-lg shadow-md"
                />
                <div className="mt-2 text-center">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brands/>
    </>
  );
};

export default Projectss;
