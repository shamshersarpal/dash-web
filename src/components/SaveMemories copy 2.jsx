import Image from "next/image";
import stepOne from "../images/Memories-1.svg";
import stepTwo from "../images/Memories-2.svg";
import stepThree from "../images/Memories-3.svg";
import one from "../images/one.svg";
import two from "../images/two.svg";
import three from "../images/three.svg";
export default function SaveMemories() {
  return (
    <>
      <div className="text-center pt-20 mb-10">
        <h2 className="text-white font-ws lg:text-[47px] font-[500] text-[37px] leading-[1.2] lg:block hidden">
          Save Memories in{" "}
          <span className="text-[#ED0EEB] font-[900]">3 Steps</span>
        </h2>

        <h2 className="text-white font-ws lg:text-[47px] font-[500] text-[37px] leading-[1.2] block lg:hidden">
          Save Memories <br></br> in{" "}
          <span className="text-[#ED0EEB] font-[900]">3 Steps</span>
        </h2>
      </div>
      <section className=" border border-t-[#242424] border-b-[#242424]">
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="flex justify-center items-start border border-r-[#242424] border-l-[#242424] w-full py-20">
              <div>
                <Image className="h-[400px]" src={stepOne} alt="" />
                <h3 className="text-[27px] font-[500] text-white text-center mt-5">
                  Scan the QR
                </h3>
              </div>
              <Image src={one} alt="" />
            </div>

            <div className="flex justify-center items-start border border-r-[#242424] w-full py-20">
              <div>
                <Image className="h-[400px]" src={stepTwo} alt="" />
                <h3 className="text-[27px] font-[500] text-white text-center mt-5">
                  Set up profile
                </h3>
              </div>
              <Image className="relative left-[40px]" src={two} alt="" />
            </div>

            <div className="flex justify-center items-start py-20 border border-r-[#242424]">
              <div>
                <Image
                  className="h-[400px] relative left-[20px]"
                  src={stepThree}
                  alt=""
                />
                <h3 className="text-[27px] font-[500] text-white text-center mt-5">
                  Memorial page is active
                </h3>
              </div>
              <Image src={three} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
