"use client"
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import profileImage from "@/images/profile.jpg";

export default function Payments() {
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <>
      <Header />
      <section className="mt-20">
        <SideBar />
        <div className="w-full mx-auto">
          <div className="p-6 sm:ml-64">
            <div className="text-white font-[600] text-2xl">Payments</div>

            {/* ---------- Saved Cards Section ---------- */}
            <div className="bg-[#1E1E20] border border-[#595959] lg:p-8 p-4 rounded-[20px] h-full mt-5">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
                      Payment Methods
                    </h3>
                    <p className="text-sm text-white">
                      Manage your saved payment methods
                    </p>
                  </div>
                  <button
                    className="loginBtn"
                    onClick={() => setShowAddCard(!showAddCard)}
                  >
                    + Add New
                  </button>
                </div>
              </div>

              <div className="p-3 pt-0 space-y-4">
                {/* Card 1 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary border hover:border-[#ff0080] transition-colors text-white">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg readto-start-bg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-accent"
                      >
                        <rect width={20} height={14} x={2} y={5} rx={2} />
                        <line x1={2} x2={22} y1={10} y2={10} />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span>Visa •••• 4242</span>
                        <span className="px-2.5 py-0.5 text-xs bg-gray-500 rounded-full">
                          Default
                        </span>
                      </div>
                      <p className="text-sm">Expires 12/25</p>
                    </div>
                  </div>
                  <button className="h-10 w-10 flex items-center justify-center rounded-md text-muted-foreground bg-red-500 transition-colors cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1={10} x2={10} y1={11} y2={17} />
                      <line x1={14} x2={14} y1={11} y2={17} />
                    </svg>
                  </button>
                </div>

                {/* Card 2 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary border hover:border-[#ff0080] transition-colors text-white">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg readto-start-bg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-accent"
                      >
                        <rect width={20} height={14} x={2} y={5} rx={2} />
                        <line x1={2} x2={22} y1={10} y2={10} />
                      </svg>
                    </div>
                    <div>
                      <span>Mastercard •••• 8888</span>
                      <p className="text-sm">Expires 09/26</p>
                    </div>
                  </div>
                  <button className="h-10 w-10 flex items-center justify-center rounded-md text-muted-foreground bg-red-500 transition-colors cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1={10} x2={10} y1={11} y2={17} />
                      <line x1={14} x2={14} y1={11} y2={17} />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* ---------- Add New Card Section (Hidden by Default) ---------- */}
            {showAddCard && (
              <div className="bg-[#1E1E20] border border-[#595959] lg:p-8 p-4 rounded-[20px] h-full mt-5">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
                    Add Payment card
                  </h3>
                  <p className="text-sm text-white">
                    Add a new credit or debit card
                  </p>
                </div>

                <form className="space-y-4 md:space-y-6 mt-10" action="#">
                  <div className="grid lg:grid-cols-1 grid-cols-1 gap-5">
                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block mb-2 text-sm text-white"
                      >
                        Card Number<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cardNumber"
                        className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] ps-5 text-white rounded-[16px] block w-full p-2.5 focus:outline-none focus:ring-0 h-[56px]"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="holderName"
                        className="block mb-2 text-sm text-white"
                      >
                        Cardholder Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="holderName"
                        className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] ps-5 text-white rounded-[16px] block w-full p-2.5 focus:outline-none focus:ring-0 h-[56px]"
                        type="text"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cvc"
                        className="block mb-2 text-sm text-white"
                      >
                        CVC<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cvc"
                        className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] ps-5 text-white rounded-[16px] block w-full p-2.5 focus:outline-none focus:ring-0 h-[56px]"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-1 grid-cols-1 gap-5">
                    <div>
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm text-white"
                      >
                        Address<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="address"
                        className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] ps-5 text-white rounded-[16px] block w-full p-2.5 focus:outline-none focus:ring-0 h-[56px]"
                        type="text"
                      />
                    </div>
                  </div>

                  <button
                    className="mainBtn h-[52px] mt-1 text-[18px] font-[600] inline-flex items-center justify-center px-6 w-full"
                    type="submit"
                  >
                    Add Card
                  </button>
                </form>
              </div>
            )}

             <div className="bg-[#1E1E20] border border-[#595959] lg:p-8 p-4 rounded-[20px] h-full mt-5">
               <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-white">
                   Transaction History
                  </h3>
                  <p className="text-sm text-white">
                    View your recent transactions
                  </p>
                </div>

                <div className="space-y-3 mt-5 text-white">
  <div className="flex items-center justify-between p-4 rounded-lg bg-[#38383e] transition-colors">
    <div>
      <p className="  mb-1">Template Purchase - Template 1</p>
      <p className="text-sm text-gray-400">2024-10-10</p>
    </div>
    <div className="text-right">
      <p className="text-[#fb0283] mb-1">$29.99</p>
      <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs bg-green-500/20 text-green-400">
        Completed
      </div>
    </div>
  </div>

  <div className="flex items-center justify-between p-4 rounded-lg bg-[#38383e] transition-colors">
    <div>
      <p className=" mb-1">Template Purchase - Template 3</p>
      <p className="text-sm text-gray-400">2024-10-05</p>
    </div>
    <div className="text-right">
      <p className="  text-[#fb0283] mb-1">$39.99</p>
      <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs   bg-green-500/20 text-green-400">
        Completed
      </div>
    </div>
  </div>

  <div className="flex items-center justify-between p-4 rounded-lg bg-[#38383e] transition-colors">
    <div>
      <p className="  mb-1">Monthly Subscription</p>
      <p className="text-sm text-gray-400">2024-09-28</p>
    </div>
    <div className="text-right">
      <p className=" text-[#fb0283] mb-1">$19.99</p>
      <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs  bg-green-500/20 text-green-400">
        Completed
      </div>
    </div>
  </div>

  <div className="flex items-center justify-between p-4 rounded-lg bg-[#38383e] transition-colors">
    <div>
      <p className="  mb-1">Template Purchase - Template 2</p>
      <p className="text-sm text-gray-400">2024-09-15</p>
    </div>
    <div className="text-right">
      <p className="text-[#fb0283] mb-1">$34.99</p>
      <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs   bg-green-500/20 text-green-400">
        Completed
      </div>
    </div>
  </div>
</div>

             </div>
          </div>
        </div>
      </section>
    </>
  );
}
