import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "../Brands/Brands.css"; // Ensure correct path to your CSS file
import Brands from "../Brands";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7455096,
  lng: -74.0083012,
};
const images = [
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
  
  // Add more images as needed
];
const images2 = [
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
  
  // Add more images as needed
];
const images3 = [
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
   { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQet05WzGYI0pNE4GO0rahZto1xW1aXZtlpzg&s', alt: 'Kitten 2', description: 'A cute kitten'  },
  
  // Add more images as needed
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
            <b style={{color:'#F6A705'}}>   Matrix Incorporation </b> has worked with and satisfied many international clients
              including companies such as ABB, Siemens, Toshiba, Mitsubishi, BP
              and Shell as well as specialist Earthing & Lightning protection
              installers, electrical engineers and contractors. These companies
              install MATCO’s products for and on behalf of consultants and
              clients. Below is a small selection of projects where Wallis
              materials have been installed and utilised (a full project list is
              available on request).
            </p>
          </center>
        </div>
      </section>

      <section className="map">
      <iframe
        title="Embedded Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203729.87971421555!2d77.42555936402832!3d17.32156347955587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc93f8bc6151487%3A0x82b9e832112208f1!2sTandur%2C%20Telangana%20501141!5e0!3m2!1sen!2sin!4v1721059931376!5m2!1sen!2sin"
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
      <h1 className="text-2xl font-bold mb-4">Our Projects</h1>
      </center>
      <div>
      <center>  <div style={{backgroundColor:'white', color:'#FAA603', display:'inline-block', fontSize:'43px'}}>KSA</div></center>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-64 sm:h-48 md:h-64 rounded-lg shadow-md"
            />
              <div className="mt-2 text-center">
            <p className="text-sm text-gray-600">{image.description}</p>
          </div>
          </div>
        ))}
      </div>
      
      </div>
      <div>
        
      <center>  <div style={{backgroundColor:'white', color:'#FAA603', display:'inline-block', fontSize:'43px'}}>KUWAIT</div></center>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-64 sm:h-48 md:h-64 rounded-lg shadow-md"
            />
              <div className="mt-2 text-center">
            <p className="text-sm text-gray-600">{image.description}</p>
          </div>
          </div>
        ))}
      </div>
      
      </div>
      <div>
      <center>  <div style={{backgroundColor:'white', color:'#FAA603', display:'inline-block', fontSize:'43px'}}>OMAN</div></center>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images2.map((image, index) => (
          <div key={index} className="p-4">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-64 sm:h-48 md:h-64 rounded-lg shadow-md"
            />
              <div className="mt-2 text-center">
            <p className="text-sm text-gray-600">{image.description}</p>
          </div>
          </div>
        ))}
      </div>
      
      </div>
      <div>
      <center>  <div style={{backgroundColor:'white', color:'#FAA603', display:'inline-block', fontSize:'43px'}}>UAE</div></center>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images2.map((image, index) => (
          <div key={index} className="p-4">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover w-full h-64 sm:h-48 md:h-64 rounded-lg shadow-md"
            />
              <div className="mt-2 text-center">
            <p className="text-sm text-gray-600">{image.description}</p>
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
