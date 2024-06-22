import "../Brands/Brands.css"; // Adjust the path as per your project structure
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.5074, // Example latitude
  lng: -0.1278, // Example longitude
};

const Projectss = () => {
  return (
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
            A.N. Wallis has worked with and satisfied many international clients
            including companies such as ABB, Siemens, Toshiba, Mitsubishi, BP
            and Shell as well as specialist Earthing & Lightning protection
            installers, electrical engineers and contractors. These companies
            install A.N. Wallis’s products for and on behalf of consultants and
            clients. Below is a small selection of projects where Wallis
            materials have been installed and utilised (a full project list is
            available on request).
          </p>
        </center>
      </div>

      <div className="map">
        <LoadScript
          googleMapsApiKey="https://serpapi.com/search.json?engine=google_maps&q=pizza&ll=@40.7455096,-74.0083012,15.1z&type=search"
          libraries={["places"]}
          language="en"
        >

          
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
          />
        </LoadScript>
      </div>
    </section>
  );
};

export default Projectss;
