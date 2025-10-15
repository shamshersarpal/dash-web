"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; 
export default function SideBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    }

    if (isUserDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  return (
    <> 
      <div className="flex items-center justify-end">
              {/* Sidebar Toggle Button */}
              <div className="fixed right-2 top-25">
                <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                type="button"
                className="fixed items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 relative z-[99]  bg-white "
              >
                <span className="sr-only">
                  {isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                </span>
                {isSidebarOpen ? (
                  // Close (X) Icon
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    />
                  </svg>
                ) : (
                  // Menu (Hamburger) Icon
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                )}
              </button>
              </div>
 
            </div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-[90px] transition-transform bg-[#1E1E20] border-r  border-[#3F3F3F]    ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#1E1E20]  ">
          <ul className="space-y-2 font-medium">
            <li className="text-[14px] text-[#A6A6A6] font-normal ps-2">
              My Account
            </li>
            <li>
              <Link href="profile" passHref legacyBehavior>
                <a className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16797 16.849C4.41548 16.0252 4.92194 15.3032 5.61222 14.79C6.30249 14.2768 7.13982 13.9997 7.99997 14H12C12.8612 13.9997 13.6996 14.2774 14.3904 14.7918C15.0811 15.3062 15.5874 16.0298 15.834 16.855M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10ZM7 8C7 8.79565 7.31607 9.55871 7.87868 10.1213C8.44129 10.6839 9.20435 11 10 11C10.7956 11 11.5587 10.6839 12.1213 10.1213C12.6839 9.55871 13 8.79565 13 8C13 7.20435 12.6839 6.44129 12.1213 5.87868C11.5587 5.31607 10.7956 5 10 5C9.20435 5 8.44129 5.31607 7.87868 5.87868C7.31607 6.44129 7 7.20435 7 8Z"
                        stroke="currentcolor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  <span className="ms-3">Profile</span>
                </a>
              </Link>
            </li>

            <li>
              <Link href="manage-dash" passHref legacyBehavior>
                <a className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                <svg
  className="w-6 h-6  "
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


                  <span className="ms-3">Manage Dash</span>
                </a>
              </Link>
            </li>


            <li>
              <Link href="templates" passHref legacyBehavior>
                <a className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                 <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.58 12.79C12.85 13.47 13 14.22 13 15C13 16.77 12.23 18.37 11 19.46M11 19.46C9.90531 20.4541 8.47871 21.0033 7 21C3.69 21 1 18.31 1 15C1 12.24 2.88 9.89999 5.42 9.20999M11 19.46C12.0947 20.4541 13.5213 21.0033 15 21C18.31 21 21 18.31 21 15C21 12.24 19.12 9.89999 16.58 9.20999M5 7C5 8.5913 5.63214 10.1174 6.75736 11.2426C7.88258 12.3679 9.4087 13 11 13C12.5913 13 14.1174 12.3679 15.2426 11.2426C16.3679 10.1174 17 8.5913 17 7C17 5.4087 16.3679 3.88258 15.2426 2.75736C14.1174 1.63214 12.5913 1 11 1C9.4087 1 7.88258 1.63214 6.75736 2.75736C5.63214 3.88258 5 5.4087 5 7Z"
                      stroke="currentcolor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>


                  <span className="ms-3">Templates</span>
                </a>
              </Link>
            </li>

            {/* Sidebar Dropdown */}
            

            <>
              <li>
                <Link href="payments" passHref legacyBehavior>
                  <a className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                   <svg
  className="  "
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
  />
</svg>


                    <span className="ms-3">Payments </span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="#" passHref legacyBehavior>
                  <a className="flex items-center p-2 text-white rounded-lg   hover:bg-gray-100 hover:text-gray-700   group font-[400]">
                     <svg
                      width={20}
                      height={18}
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5V3C8 2.46957 8.21071 1.96086 8.58579 1.58579C8.96086 1.21071 9.46957 1 10 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H10C9.46957 17 8.96086 16.7893 8.58579 16.4142C8.21071 16.0391 8 15.5304 8 15V13M13 9H1M1 9L4 6M1 9L4 12"
                        stroke="currentcolor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="ms-3">Logout</span>
                  </a>
                </Link>
              </li> 
            </>
          </ul>
        </div>
      </aside>
    </>
  );
}
