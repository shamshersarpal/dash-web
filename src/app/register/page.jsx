import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import google from "@/images/google.svg";

export const metadata = {
  title: "DASH | Register",
  description: "DASH",
};

export default function Register() {
  return (
    <>
      <Header />
      <section className=" login-page relative mainDiv">
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-[#282828] rounded-[30px]  border border-[#3F3F3F] md:mt-0 sm:max-w-4xl xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-[25px] font-[400] leading-tight tracking-tight text-center text-[#fff] md:text-2xl">
                Register
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="text"
                      name="text"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="Email"
                      name="text"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="number"
                      name="text"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="text"
                      name="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Uploade Image<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px] cursor-pointer"
                      placeholder=" "
                      type="file"
                      name="text"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block bg-gray-50 border border-gray-300 text-gray-900 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0"
                      placeholder="Write your thoughts here..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div></div>
                <Link href="" passHref>
                  <button
                    className="mainBtn h-[52px] mt-1 text-[18px] font-[600] inline-flex items-center justify-center px-6 w-full"
                    type="sumbit"
                  >
                    {" "}
                    Register
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
