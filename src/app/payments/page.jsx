import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/images/profile.jpg";

export default function Payments() {
  return (
    <>
      <Header />
      <section className="mt-20">
        <SideBar />
        <div className=" w-full mx-auto">
          <div className="p-6 sm:ml-64">
            <div className="text-white font-[600] text-2xl">Payments</div>

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
    <button className="loginBtn">
       
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
          <span className=" ">Visa •••• 4242</span>
          <span className="px-2.5 py-0.5 text-xs bg-gray-500 rounded-full ">
            Default
          </span>
        </div>
        <p className="text-sm  ">Expires 12/25</p>
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
        <span className=" ">Mastercard •••• 8888</span>
        <p className="text-sm ">Expires 09/26</p>
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
          </div>
        </div>
      </section>
    </>
  );
}
