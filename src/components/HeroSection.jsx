import Image from "next/image";
import qr from "../images/hero-qr.png";
import Link from "next/link";
export default function Herosection() {
  return (
    <>
      <section className="relative banner py-[150px]">
        <div className="bg-[#121212] absolute w-full h-full top-0 left-0 opacity-[0.2]"></div>

        <div className="max-w-screen-xl mx-auto relative z-0 px-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#55436C] bg-[#1a1a1d] text-white w-fit">
                <span className="text-lg">we are available</span>
                <span className="w-3 h-3 rounded-full bg-pink-500" />
              </div>

              <h1 className="text-white lg:text-[90px] text-[60px] font-[800] font-ws leading-[1] mt-6">
                Life stories on a <span className="bg-text">QR code</span>
              </h1>
              <p className="text-white font-[100] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>

              <a
                className="mainBtn h-[52px] mt-3 text-[18px] font-[600] inline-flex items-center justify-center px-6"
                href=""
              >
                Get Started{" "}
                <span>
                  <svg
                    className="w-6 h-6 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="flex justify-end">
              <div className=" hidden lg:block">
                <Image className="max-w-[450px]" src={qr} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
