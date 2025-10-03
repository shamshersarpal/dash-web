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
      <section className=" login-page relative">
        <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
