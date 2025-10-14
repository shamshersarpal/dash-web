import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/images/profile.jpg"

export default function Profile(){
    return(
        <>
        <Header/>
        <section className="mt-20">
            <SideBar/>
          <div className="max-w-[1000px] w-full mx-auto">
            <div className="p-6 sm:ml-64">
            <div className="text-white font-[600] text-2xl">Profile</div>

            <div className="bg-[#1E1E20] border border-[#595959] p-8 rounded-[20px] h-full mt-5">
                <div className="flex justify-center ">
                    <div>
                        <Image className="w-[80px] h-[80px] rounded-full border border-white" src={profileImage} alt='profile Image' />
                        <div className="edit">
                            <button className="loginBtn mt-4">Edit</button>
                        </div>
                    </div>
                </div>

                <form className="space-y-4 md:space-y-6 mt-10" action="#">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] ps-5 text-white rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="text"
                      name="text"
                      value="Johan" readOnly
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] text-white ps-5 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="text"
                      name="text"
                      value="Due" readOnly
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] text-white ps-5 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="text"
                      name="text"
                      value="+1234567890" readOnly
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="text"
                      className="bg-[#333335] border border-[#48484b] text-[20px] font-[500] text-white ps-5 rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0 h-[56px]"
                      placeholder=" "
                      type="text"
                      name="text"
                      value="johan@dash.com" readOnly
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                   

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm text-white"
                    >
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block bg-[#333335] border border-[#48484b] text-[20px] font-[500] ps-5 text-white rounded-[16px]  block w-full  p-2.5 focus:outline-none focus:border-none focus:ring-0"
                      placeholder=" "
                      defaultValue={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."}
                      readOnly
                    />
                  </div>
                </div>
                
              </form>
            </div>
            </div>
          </div>
        </section>
        </>
    )
}