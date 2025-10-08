"use client";

import { useRef, useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function PlayDashPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleVideoToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Update progress bar as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(percent);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <>
      <Header />
      <section className="mainDiv">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {/* LEFT SIDE CONTENT */}
            <div className="m-auto">
              <h2 className="text-white font-ws lg:text-[47px] font-[500] text-[37px] leading-[1.2]">
                Ready for add to DASH
              </h2>
              <p className="text-white">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <div className="flex justify-start items-center gap-3 mt-5">
                 <Link href="/add-music" passHref>
                <button className="bg-transparent border border-white text-white rounded-full px-4 py-2 text-sm font-semibold min-w-[164px] h-[52px] mt-3 text-[18px] font-[600] inline-flex items-center justify-center px-6 cursor-pointer">
                  Edit
                </button>
                </Link>

                 <Link href="add-info" passHref>
                <button className="mainBtn h-[52px] mt-3 text-[18px] font-[600] inline-flex items-center justify-center px-6">
                  Add to DASH
                </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE VIDEO */}
            <div>
              <section className="flex flex-col items-center justify-center min-h-screen">
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-[330px] h-[566px]">
                  
                  {/* Video */}
                  <video
                    ref={videoRef}
                    onClick={handleVideoToggle}
                    className="w-full h-full object-cover cursor-pointer"
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    loop
                  />

                  {/* Play/Pause Button */}
                  <button
                    onClick={handleVideoToggle}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {!isPlaying ? (
                      <div className="bg-black/40 rounded-full p-4 hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6 4l10 6-10 6V4z" />
                        </svg>
                      </div>
                    ) : null}
                  </button>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
                    <div
                      className="h-1 bg-pink-500 transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
