"use client";

import { useEffect } from "react";
import Image from "next/image";
import questionLeft from "../images/questionLeft.svg";
import questionRight from "../images/questionRight.svg";

export default function Faqs() {
  useEffect(() => {
    const items = document.querySelectorAll(".faq-item");

    items.forEach((item) => {
      item.querySelector(".faq-question").addEventListener("click", () => {
        items.forEach((i) => i !== item && i.classList.remove("active"));
        item.classList.toggle("active");
      });
    });

    return () => {
      items.forEach((item) => {
        item.querySelector(".faq-question").removeEventListener("click", () => {
          items.forEach((i) => i !== item && i.classList.remove("active"));
          item.classList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <>
      <section className="border border-t-[#242424]  ">
        <div className=" max-w-screen-xl mx-auto w-full pt-10 lg:px-0 px-4 border relative border-l-[#242424] border-r-[#242424]">
          <Image
            className="questionLeft lg:block hidden"
            src={questionLeft}
            alt=""
          />

          <Image
            className="questionRight lg:block hidden"
            src={questionRight}
            alt=""
          />
          <div className="lg:text-center text-left">
            <h2 className="text-white font-ws lg:text-[47px] font-[500] mb-10 text-[37px] leading-[1.2] lg:block hidden">
              Need<span className="text-[#ED0EEB] font-[900]"> Help</span> ?
              Start Here
            </h2>

            <h2 className="text-white font-ws lg:text-[47px] font-[500] mb-10 text-[37px] leading-[1.2] lg:hidden block">
              Need<span className="text-[#ED0EEB] font-[900]"> Help</span> ?{" "}
              <br></br>
              Start Here
            </h2>
          </div>
          <div className="faq-container max-w-[905px]  mx-auto pb-20">
            <div className="faq-item active">
              <button className="faq-question pe-20">What is included?</button>
              <div className="faq-answer">
                <p>
                  Each order contains a unique, weatherproof Remember Well Dash
                  made of high-quality aluminum, as well as an accompanying
                  commemorative page. Each order contains a unique, weatherproof
                  Remember Well Dash made of high-quality aluminum, as well as
                  an accompanying commemorative page.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                Are there ongoing fees for the Dash service?
              </button>
              <div className="faq-answer">
                <p>
                  Each order contains a unique, weatherproof Remember Well Dash
                  made of high-quality aluminum, as well as an accompanying
                  commemorative page. Each order contains a unique, weatherproof
                  Remember Well Dash made of high-quality aluminum, as well as
                  an accompanying commemorative page.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                Can I also use the Dash for my pet?
              </button>
              <div className="faq-answer">
                <p>
                  Each order contains a unique, weatherproof Remember Well Dash
                  made of high-quality aluminum, as well as an accompanying
                  commemorative page. Each order contains a unique, weatherproof
                  Remember Well Dash made of high-quality aluminum, as well as
                  an accompanying commemorative page.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                Are there ongoing fees for the Dash service?
              </button>
              <div className="faq-answer">
                <p>
                  Each order contains a unique, weatherproof Remember Well Dash
                  made of high-quality aluminum, as well as an accompanying
                  commemorative page. Each order contains a unique, weatherproof
                  Remember Well Dash made of high-quality aluminum, as well as
                  an accompanying commemorative page.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">What are the dimensions?</button>
              <div className="faq-answer">
                <p>
                  Each order contains a unique, weatherproof Remember Well Dash
                  made of high-quality aluminum, as well as an accompanying
                  commemorative page. Each order contains a unique, weatherproof
                  Remember Well Dash made of high-quality aluminum, as well as
                  an accompanying commemorative page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
