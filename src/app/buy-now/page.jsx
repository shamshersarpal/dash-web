import BuyNow from "@/components/BuyNow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import proTwo from "@/images/pro-2.jpg";

export default function BuyNowPage(){
    return(
        <>
        <Header/>
        <section className="mainDiv">
            <div className="max-w-screen-xl px-4 mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    <div>
                          <div className="relative">
                          <div className="w-full bg-[#282828] rounded-[30px] border p-4 cursor-pointer transition-all duration-300 relative overflow-hidden border-[#3F3F3F]">
                              <Image className="w-full h-auto mb-4 rounded-[20px]" src={proTwo} alt=""/>
                            <h3 className="text-white text-xl mb-2 text-center">Templates 2</h3>
                          </div>
                        </div>
                    </div>
                    <div>
                        <BuyNow/>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        
        </>
    )
}