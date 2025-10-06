"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function AddPhotos() {
  const [photos, setPhotos] = useState({
    Childhood: [],
    Teenage: [],
    Recent: [],
  });

  const handlePhotoUpload = (event, category) => {
    const files = Array.from(event.target.files);
    const newPhotos = [...photos[category]];
    files.forEach((file) => {
      if (newPhotos.length < 3) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotos((prev) => ({
            ...prev,
            [category]: [...prev[category], e.target.result],
          }));
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleRemovePhoto = (category, index) => {
    const updated = photos[category].filter((_, i) => i !== index);
    setPhotos((prev) => ({ ...prev, [category]: updated }));
  };

  return (
    <>
      <Header />
      <section className="mainDiv">
        {/* Steps Section */}
        <div className="flex items-center justify-center">
          {/* Step 1 */}
          <div className="flex items-center">
            <Link href="/add-music" passHref>
              <div className="flex items-center justify-center w-12 h-12 rounded-full readto-start-bg text-white">
                {/* Music Icon */}
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.75 43.625C21.75 46.1114 20.7623 48.496 19.0041 50.2541C17.246 52.0123 14.8614 53 12.375 53C9.8886 53 7.50403 52.0123 5.74587 50.2541C3.98772 48.496 3 46.1114 3 43.625C3 41.1386 3.98772 38.754 5.74587 36.9959C7.50403 35.2377 9.8886 34.25 12.375 34.25C14.8614 34.25 17.246 35.2377 19.0041 36.9959C20.7623 38.754 21.75 41.1386 21.75 43.625ZM21.75 43.625V3H53V43.625M53 43.625C53 46.1114 52.0123 48.496 50.2541 50.2541C48.496 52.0123 46.1114 53 43.625 53C41.1386 53 38.754 52.0123 36.9959 50.2541C35.2377 48.496 34.25 46.1114 34.25 43.625C34.25 41.1386 35.2377 38.754 36.9959 36.9959C38.754 35.2377 41.1386 34.25 43.625 34.25C46.1114 34.25 48.496 35.2377 50.2541 36.9959C52.0123 38.754 53 41.1386 53 43.625ZM21.75 15.5H53"
                    stroke="#ffffff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <div className="w-[50px] h-[2px] readto-start-bg" />
          </div>
          {/* Step 2 */}
          <div className="flex items-center">
            <Link href="" passHref>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.5789 16.1579H34.6053M28 50.3684H10.8947C8.80092 50.3684 6.79287 49.5367 5.31232 48.0561C3.83176 46.5756 3 44.5675 3 42.4737V10.8947C3 8.80092 3.83176 6.79287 5.31232 5.31232C6.79287 3.83176 8.80092 3 10.8947 3H42.4737C44.5675 3 46.5756 3.83176 48.0561 5.31232C49.5367 6.79287 50.3684 8.80092 50.3684 10.8947V28M3 37.2105L16.1579 24.0526C18.6 21.7026 21.6105 21.7026 24.0526 24.0526L34.5789 34.5789M31.9474 31.9474L34.5789 29.3158C36.3421 27.6211 38.3947 27.1474 40.3211 27.8948M37.2105 45.1053H53M45.1053 37.2105V53"
                    stroke="#121212"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <div className="w-16 h-[2px] bg-gray-300" />
          </div>
          {/* Step 3 */}
          <div className="flex items-center">
            <Link href="" passHref>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
                <svg
                  width={23}
                  height={24}
                  viewBox="0 0 63 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.3682 13.7192V29.9578L60 41V3L47.3682 13.7192Z"
                    stroke="#121212"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.80884 3H37.7289C42.3775 3 47.3334 6.8095 47.3334 11.8762V37.8302C47.341 38.6587 47.0207 39.4566 46.4423 40.0498C45.8638 40.6431 45.0743 40.9835 44.2459 40.9968H11.398C6.11917 40.9968 3 36.2468 3 31.4968L3.03167 6.1635C2.97209 5.7634 3.00014 5.35513 3.11386 4.96693C3.22759 4.57874 3.42428 4.21987 3.69033 3.91517C3.95315 3.61423 4.28032 3.37628 4.64759 3.21896C5.01487 3.06163 5.41283 2.98896 5.812 3.00633L5.80884 3Z"
                    stroke="#121212"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-white lg:text-4xl text-2xl text-center mt-10 mb-2">
            Photos from time in your life
          </h2>
          <p className="text-center text-[#BBBBBB] text-small">
            Choose photo for each chapter of their life.
          </p>

          {/* Cards Section */}
          <section className="grid grid-cols-2 gap-6 max-w-[850px] mx-auto mt-10">
            {["Childhood", "Teenage", "Recent"].map((category) => (
              <div
                key={category}
                className="bg-[#282828] rounded-xl flex flex-col items-center justify-center lg:py-20 py-10   hover:bg-[#2a2a2a] transition text-white"
              >
                <svg
                  width={56}
                  height={56}
                  viewBox="0 0 108 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.1579 30.3158H67.2105M54 98.7368H19.7895C15.6018 98.7368 11.5857 97.0733 8.62463 94.1122C5.66353 91.1511 4 87.135 4 82.9474V19.7895C4 15.6018 5.66353 11.5857 8.62463 8.62463C11.5857 5.66353 15.6018 4 19.7895 4H82.9474C87.135 4 91.1511 5.66353 94.1122 8.62463C97.0733 11.5857 98.7368 15.6018 98.7368 19.7895V54M4 72.421L30.3158 46.1052C35.2 41.4052 41.2211 41.4052 46.1053 46.1052L67.1579 67.1579M61.8947 61.8948L67.1579 56.6316C70.6842 53.2421 74.7895 52.2948 78.6421 53.7895M72.4211 88.2105H104M88.2105 72.4211V104"
                    stroke="white"
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="text-2xl font-medium mt-4">{category}</h3>
                <p className="text-sm text-gray-400">Upload up to 3 photos</p>

                {/* Inline Upload + Preview */}
                <div className="flex gap-2 mt-4">
                  {photos[category].map((src, index) => (
                    <div key={index} className="relative">
                      <img
                        src={src}
                        alt=""
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <button
                        onClick={() => handleRemovePhoto(category, index)}
                        className="absolute top-1 right-1 bg-black/70 text-xs px-2 rounded-full"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {photos[category].length < 3 && (
                    <label className="flex items-center justify-center w-20 h-20 border border-dashed border-gray-500 rounded-md cursor-pointer hover:bg-[#333]">
                      +
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(e, category)}
                      />
                    </label>
                  )}
                </div>
              </div>
            ))}

            {/* Next CTA */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center cursor-pointer transition hover:opacity-90 lg:py-20 py-10">
               <svg
                width={70}
                height={70}
                viewBox="0 0 202 202"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101 0L104.272 0.0505018C130.762 0.909224 155.852 12.1459 174.132 31.3368C192.412 50.5277 202.416 76.1349 201.987 102.635C201.557 129.135 190.729 154.405 171.837 172.994C152.945 191.582 127.503 202 101 202C74.4966 202 49.0551 191.582 30.1631 172.994C11.2712 154.405 0.442686 129.135 0.0132739 102.635C-0.416138 76.1349 9.58794 50.5277 27.8677 31.3368C46.1475 12.1459 71.2381 0.909224 97.7276 0.0505018L101 0ZM107.191 52.6217C105.161 51.052 102.61 50.3139 100.055 50.5572C97.5009 50.8005 95.1348 52.0071 93.4376 53.9319C91.7405 55.8566 90.8396 58.3552 90.9179 60.9201C90.9962 63.485 92.0479 65.924 93.8593 67.7415L116.998 90.9011H60.6L59.4183 90.9718C56.862 91.2759 54.5183 92.5446 52.8661 94.5187C51.2138 96.4928 50.3777 99.0233 50.5286 101.593C50.6794 104.163 51.8059 106.578 53.6778 108.346C55.5497 110.113 58.0257 111.099 60.6 111.101H116.998L93.8593 134.261L93.021 135.21C91.4513 137.24 90.7132 139.792 90.9566 142.346C91.1999 144.901 92.4065 147.267 94.3312 148.964C96.2559 150.661 98.7544 151.562 101.319 151.484C103.884 151.406 106.323 150.354 108.141 148.543L148.541 108.142L149.278 107.314L149.924 106.415L150.551 105.274L150.995 104.163L151.298 103.031L151.47 101.759L151.5 101.001L151.429 99.8094L151.136 98.3146L150.783 97.2541L150.238 96.1128L149.52 94.9917C149.222 94.5911 148.895 94.213 148.541 93.8605L108.141 53.46L107.191 52.6217Z"
                  fill="white"
                />
              </svg>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}
