import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "DASH | OTP",
  description: "DASH dashboard",
};

export default function otp() {
  return (
    <>
      <Header />
      <section className=" login-page relative">
        <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-[#282828] rounded-[30px]  border border-[#3F3F3F] md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6   sm:p-8">
              <h1 className="text-[25px] font-[400] leading-tight tracking-tight text-center text-[#fff] md:text-2xl mb-0">
                Enter the 5-digit code
              </h1>
              <div className="text-center text-[14px] text-[#A6A6A6]">
                We’ve sent a code to your phone number
              </div>
              <form className="space-y-4 md:space-y-6 mt-5" action="#">
                <div>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[8px] w-[56px] h-[56px] text-center focus:outline-none focus:border-none focus:ring-0"
                        name={`otp-${index + 1}`}
                        inputMode="numeric"
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center text-white">
                  Didn’t get a code?{" "}
                  <span className="text-white underline cursor-pointer">
                    {" "}
                    Resend
                  </span>
                </div>

                <Link href="#" passHref>
                  <button
                    className="mainBtn h-[52px] mt-3 text-[18px] font-[600] inline-flex items-center justify-center px-6 w-full"
                    type="submit"
                  >
                    Verify
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
