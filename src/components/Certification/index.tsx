import "./Brands.css";
const Certification = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">

     <center> <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Certification</span></h1></center>

  <center>    <div className="container">
        <section
          id="contact"
          className="overflow-hidden py-16 md:py-20 lg:py-28"
        >
          <div className="container">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <img className="img-s"  src="./images/certificate/1.jpg" alt="" />
              </div>
              <div className="col-span-4">
                <img className="img-s" src="./images/certificate/2.jpg" alt="" />
              </div>
              <div className="col-span-4">
                <img className="img-s" src="./images/certificate/3.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <img className="img-s" src="./images/certificate/4.jpg" alt="" />
              </div>
              <div className="col-span-4">
                <img className="img-s" src="./images/certificate/5.jpg" alt="" />
              </div>
              <div className="col-span-4">
                <img className="img-s" src="./images/certificate/6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4">
                <img className="img-s" src="./images/certificate/7.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div> </center>
    </section>
  );
};

export default Certification;
