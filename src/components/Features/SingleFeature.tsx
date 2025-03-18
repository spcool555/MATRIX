import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (<>

<div className="w-full h-full flex flex-col  bg-white shadow-lg justify-start  items-center rounded-lg  ring-4 ring-[#FAA706] ring-opacity-100  transform transition-all duration-300 lg:hover:scale-105">
    <div className="flex flex-wrap lg:flex-nowrap justify-start items-center">
    <div className="flex flex-col gap-4  items-center justify-start dark:bg-[#262525] group">
        {/* <img className="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" /> */}
        <div className="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[13rem] object-center aspect-square rounded-t-lg mb-10   rounded-md ">
    {icon}
          </div>
        <div className="flex flex-col">
            <div className="flex items-center justify-between my-4">
                <div
                    className="relative w-11/12 h-[4rem] flex items-center justify-start border-l-4 border-[#FFD300] rounded-tr-full rounded-br-full bg-[#fff891] dark:bg-[#414141]">
            <h2 className="pl-2 text-2xl font-semibold group-hover:text-[#f9a605] cursor-pointer">{title}</h2>

                   
                </div>

                
            </div>


            <p className="pl-4 text-gray-800 dark:text-gray-300  mb-4">{paragraph}</p>
            {/* <button className="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button> */}
        </div>
    </div>
</div>
</div>

  
    </>
    // old Code
    // <div className="w-full">
    //   <div className="wow fadeInUp" data-wow-delay=".15s">
    //    <center> <div className="mb-10 flex h-[70px] w-[143px] items-center justify-center rounded-md  bg-opacity-10 text-primary">
    //       {icon}
    //     </div><br />
    //     <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //       {title}
    //     </h3>
    //     <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
    //       {paragraph}
    //     </p>
    //     </center>
    //   </div>
    // </div>
  );
};

export default SingleFeature;
