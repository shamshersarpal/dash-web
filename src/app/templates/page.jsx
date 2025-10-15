import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import proOne from "@/images/pro-1.jpg";
import proTwo from "@/images/pro-2.jpg";
import proThree from "@/images/pro-3.jpg";
import proFour from "@/images/pro-4.jpg";
import proFive from "@/images/pro-5.jpg";

export default function Templates(){
    return(
        <>
        <Header/>
        <section className="mt-20">
            <SideBar/>
          <div className=" w-full mx-auto">
            <div className="p-6 sm:ml-64">
            <div className="text-white font-[600] text-2xl">Templates</div>

            <div className=" mt-8 rounded-[20px] h-full ">
                 
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

              <div className="relative">
  <div className="w-full bg-[#282828] rounded-[30px] border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden border-[#3F3F3F]">
      <Image className="w-full h-auto mb-4 rounded-[20px]" src={proOne} alt=""/>
    <h3 className="text-white text-xl mb-2 text-center">Templates 1</h3>
  </div>
</div>

   <div className="relative">
  <div className="w-full bg-[#282828] rounded-[30px] border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden border-[#3F3F3F]">
      <Image className="w-full h-auto mb-4 rounded-[20px]" src={proTwo} alt=""/>
    <h3 className="text-white text-xl mb-2 text-center">Templates 2</h3>
  </div>
</div>

   <div className="relative">
  <div className="w-full bg-[#282828] rounded-[30px] border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden border-[#3F3F3F]">
      <Image className="w-full h-auto mb-4 rounded-[20px]" src={proThree} alt=""/>
    <h3 className="text-white text-xl mb-2 text-center">Templates 3</h3>
  </div>
</div>

   <div className="relative">
  <div className="w-full bg-[#282828] rounded-[30px] border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden border-[#3F3F3F]">
      <Image className="w-full h-auto mb-4 rounded-[20px]" src={proFour} alt=""/>
    <h3 className="text-white text-xl mb-2 text-center">Templates 4</h3>
  </div>
</div>

   <div className="relative">
  <div className="w-full bg-[#282828] rounded-[30px] border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden border-[#3F3F3F]">
      <Image className="w-full h-auto mb-4 rounded-[20px]" src={proFive} alt=""/>
    <h3 className="text-white text-xl mb-2 text-center">Templates 5</h3>
  </div>
</div>


            </div>

            <div className="flex justify-center mt-10 space-x-3 ">
  <button className="w-8 h-8 rounded-full text-white cursor-pointer text-sm   bg-[#ff0080]">
    1
  </button>
  <button className="w-8 h-8 rounded-full text-white cursor-pointer text-sm   bg-[#3F3F3F] hover:bg-[#4A4A4A] ">
    2
  </button>
</div>


              
            </div>
            </div>
          </div>
        </section>
        </>
    )
}