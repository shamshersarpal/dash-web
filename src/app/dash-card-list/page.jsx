"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import proOne from "@/images/pro-1.jpg";
import proTwo from "@/images/pro-2.jpg";
import proThree from "@/images/pro-3.jpg";
import proFour from "@/images/pro-4.jpg";
import proFive from "@/images/pro-5.jpg";

export default function dashList() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    { id: 1, img: proOne, title: "DASH Card 1" },
    { id: 2, img: proTwo, title: "DASH Card 2" },
    { id: 3, img: proThree, title: "DASH Card 3" },
    { id: 4, img: proFour, title: "DASH Card 4" },
    { id: 5, img: proFive, title: "DASH Card 5" },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Header />
      <section className="mainDiv">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-white lg:text-4xl text-2xl text-center mt-10 mb-2">
            DASH Card List
          </h2>
          <p className="text-center text-[#BBBBBB] text-small">
            Please select one to next
          </p>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
            {currentCards.map((card) => (
              <div key={card.id} className="relative">
                <div
                  onClick={() => setSelectedCard(card.id)}
                  className={`w-full bg-[#282828] rounded-[30px] border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    selectedCard === card.id
                      ? "border-[#ff0080] scale-[1.03]"
                      : "border-[#3F3F3F]"
                  }`}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    className="w-full h-auto mb-4 rounded-[20px]"
                  />
                  <h3 className="text-white text-xl mb-2 text-center">
                    {card.title}
                  </h3>

                  {/* Centered Next Button */}
                  {selectedCard === card.id && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black/60 rounded-[30px]">
                      <button className="mainBtn h-[52px] mt-3 text-[18px] font-[600] inline-flex items-center justify-center px-6 cursor-pointer min-w-[150px]">
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-20 space-x-3 ">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 rounded-full text-white cursor-pointer text-sm   ${
                  currentPage === index + 1
                    ? "bg-[#ff0080]"
                    : "bg-[#3F3F3F] hover:bg-[#4A4A4A] "
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
