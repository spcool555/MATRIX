import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import './Brands.css'
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <section className="ab pt-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="brnds flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
                <div className="hh">
                  <h1>About Us</h1>
                </div>
                <div className="pp">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-8 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src="./images/aboutus.jpeg"
                  alt="about image"
                  // className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                {/* Uncomment below if you have a dark mode image */}
                {/* <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="about image"
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                /> */}
              </div>
             
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    <b style={{color:'#F6A705'}}> MATRIX INCORPORATION </b>  {' '}  in 1946 is a world-leading
                    manufacturer of earthing, lightning protection, exothermic
                    welding and surge protection products. We also offer expert
                    design services for earthing & lightning systems.
                  </h2>
                  <hr />
                  <p>
                    Our products are manufactured in Nottingham UK and
                    distributed to customers all over the world, with many being
                    used on extremely prestigious projects including:
                  </p>
                  <hr />
                  <br />
                  <div className="grid auto-cols-max grid-flow-col gap-4">
                    <div>
                      <ul className="list-inside list-disc">
                        <li>The Grand Prix Circuit in Abu Dhabi</li>
                        <li>Mosques in Libya, Bahrain and Kuwait</li>
                        <li>Telecommunication Towers in Nigeria</li>
                        <li>Airports in UAE, Oman and Europe</li>
                        <li>Substations in Malaysia, Dubai</li>
                        <hr />
                        <br />
                        <li>Hospitals in Jordan, Kuwait and Qatar</li>
                        <li>Petrochemical Projects in Saudi Arabia</li>
                        <li>Rail Installations in Hong Kong and the UK</li>
                        <li>The world’s largest Women’s University</li>
                        <li>The Presidential Palace in Abu Dhabi</li>
                      </ul>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <center>
         <hr />

        


          <center> 
       <h2 className="m-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">  EARTHING SYSTEM DESIGNS FROM THE EXPERTS</h2>
       </center>


          <br />
          <br />
          <p>
            Our highly experienced Technical Services team are able to offer
            Earth Electrode System Designs and associated testing services using
            the most up-to-date equipment and design software ‘CDEGS’. All of
            these works are carried out by competent and highly experienced
            Electrical Engineers and Technicians and are carried out in
            accordance with BS 7430:2011+A1:2015 – The code of practice for
            protective earthing of electrical installations and BS EN 50522:2022
            – Earthing of power installations exceeding 1kV a.c. amongst other
            specifications. All of our designs also comply with National &
            International standards.
          </p>
        </center>
        <div className="relative mt-10">
          <iframe
            className="md:w-520 md:h-315 h-56 w-full"
            src="https://www.youtube.com/embed/KwEdrgAoW0c?si=ah_rekTM7iVSUAG0"            
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <hr />

        <center className="mt-16">
        <center className="mb-20">
   
       <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">ACCREDITATIONS</h1>
      

            </center>
          <div className="flex justify-between">
        
            <div className="w-1/2">
              <p>
                We offer design, site support and supervision services for
                Earthing & Lightning Protection in accordance with BS EN 62305.
                Design of Earthing systems to BS 7430:2011+A1:2015 and Local
                Codes of Practice, Soil Resistivity Tests & Reports, Earth
                Resistance Tests & Reports, Inspection and supervision on sites
                for installation of LPS.
              </p>
              <p className="mt-8">
                Wallis work internationally with consultants, contractors and
                power engineering concerns either directly and through our
                comprehensive network of distributors.
              </p>
            </div>
            <div className="w-1/2">
              <p>
                Our products are tested to and in compliance with BS EN 62561
                Lightning Protection System Components, BS EN 62305 Protection
                against Lightning and BS 7430:2011+A1:2015 Code of Practice for
                Protective Earthing of Electrical Installations
              </p>

              <p className="mt-14">
              MATCO is accredited with BSI ISO 9001:2015 & BSI ISO 45001:2018 (Copies of which can be obtained upon request).
              </p>
            </div>
          </div>
        </center>
      </section>
      <section className="">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px] brnds">
         <div className="hh"><h1>Can we help?</h1></div>
         <div className="pp">
          <p>Our friendly team are on hand to answer any questions you might have.</p>
          <p>+44 (0)115 927 1721 or info@an-wallis.com</p>
         </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default AboutPage;
