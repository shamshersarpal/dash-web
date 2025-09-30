"use client";

import { useState } from "react";

export default function BuyNow() {
  const [selectedOption, setSelectedOption] = useState("Buy 1");

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className="w-full max-w-[540px] mx-auto mt-10 lg:px-0 px-4">
      <div
        className={`option ${selectedOption === "Buy 1" ? "selected" : ""}`}
        onClick={() => selectOption("Buy 1")}
      >
        <div className="radio">
          <div className="radio-circle" />
          <span className="text-white">Buy 1</span>
        </div>
        <div className="prices">
          <div className="current-price">$49.99</div>
          <div className="old-price">$99.99</div>
        </div>
        <div className="tag tagOne">Save 50%</div>
      </div>
      <div
        className={`option ${selectedOption === "Buy 3" ? "selected" : ""}`}
        onClick={() => selectOption("Buy 3")}
      >
        <div className="radio">
          <div className="radio-circle" />
          <span className="text-white">Buy 3</span>
        </div>
        <div className="prices">
          <div className="current-price">$134.99</div>
          <div className="old-price">$299.97</div>
        </div>
        <div className="tag tagTwo">Save 55%</div>
      </div>
      <div
        className={`option ${selectedOption === "Buy 6" ? "selected" : ""}`}
        onClick={() => selectOption("Buy 6")}
      >
        <div className="radio">
          <div className="radio-circle" />
          <span className="text-white">Buy 6</span>
        </div>
        <div className="prices">
          <div className="current-price">$239.98</div>
          <div className="old-price">$599.94</div>
        </div>
        <div className="tag tagTwo">Save 60%</div>
      </div>

      <div className="text-center">
        <button type="button" className="loginBtn mt-1 h-[51px]">
          Add to Cart
        </button>
      </div>
    </section>
  );
}
