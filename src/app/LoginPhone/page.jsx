import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import google from "@/images/google.svg";

export const metadata = {
  title: "DASH | Phone Login",
  description: "DASH dashboard",
};

export default function LoginPhone() {
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
                    <div className="bg-white  text-[#252525] text-center p-3 rounded-[50px] w-[150px] m-2   text-[14px] font-[500] cursor-pointer shadow-sm">
                      Phone
                    </div>
                  </Link>

                  <Link href="LoginEmail" passHref legacyBehavior>
                    <div className=" text-[#252525] text-center p-3 rounded-[50px] w-[150px] m-2  text-[14px] font-[500] cursor-pointer">
                      Email
                    </div>
                  </Link>
                </div>
               <div>
  <label
    htmlFor="phone"
    className="block mb-2 text-sm text-white"
  >
    Phone Number
  </label>

  <div className="flex items-center bg-gray-100 rounded-[16px] overflow-hidden h-[56px]">
    {/* Country Code Input */}
    <input
      type="text"
      id="countryCode"
      name="countryCode"
      placeholder="US +1"
      className="w-24 bg-gray-100 text-gray-700 placeholder-gray-500 px-4 focus:outline-none border-r border-gray-300"
    />

    {/* Phone Input */}
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="Phone Number"
      className="flex-1 bg-gray-100 text-gray-700 placeholder-gray-500 px-4 focus:outline-none"
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
