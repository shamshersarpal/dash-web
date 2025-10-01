"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../images/logo.png";
import cart from "../images/cart.svg";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 ${
          isScrolled
            ? "bg-[#121212] border border-b-[#797979]  "
            : "bg-[#121212] border border-b-[#797979]"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" passHref>
            <span className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                className="logo"
                src={logo}
                alt="Logo"
                width={176}
                height={47}
              />
            </span>
          </Link>
          <div className="flex items-center gap-10">
            <div className="">
              <div
                className={`items-center justify-between mob-menu ${
                  isOpen ? "block" : "hidden"
                } w-full md:flex md:w-auto md:order-1`}
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 font-[20px] md:space-x-8 rtl:space-x-reverse md:flex-row ">
                  <li>
                    <Link href="/" passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "myAccount"
                            ? "text-[#14F6FE]"
                            : "hover:text-[#ED0EEB] text-[#ED0EEB]"
                        }`}
                        aria-current="page"
                        onClick={() => handleItemClick("myAccount")}
                      >
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href=" " passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "travelAgents"
                            ? "text-white"
                            : "hover:text-[#ED0EEB] text-white"
                        }`}
                        onClick={() => handleItemClick("travelAgents")}
                      >
                        Shop
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href=" " passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "travelAgents"
                            ? "text-white"
                            : "hover:text-[#ED0EEB] text-white"
                        }`}
                        onClick={() => handleItemClick("travelAgents")}
                      >
                        About Us
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href=" " passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "travelAgents"
                            ? "text-white"
                            : "hover:text-[#ED0EEB] text-white"
                        }`}
                        onClick={() => handleItemClick("travelAgents")}
                      >
                       FAQ
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href=" " passHref>
                      <span
                        className={`block py-2 px-3 rounded-sm md:p-0 ${
                          activeItem === "travelAgents"
                            ? "text-white"
                            : "hover:text-[#ED0EEB] text-white"
                        }`}
                        onClick={() => handleItemClick("travelAgents")}
                      >
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:gap-4 gap-0 items-center">
                <div className="cart relative cursor-pointer">
                  <div className="counter">5</div>
                  <Image src={cart} alt="Cart" width={30} height={30} />
                </div>
              
                <Link href="LoginPhone" passHref>
                  <button type="button" className="loginBtn">
                    Login
                  </button>
                </Link>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-sticky"
                  aria-expanded={isOpen}
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    width={32}
                    height={23}
                    viewBox="0 0 32 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width={32}
                      height="3.17647"
                      rx="1.58824"
                      fill="white"
                    />
                    <rect
                      y="9.70508"
                      width="21.3333"
                      height="3.17647"
                      rx="1.58824"
                      fill="white"
                    />
                    <rect
                      y="19.8242"
                      width={32}
                      height="3.17647"
                      rx="1.58824"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
