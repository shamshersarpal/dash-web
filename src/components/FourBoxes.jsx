import Image from "next/image";
import oneImag from "../images/Unlimited-storage-space.svg";
import twoImag from "../images/Data-protection-guaranteed.svg";
import threeImag from "../images/Security-in-cas- of-loss.svg";
import fourImag from "../images/One-off-payment.svg";

export default function ForBoxes() {
  return (
    <>
      <section className="max-w-screen-xl  mx-auto lg:px-0 px-4">
         <h2 className="text-white text-center font-ws lg:text-[47px] font-[500] text-[37px] leading-[1.2]">
                Why Use <span className="bg-text">DASH</span>?
              </h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 text-center mt-10 ">
          <div className="bg-[#222222] text-center m-auto border border-[#242424] rounded-[30px] lg:p-4 p-3 h-full">
            <div className="flex items-center justify-center">
              <Image
                className="lg:h-[168px] lg:w-auto w-[100px]"
                src={oneImag}
                alt=""
              />
            </div>
            <h3 className="text-white font-[500] lg:text-[19px] text-[18px]">
              Unlimited storage space
            </h3>
            <p className="font-[400] lg:text-[16px] text-[13px] text-white/60">
              Keep every precious memory of your loved ones safe
            </p>
          </div>

          <div className="bg-[#222222] text-center m-auto border border-[#242424] rounded-[30px] lg:p-4 p-3 h-full">
            <div className="flex items-center justify-center">
              <Image
                className="lg:h-[168px] lg:w-auto w-[100px]"
                src={twoImag}
                alt=""
              />
            </div>
            <h3 className="text-white font-[500] lg:text-[19px] text-[18px]">
              Data protection guaranteed
            </h3>
            <p className="font-[400] lg:text-[16px] text-[13px] text-white/60">
              You alone decide who can look at your Dash
            </p>
          </div>

          <div className="bg-[#222222] text-center m-auto border border-[#242424] rounded-[30px] lg:p-4 p-3 h-full">
            <div className="flex items-center justify-center">
              <Image
                className="lg:h-[168px] lg:w-auto w-[100px]"
                src={threeImag}
                alt=""
              />
            </div>
            <h3 className="text-white font-[500] lg:text-[19px] text-[18px]">
              Security in case of loss
            </h3>
            <p className="font-[400] lg:text-[16px] text-[13px] text-white/60">
              Immediate replacement if your Dash is stolen or lost*
            </p>
          </div>

          <div className="bg-[#222222] text-center m-auto border border-[#242424] rounded-[30px] lg:p-4 p-3 h-full">
            <div className="flex items-center justify-center">
              <Image
                className="lg:h-[168px] lg:w-auto w-[100px]"
                src={fourImag}
                alt=""
              />
            </div>
            <h3 className="text-white font-[500] lg:text-[19px] text-[18px]">
              One-off payment
            </h3>
            <p className="font-[400] lg:text-[16px] text-[13px] text-white/60">
              Lifetime service without any hidden costs or subscription traps
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
