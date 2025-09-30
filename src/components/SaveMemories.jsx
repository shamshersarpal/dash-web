"use client";

import Image from "next/image";
import stepOne from "../images/Memories-1.svg";
import stepTwo from "../images/Memories-2.svg";
import stepThree from "../images/Memories-3.svg";
import one from "../images/one.svg";
import two from "../images/two.svg";
import three from "../images/three.svg";

import { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
  require("owl.carousel");
}

export default function SaveMemories() {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  }, []); // Ensure this runs only once when the component mounts

  return (
    <>
    
     
      <section className="bg-[#1B1B1B] border border-t-[#242424] border-b-[#242424] py-20 ">
         <div className="text-center    mb-10">
        <h2 className="text-white font-ws lg:text-[47px] font-[500] text-[37px] leading-[1.2]  ">
          Save Memories in{" "}
          <span className="bg-text">3 Steps</span>
        </h2> 
      </div>
        <div className="max-w-screen-xl mx-auto w-full px-4">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
                <div>
                  <Image
                    className="h-[400px] max-w-[100%]"
                    src={stepOne}
                    alt=""
                  />
                  <h3 className="text-[27px] font-[500] text-white text-center mt-5">
                    Scan the QR
                  </h3>
                </div>

                <div>
                  <Image
                    className="h-[400px] max-w-[100%]"
                    src={stepTwo}
                    alt=""
                  />
                  <h3 className="text-[27px] font-[500] text-white text-center mt-5">
                    Set up profile
                  </h3>
                </div>

                 <div>
                  <Image
                    className="h-[400px] max-w-[100%]"
                    src={stepThree}
                    alt=""
                  />
                  <h3 className="text-[27px] font-[500] text-white text-center mt-5">
                    Memorial page is active
                  </h3>
                </div>


            </div> 
        </div>
      </section>
    </>
  );
}
