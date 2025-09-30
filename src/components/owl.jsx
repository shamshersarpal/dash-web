"use client";

import { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Removed import for non-existent 'owl.transitions.css'
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
  require("owl.carousel");
}

export default function OwlCarousel() {
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
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }, []); // Ensure this runs only once when the component mounts

  return (
    <div className="owl-carousel">
      <div className="item">
        <h2 className="text-white">Item 1</h2>
      </div>
      <div className="item">
        <h2 className="text-white">Item 2</h2>
      </div>
      <div className="item">
        <h2 className="text-white">Item 3</h2>
      </div>
      <div className="item">
        <h2 className="text-white">Item 4</h2>
      </div>
    </div>
  );
}
