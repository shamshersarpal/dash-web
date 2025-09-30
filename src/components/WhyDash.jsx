import Image from "next/image";
import whyus from "../images/whyuse.png";
import mark from "../images/mark.svg";
import learnmorebtn from "../images/learn-more.svg";

export default function WhyDash() {
  return (
    <>
      <section className=" ">
        
        <div className="max-w-screen-xl  mx-auto px-4">
         
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="pt-15">
              <Image
                className="w-full lg:max-w-[518px] max-w-[318px] mx-auto px-5 lg:px-0 border lg:border-0 border-r-[#242424] border-l-[#242424] lg:pt-0 pt-15 lg:pb-0 pb-15"
                src={whyus}
                alt=""
              />
            </div>
            <div className="lg:ps-10 lg:pt-[120px] pt-[20px] px-5 lg:px-0">
              

              <div className="lisits mt-5">
                <ul className="space-y-1 text-gray-500 list-inside">
                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white">
                        {" "}
                        IMPORTANCE.
                      </span>{" "}
                      Most of us will have one celebration of life, one wedding,
                      one graduation, one important life ceremony so we want to
                      tell those life stories how they deserved to be told.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white">
                        {" "}
                        EXPERIENCE.
                      </span>{" "}
                      This is a calling. Splicing music, sound mixing, and
                      placing certain photos with song lyrics...these are all
                      included in your video photo stories.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white"> TIME.</span>{" "}
                      Spend more time with loved ones while we do this for you.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white"> QUALITY.</span>{" "}
                      Experience beautiful printed cards/programs, plaques,
                      keepsakes, all made here in the U.S.A. utilizing
                      independent businesses with ethical wages and working
                      conditions in California, Washington, Nevada, New Mexico,
                      New York, Florida, and growing.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <Image src={mark} width={20} height={20} alt="" />
                    <div className="text-white/60 text-[16px] ">
                      <span className="font-[600] text-white">LOVE.</span> Heart
                      and soul into every slideshow.
                    </div>
                  </li>

                  <li className="flex items-start gap-2 mb-4">
                    <div className="text-white text-[16px] ">
                      You only get one chance to get this right. Long after you
                      forget price... quality remains.
                    </div>
                  </li>
                </ul>

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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
