"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function DashCreateing() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dash-card-list"); // redirect after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, [router]);

  return (
    <>
      <Header />
      <section className="login-page relative">
        <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-[#282828] rounded-[30px] border border-[#3F3F3F] md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 sm:p-8">
              <div className="text-center flex items-center justify-center mb-4">
                <div className="w-[100px] h-[100px] flex items-center justify-center bg-red-500 rounded-full readto-start-bg">
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.75 44.25V44.2825M11.75 11.75V11.7825M44.25 11.75V11.7825M44.25 34.5H34.5V44.25M54 34.5V34.5325M34.5 54H44.25M44.25 44.25H54V54M2 5.25C2 4.38805 2.34241 3.5614 2.9519 2.9519C3.5614 2.34241 4.38805 2 5.25 2H18.25C19.112 2 19.9386 2.34241 20.5481 2.9519C21.1576 3.5614 21.5 4.38805 21.5 5.25V18.25C21.5 19.112 21.1576 19.9386 20.5481 20.5481C19.9386 21.1576 19.112 21.5 18.25 21.5H5.25C4.38805 21.5 3.5614 21.1576 2.9519 20.5481C2.34241 19.9386 2 19.112 2 18.25V5.25ZM34.5 5.25C34.5 4.38805 34.8424 3.5614 35.4519 2.9519C36.0614 2.34241 36.888 2 37.75 2H50.75C51.612 2 52.4386 2.34241 53.0481 2.9519C53.6576 3.5614 54 4.38805 54 5.25V18.25C54 19.112 53.6576 19.9386 53.0481 20.5481C52.4386 21.1576 51.612 21.5 50.75 21.5H37.75C36.888 21.5 36.0614 21.1576 35.4519 20.5481C34.8424 19.9386 34.5 19.112 34.5 18.25V5.25ZM2 37.75C2 36.888 2.34241 36.0614 2.9519 35.4519C3.5614 34.8424 4.38805 34.5 5.25 34.5H18.25C19.112 34.5 19.9386 34.8424 20.5481 35.4519C21.1576 36.0614 21.5 36.888 21.5 37.75V50.75C21.5 51.612 21.1576 52.4386 20.5481 53.0481C19.9386 53.6576 19.112 54 18.25 54H5.25C4.38805 54 3.5614 53.6576 2.9519 53.0481C2.34241 52.4386 2 51.612 2 50.75V37.75Z"
                      stroke="white"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-[25px] font-[400] leading-tight tracking-tight text-center text-[#fff] md:text-2xl mb-0">
               Dash is being created...
              </h1>

              <div className="text-center flex items-center justify-center mt-4">
                <div className="flex justify-center items-center h-20 w-20">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
