"use client";
import React ,{useState} from "react";
import Image from "next/image";
function Hero() {
  const [functions, setfunctions] = useState([
    {
      Function: "Heart Disease prediction",
      requirements: "Medical Records",
    },
    {
      Function: "Lung Disease detection",
      requirements: "Medical Images",

    },
    {
      Function: "Chatpot",
      requirements: "Educational System",
    },
  
  ]);
  return (
    <section class="">
      <div className=" p-4 border-b-sky-200">
        <div class="  mx-auto max-w-xl text-center">
          <div className="absolute w-[200px] h-[200px]  left-0  blur-[70px] rounded-full bg-opacity-90 bg-pink-600 z-1"></div>

          <div className="absolute w-[300px]  right-0 h-[200px]  blur-[70px] rounded-full bg-opacity-90 bg-red-600 z-1"></div>

          <div className=" z-10 relative ">
            <h1 class="text-2xl font-extrabold sm:text-3xl">
              Heart Disease prediction
              <strong class="font-extrabold text-red-700 sm:block">
                {" "}
                Heart Disease prediction
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl/relaxed">
              The convergence of Artificial Intelligence, robotics, electronics,
              and mobile app development within three departments has given rise
              to a groundbreaking solution for healthcare. This innovative
              system specializes in diagnosis, prediction, and detection through
              advanced analysis of medical images and records, specifically
              catering to patients with Cardiovascular Diseases (CVD) or
              Pulmonary problems. Furthermore, it incorporates an educational
              platform designed to enhance the productivity and knowledge of
              medical students and healthcare professionals. By leveraging
              cutting-edge technologies, this comprehensive solution aims to
              revolutionize the healthcare industry by providing accurate
              diagnoses, improving patient outcomes, and empowering healthcare
              professionals with the latest insights and expertise.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>

            <div className="w-full">
              <h2 className=" my-7 text-center text-3xl font-bold  p-3 bg-slate-300 w-[300px] mx-auto bg-opacity-45 rounded-lg">
                Functions
              </h2> 
              <div className=" flex items-center justify-center gap-5  flex-wrap"> 
              {
                functions.map((item) => {
                return( 
                  <div key={item} className=" w-[300px] bg-slate-500   rounded-lg bg-opacity-45 p-2"> 
                    <h2 className=" my-7 text-center text-xl font-bold  p-1 bg-teal-300  mx-auto bg-opacity-45 rounded-lg">
              {item.Function}
            </h2>
            <h2 className=" my-7 text-center text-xl font-bold  p-1 bg-teal-300  mx-auto bg-opacity-45 rounded-lg">
      {item.requirements}
            </h2>
                   
                  </div>
                )
              } )  

            } 
          
              
            
              
              </div>
            </div>
            <h2 className=" my-12 text-center text-3xl font-bold  p-3 bg-slate-300 w-[300px] mx-auto bg-opacity-45 rounded-lg">
              Robot Images
            </h2>
            <div className="  flex gap-12 flex-wrap items-center justify-center w-full">
              <Image
                src="/VitoM Robot.jpg"
                width={180}
                height={180}
                className=" rounded-lg w-[180px] heigh-[180px] "
              />
              <Image
                src="/VitoM Robot-3.png"
                width={180}
                height={180}
                className=" rounded-lg w-[180px] heigh-[180px] "
              />
              <Image
                src="/VitoM Robot-2.jpg"
                width={180}
                height={180}
                className=" rounded-lg w-[180px] heigh-[180px] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
