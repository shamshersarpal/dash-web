import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import google from "@/images/google.svg";

export default function Register() {
  return (
    <>
      <Header />
      <section className="register lg:px-0 px-4 pt-[150px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full max-w-[1070px] register-box mx-auto rounded-t-[40px] lg:p-[50px] p-5  lg:px-[60px] ">
            <h2 className="text-center text-white lg:text-[48px] text-[27px] font-[500] lg:mb-10 mb-5">
              Login
            </h2>

            <form>
              <input
                className="w-full lg:h-[103px] h-[60px] bg-[#454140d1] rounded-[20px] border border-white lg:text-[32px] text-[16px] font-[400] text-[#9E9F9E] px-8 mb-4"
                type="text"
                placeholder="Email or Mobile Number"
              />

              <div className="relative">
                <input
                  className="w-full lg:h-[103px] h-[60px] bg-[#454140d1] rounded-[20px] border border-white lg:text-[32px] text-[16px] font-[400] text-[#9E9F9E] px-8 mb-4"
                  type="password"
                  placeholder="Enter Password"
                />
                <Link href=" " passHref>
                  <h4 className="text-[#14F6FE] lg:text-[32px] text-[18px] font-[400] cursor-pointer">
                    Forgot Password?
                  </h4>
                </Link>
              </div>

              <button
                className="btn-theme w-full lg:h-[103px] h-[66px] mt-8 lg:text-[32px] text-[16px] font-[900] cursor-pointer"
                type="sumbit"
              >
                {" "}
                Login
              </button>

              <button
                className="btn-theme-2 w-full lg:h-[103px] h-[66px] mt-8 lg:text-[32px] text-[16px] font-[900] cursor-pointer"
                type="sumbit"
              >
                {" "}
                <span className="flex items-center lg:gap-4 gap-2">
                  <Image className="lg:w-auto w-[30px]" src={google} alt="" />
                  Login with Google
                </span>
              </button>
            </form>

            <div className="text-center mt-5 pb-10">
              <h4 className="text-white lg:text-[32px] text-[18px] font-[400]">
                Not yet signed up?{" "}
                <Link href="Register" passHref>
                  <span className="text-[#14F6FE] font-[500] underline pointer-coarse:">
                    Sign Up
                  </span>
                </Link>{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
