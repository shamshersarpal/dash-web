"use client";

import Image from "next/image";
import star from "../images/star.svg";
import quads from "../images/quads.svg";
import testo from "../images/testo.svg";
import mobileclients from "../images/mob-clients.svg";
import smile from "../images/smile.svg";

import { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Removed import for non-existent 'owl.transitions.css'
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
  require("owl.carousel");
}

export default function ClientsSay() {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      nav: true, // Enable navigation arrows
      dots: true, // Enable dots for pagination
      navText: ["<", ">"], // Optional: Customize navigation text
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
  }, []);
  return (
    <>
      <section className="px-4   py-20 max-w-screen-xl mx-auto w-full px-4">
        <div className="text-center">
          <h2 className="text-white font-ws lg:text-[47px] font-[500] text-[37px] leading-[1.2]  text-center">
            What Our
            <span className="bg-text"> Clients</span> Say
          </h2>
        </div>

        <div className="w-full px-4">
          <div className="owl-carousel ">
            <div className="item pt-20">
              <div className="bg-[#1B1B1B] p-6 rounded-lg shadow border border-[#4C4C4C] text-center">
                <div className="flex justify-center relative top-[-60px]">
                  <div className="h-[60px] w-[60px] bg-[#1B1B1B] border border-[#4C4C4C]  flex items-center justify-center rounded-full">
                    <svg
                      width={28}
                      height={24}
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5714 10.3333H3.71429C3.25963 10.3333 2.82359 10.1577 2.5021 9.84518C2.18061 9.53262 2 9.10869 2 8.66667V3.66667C2 3.22464 2.18061 2.80072 2.5021 2.48816C2.82359 2.1756 3.25963 2 3.71429 2H8.85714C9.3118 2 9.74783 2.1756 10.0693 2.48816C10.3908 2.80072 10.5714 3.22464 10.5714 3.66667V13.6667C10.5714 18.1117 8.28629 20.8883 3.71429 22M26 10.3333H19.1429C18.6882 10.3333 18.2522 10.1577 17.9307 9.84518C17.6092 9.53262 17.4286 9.10869 17.4286 8.66667V3.66667C17.4286 3.22464 17.6092 2.80072 17.9307 2.48816C18.2522 2.1756 18.6882 2 19.1429 2H24.2857C24.7404 2 25.1764 2.1756 25.4979 2.48816C25.8194 2.80072 26 3.22464 26 3.66667V13.6667C26 18.1117 23.7149 20.8883 19.1429 22"
                        stroke="url(#paint0_linear_1520_229)"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1520_229"
                          x1={2}
                          y1={12}
                          x2={26}
                          y2={12}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.427885" stopColor="#B70FB8" />
                          <stop offset={1} stopColor="#6C25E6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="text-white font-[400] mb-4">
                  "{/* */}Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups.{/* */}"
                </p>
                <h4 className="font-semibold text-white">Alene</h4>
              </div>
            </div>

            <div className="item pt-20">
              <div className="bg-[#1B1B1B] p-6 rounded-lg shadow border border-[#4C4C4C] text-center">
                <div className="flex justify-center relative top-[-60px]">
                  <div className="h-[60px] w-[60px] bg-[#1B1B1B] border border-[#4C4C4C]  flex items-center justify-center rounded-full">
                    <svg
                      width={28}
                      height={24}
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5714 10.3333H3.71429C3.25963 10.3333 2.82359 10.1577 2.5021 9.84518C2.18061 9.53262 2 9.10869 2 8.66667V3.66667C2 3.22464 2.18061 2.80072 2.5021 2.48816C2.82359 2.1756 3.25963 2 3.71429 2H8.85714C9.3118 2 9.74783 2.1756 10.0693 2.48816C10.3908 2.80072 10.5714 3.22464 10.5714 3.66667V13.6667C10.5714 18.1117 8.28629 20.8883 3.71429 22M26 10.3333H19.1429C18.6882 10.3333 18.2522 10.1577 17.9307 9.84518C17.6092 9.53262 17.4286 9.10869 17.4286 8.66667V3.66667C17.4286 3.22464 17.6092 2.80072 17.9307 2.48816C18.2522 2.1756 18.6882 2 19.1429 2H24.2857C24.7404 2 25.1764 2.1756 25.4979 2.48816C25.8194 2.80072 26 3.22464 26 3.66667V13.6667C26 18.1117 23.7149 20.8883 19.1429 22"
                        stroke="url(#paint0_linear_1520_229)"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1520_229"
                          x1={2}
                          y1={12}
                          x2={26}
                          y2={12}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.427885" stopColor="#B70FB8" />
                          <stop offset={1} stopColor="#6C25E6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="text-white font-[400] mb-4">
                  "{/* */}Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups.{/* */}"
                </p>
                <h4 className="font-semibold text-white">Alene</h4>
              </div>
            </div>

            <div className="item pt-20">
              <div className="bg-[#1B1B1B] p-6 rounded-lg shadow border border-[#4C4C4C] text-center">
                <div className="flex justify-center relative top-[-60px]">
                  <div className="h-[60px] w-[60px] bg-[#1B1B1B] border border-[#4C4C4C]  flex items-center justify-center rounded-full">
                    <svg
                      width={28}
                      height={24}
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5714 10.3333H3.71429C3.25963 10.3333 2.82359 10.1577 2.5021 9.84518C2.18061 9.53262 2 9.10869 2 8.66667V3.66667C2 3.22464 2.18061 2.80072 2.5021 2.48816C2.82359 2.1756 3.25963 2 3.71429 2H8.85714C9.3118 2 9.74783 2.1756 10.0693 2.48816C10.3908 2.80072 10.5714 3.22464 10.5714 3.66667V13.6667C10.5714 18.1117 8.28629 20.8883 3.71429 22M26 10.3333H19.1429C18.6882 10.3333 18.2522 10.1577 17.9307 9.84518C17.6092 9.53262 17.4286 9.10869 17.4286 8.66667V3.66667C17.4286 3.22464 17.6092 2.80072 17.9307 2.48816C18.2522 2.1756 18.6882 2 19.1429 2H24.2857C24.7404 2 25.1764 2.1756 25.4979 2.48816C25.8194 2.80072 26 3.22464 26 3.66667V13.6667C26 18.1117 23.7149 20.8883 19.1429 22"
                        stroke="url(#paint0_linear_1520_229)"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1520_229"
                          x1={2}
                          y1={12}
                          x2={26}
                          y2={12}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.427885" stopColor="#B70FB8" />
                          <stop offset={1} stopColor="#6C25E6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="text-white font-[400] mb-4">
                  "{/* */}Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups.
                  {/* */}"
                </p>
                <h4 className="font-semibold text-white">Markos</h4>
              </div>
            </div>

            <div className="item pt-20">
              <div className="bg-[#1B1B1B] p-6 rounded-lg shadow border border-[#4C4C4C] text-center">
                <div className="flex justify-center relative top-[-60px]">
                  <div className="h-[60px] w-[60px] bg-[#1B1B1B] border border-[#4C4C4C]  flex items-center justify-center rounded-full">
                    <svg
                      width={28}
                      height={24}
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5714 10.3333H3.71429C3.25963 10.3333 2.82359 10.1577 2.5021 9.84518C2.18061 9.53262 2 9.10869 2 8.66667V3.66667C2 3.22464 2.18061 2.80072 2.5021 2.48816C2.82359 2.1756 3.25963 2 3.71429 2H8.85714C9.3118 2 9.74783 2.1756 10.0693 2.48816C10.3908 2.80072 10.5714 3.22464 10.5714 3.66667V13.6667C10.5714 18.1117 8.28629 20.8883 3.71429 22M26 10.3333H19.1429C18.6882 10.3333 18.2522 10.1577 17.9307 9.84518C17.6092 9.53262 17.4286 9.10869 17.4286 8.66667V3.66667C17.4286 3.22464 17.6092 2.80072 17.9307 2.48816C18.2522 2.1756 18.6882 2 19.1429 2H24.2857C24.7404 2 25.1764 2.1756 25.4979 2.48816C25.8194 2.80072 26 3.22464 26 3.66667V13.6667C26 18.1117 23.7149 20.8883 19.1429 22"
                        stroke="url(#paint0_linear_1520_229)"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1520_229"
                          x1={2}
                          y1={12}
                          x2={26}
                          y2={12}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.427885" stopColor="#B70FB8" />
                          <stop offset={1} stopColor="#6C25E6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="text-white font-[400] mb-4">
                  "{/* */}Lorem ipsum is placeholder text commonly used in the
                  graphic, print, and publishing industries for previewing
                  layouts and visual mockups.{/* */}"
                </p>
                <h4 className="font-semibold text-white">Alene</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
