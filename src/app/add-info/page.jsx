import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function AddInfoPage() {
  return (
    <>
      <Header />
      <section className="login-page relative">
        <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* Card Box */}
          <div className="w-full bg-[#282828] rounded-[30px] border border-[#3F3F3F] md:mt-0 sm:max-w-md xl:p-0 overflow-hidden">
            <div className="p-6 space-y-6 sm:p-8 relative">
              {/* Title */}
              <h1 className="text-[25px] font-[500] text-center text-[#fff] md:text-2xl mb-4">
                Add to Dash
              </h1>
 

              {/* Form */}
              <form className="space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter full Name"
                    className="bg-transparent border border-[#555] text-white rounded-[16px] block w-full p-3 h-[52px] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Birth Date */}
                <div className="relative">
                  <input
                    type="date"
                    placeholder="Birth Date"
                    className="bg-transparent border border-[#555] text-white rounded-[16px] block w-full p-3 h-[52px] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <span className="absolute right-4 top-3 text-gray-400">
                    📅
                  </span>
                </div>

                {/* Death Date */}
                <div className="relative">
                  <input
                    type="date"
                    placeholder="Death Date"
                    className="bg-transparent border border-[#555] text-white rounded-[16px] block w-full p-3 h-[52px] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <span className="absolute right-4 top-3 text-gray-400">
                    📅
                  </span>
                </div>

                {/* Quote */}
                <div>
                  <input
                    type="text"
                    placeholder="Quote (Optional)"
                    className="bg-transparent border border-[#555] text-white rounded-[16px] block w-full p-3 h-[52px] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col items-center space-y-3 pt-4">
                  <button
                    type="submit"
                    className="mainBtn h-[52px] w-full text-[18px] font-[600] inline-flex items-center justify-center px-6"
                  >
                    NEXT
                  </button>
                  <Link
                    href="play-dash"
                    className="text-white text-[16px] hover:underline"
                  >
                    Back
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
