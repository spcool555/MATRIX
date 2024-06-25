'use client'
import { useEffect, useRef } from 'react';
import './BrandSlider.css'


const AboutSectionOne = () => {
  const logosRef = useRef(null);
  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
      <main className="relative font-inter antialiased">
       <center> 
       <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">ACCREDITATIONS</h1>
       </center>
      <div className="relative  flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center">
            <div
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-xs animate-infinite-scroll">
                <li>
                  <img src="/images/ourClients/1.jpeg" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/2.png" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/3.jpeg" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/4.png" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/5.png" alt="cleints" />
                </li>
                <li>
                  <img src="/images/ourClients/6.png" alt="cleints" />
                </li>
                <li>
               <img src="/images/ourClients/9.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/8.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/10.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/11.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/12.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/13.jpg" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/14.png" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/15.jpg" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/16.jpeg" alt="cleints" />
                </li>
                <li>
                <img src="/images/ourClients/17.jpeg" alt="cleints" />
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    
  
    </main>
      </div>
    </section>
  );
};

export default AboutSectionOne;
