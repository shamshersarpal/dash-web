import Image from "next/image";
import facebook from "../images/Facebook.svg";
import linkdin from "../images/LinkedIn.svg";
import twitter from "../images/TwitterX.svg";
import youtube from "../images/YouTube.svg";
import logo from "../images/logo.png";
import payment from "../images/payment.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="lg:hidden block  footer">
        <div className="max-w-screen-xl mx-auto ">
          <div className="px-4 pb-8">
            <div className="text-center flex justify-center">
              <Image
                className="logo"
                src={logo}
                alt="Logo"
                width={176}
                height={47}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Image src={payment} alt="" />
            </div>
          </div>

          <div className="border border-t-[#242424] ">
            <div className="border border-l-[#282828] border-r-[#282828] mx-4">
              <h4 className="text-white text-[18px] font-[600] px-2 pt-4">
                Company
              </h4>

              <div className="grid grid-cols-2 mt-4 px-2 pb-4">
                <ul className="max-w-md space-y-2 text-white/60 list-none list-inside text-[16px] font-[400]">
                  <li>
                    <Link href=" " passHref>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      {" "}
                      About{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Dashes{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Testimonials{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Why DASH?
                    </Link>
                  </li>
                </ul>

                <ul className="max-w-md space-y-2 text-white/60 list-none list-inside text-[16px] font-[400]">
                  <li>
                    <Link href=" " passHref>
                      Dash Poem
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Businesses
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      News & Articles
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border border-b-[#242424] border-t-[#242424] ">
            <div className="border border-l-[#282828] border-r-[#282828] mx-4">
              <h4 className="text-white text-[18px] font-[600] px-2 pt-4 text-center">
                Follow
              </h4>
              <div className="flex gap-2 items-center py-3 justify-center">
                <a href="" target="_blank">
                  <Image src={facebook} alt="" />
                </a>
                <a href="" target="_blank">
                  <Image src={linkdin} alt="" />
                </a>
                <a href="" target="_blank">
                  <Image src={twitter} alt="" />
                </a>
                <a href="" target="_blank">
                  <Image src={youtube} alt="" />
                </a>
              </div>
            </div>
          </div>
          <p className="text-[14px] text-white/60 text-center mt-4 px-4">
            ©2025  DASH is a Registered Trademark of DASHQRCODES,LLC. Redondo
            Beach, California
          </p>
        </div>
      </section>

      <section className="footer lg:block hidden">
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid grid-cols-3 gap-10">
            <div className="">
              <h4 className="text-white text-[18px] font-[700]">Follow</h4>
              <div className="flex gap-2 items-center mt-5">
                <a href="" target="_blank">
                  <Image src={facebook} alt="" />
                </a>
                <a href="" target="_blank">
                  <Image src={linkdin} alt="" />
                </a>
                <a href="" target="_blank">
                  <Image src={twitter} alt="" />
                </a>
                <a href="" target="_blank">
                  <Image src={youtube} alt="" />
                </a>
              </div>
            </div>

            <div>
              <div className="text-center flex justify-center">
                <Image
                  className="logo"
                  src={logo}
                  alt="Logo"
                  width={176}
                  height={47}
                />
              </div>
              <div className="flex justify-center mt-4">
                <Image src={payment} alt="" />
              </div>
              <p className="text-[14px] text-white/60 text-center mt-4">
                ©2025  DASH is a Registered Trademark of DASHQRCODES,LLC.
                Redondo Beach, California
              </p>
            </div>

            <div className="">
              <h4 className="text-white text-[18px] font-[700]">COMPANY</h4>
              <div className="grid grid-cols-3">
                <ul className="max-w-md space-y-1 text-white list-none list-inside text-[16px] font-[400]">
                  <li>
                    <Link href=" " passHref>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      {" "}
                      About{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Dashes{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Testimonials{" "}
                    </Link>
                  </li>
                </ul>

                <ul className="max-w-md space-y-1 text-white list-none list-inside text-[16px] font-[400]">
                  <li>
                    <Link href=" " passHref>
                      Why DASH?
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Dash Poem
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Businesses
                    </Link>
                  </li>
                </ul>

                <ul className="max-w-md space-y-1 text-white list-none list-inside text-[16px] font-[400]">
                  <li>
                    <Link href=" " passHref>
                      News & Articles
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
