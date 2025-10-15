import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import google from "@/images/google.svg";

export const metadata = {
  title: "DASH | Email Login",
  description: "DASH dashboard",
};

export default function LoginEmail() {
  return (
    <>
      <Header />
      <section className=" login-page relative mainDiv">
        <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-[#282828] rounded-[30px]  border border-[#3F3F3F] md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-[25px] font-[400] leading-tight tracking-tight text-center text-[#fff] md:text-2xl">
                Enter phone or email
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                 <div className="w-full rounded-[50px] bg-[#EBEBEB] flex items-center justify-between">
                  <Link href="LoginPhone" passHref legacyBehavior>
                    <div className=" text-[#252525] text-center p-3 rounded-[50px] w-[150px] m-2  text-[14px] font-[500] cursor-pointer">
                      Phone
                    </div>
                  </Link>

                  <Link href="LoginEmail" passHref legacyBehavior>
                    <div className="bg-white  text-[#252525] text-center p-3 rounded-[50px] w-[150px] m-2   text-[14px] font-[500] cursor-pointer shadow-sm">
                      Email
                    </div>
                  </Link>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm  text-[#ffffff]"
                  >
                    Email
                  </label>
                  <div className="flex items-center">
                    <input
                      type="email"
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder="Email address"
                      name="text"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a href="#" className="text-sm text-white hover:underline">
                    View our Privacy Policy
                  </a>
                </div>
                <Link href="otp" passHref>
                  <button
                    className="mainBtn h-[52px] mt-3 text-[18px] font-[600] inline-flex items-center justify-center px-6 w-full"
                    type="sumbit"
                  >
                    {" "}
                    Login
                  </button>
                </Link>

                   <div className="flex justify-center items-center gap-x-2 mb-0 pt-3">
                  <div className="w-[40px] h-[1.5px] bg-white"></div>
                   <div className="text-white">OR</div>
                    <div className="w-[40px] h-[1.5px] bg-white"></div>
                </div>
                <>
  <div className="space-y-3">
    <button
      type="button"
      className="h-[52px] w-full mt-3 text-[18px] inline-flex items-center justify-center gap-3 px-6 rounded-full cursor-pointer text-white transition text-[16px] font-[500] bg-[#FF0063]"
    >
      <svg
  className="w-6 h-6  "
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
    clipRule="evenodd"
  />
</svg>

      Continue with Google
    </button>
    {/* Apple Login */}
    <button
      type="button"
      className="h-[52px] w-full text-[18px]   inline-flex items-center justify-center gap-3 px-6 rounded-full bg-[#000000] cursor-pointer text-white   transition text-[16px] font-[500]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M16.365 1.43c-.958.046-2.1.637-2.78 1.437-.606.707-1.138 1.835-.937 2.91 1.09.036 2.21-.56 2.91-1.35.665-.745 1.17-1.85.96-2.997-.017-.06-.062-.095-.153-.095zM20.72 17.16c-.465.97-.682 1.4-1.28 2.26-.83 1.21-2 2.73-3.45 2.74-1.3.01-1.64-.79-3.42-.79-1.77 0-2.17.77-3.45.8-1.46.02-2.59-1.39-3.42-2.6-2.35-3.36-2.6-7.29-1.14-9.38.99-1.45 2.56-2.3 4.05-2.3 1.49 0 2.43.78 3.66.78 1.19 0 1.91-.78 3.64-.78 1.31 0 2.7.72 3.68 1.95-3.24 1.78-2.72 6.42.63 7.37z" />
      </svg>
      Continue with Apple
    </button>
    {/* Facebook Login */}
    <button
      type="button"
      className="h-[52px] w-full text-[18px]   inline-flex items-center justify-center gap-3 px-6 rounded-full bg-[#1877F2] cursor-pointer text-white  transition text-[16px] font-[500]"
    >
      <svg
  className="w-6 h-6 "
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
    clipRule="evenodd"
  />
</svg>

      Continue with Facebook
    </button>
  </div>
  
   
</>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
