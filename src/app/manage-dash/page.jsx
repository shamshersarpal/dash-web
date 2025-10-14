import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/images/profile.jpg"

export default function manageDash(){
    return(
        <>
        <Header/>
        <section className="mt-20">
            <SideBar/>
          <div className=" w-full mx-auto">
            <div className="p-6 sm:ml-64">
            <div className="text-white font-[600] text-2xl">Manage Dash</div>

            <div className="bg-[#1E1E20] border border-[#595959] p-8 rounded-[20px] h-full mt-5">
                 
      <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-[#3C3C3C] ">
    <thead className="text-xs  uppercase  bg-[#3C3C3C] text-white ">
      <tr>
        <th scope="col" className="px-6 py-3">
          Order ID
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          File
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className=" bg-[#1E1E20]  border-b   border-[#3C3C3C]  text-white  ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-[#14F6FE] whitespace-nowrap  "
        >
          #258842
        </th>
        <td className="px-6 py-4">Memorial Cards 5"x7" </td>
        <td className="px-6 py-4">
          {" "}
          <span className="text-[#FF0000]">Pending</span>{" "}
        </td>
        <td className="px-6 py-4 text-center">
          <span className="text-center flex justify-center">
            <svg
              width={17}
              height={20}
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V10M10 1L15 6M15 6V10M1 16H2.5C2.89782 16 3.27936 15.842 3.56066 15.5607C3.84196 15.2794 4 14.8978 4 14.5C4 14.1022 3.84196 13.7206 3.56066 13.4393C3.27936 13.158 2.89782 13 2.5 13H1V19M13 16H15M16 13H13V19M7 13V19H8C8.53043 19 9.03914 18.7893 9.41421 18.4142C9.78929 18.0391 10 17.5304 10 17V15C10 14.4696 9.78929 13.9609 9.41421 13.5858C9.03914 13.2107 8.53043 13 8 13H7Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className="flex justify-center cursor-pointer">
            <svg
              width={18}
              height={19}
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V14M4 8L9 13M9 13L14 8M9 13V1"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </td>
      </tr>
      <tr className=" bg-[#1E1E20]  border-b   border-[#3C3C3C]  text-white  ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-[#14F6FE] whitespace-nowrap  "
        >
          #258858
        </th>
        <td className="px-6 py-4">Tribute Poster Boards 5"x7" </td>
        <td className="px-6 py-4">
          {" "}
          <span className="text-[#FF0000]">Pending</span>{" "}
        </td>
        <td className="px-6 py-4 text-center">
          <span className="text-center flex justify-center">
            <svg
              width={17}
              height={20}
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V10M10 1L15 6M15 6V10M1 16H2.5C2.89782 16 3.27936 15.842 3.56066 15.5607C3.84196 15.2794 4 14.8978 4 14.5C4 14.1022 3.84196 13.7206 3.56066 13.4393C3.27936 13.158 2.89782 13 2.5 13H1V19M13 16H15M16 13H13V19M7 13V19H8C8.53043 19 9.03914 18.7893 9.41421 18.4142C9.78929 18.0391 10 17.5304 10 17V15C10 14.4696 9.78929 13.9609 9.41421 13.5858C9.03914 13.2107 8.53043 13 8 13H7Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className="flex justify-center cursor-pointer">
            <svg
              width={18}
              height={19}
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V14M4 8L9 13M9 13L14 8M9 13V1"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </td>
      </tr>
      <tr className=" bg-[#1E1E20]  border-b   border-[#3C3C3C]  text-white  ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-[#14F6FE] whitespace-nowrap  "
        >
          #258352
        </th>
        <td className="px-6 py-4">Folded Tribute Cards 8.5"x11 </td>
        <td className="px-6 py-4">
          {" "}
          <span className="text-[#FF0000]">Pending</span>{" "}
        </td>
        <td className="px-6 py-4 text-center">
          <span className="text-center flex justify-center">
            <svg
              width={17}
              height={20}
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15M10 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V10M10 1L15 6M15 6V10M1 16H2.5C2.89782 16 3.27936 15.842 3.56066 15.5607C3.84196 15.2794 4 14.8978 4 14.5C4 14.1022 3.84196 13.7206 3.56066 13.4393C3.27936 13.158 2.89782 13 2.5 13H1V19M13 16H15M16 13H13V19M7 13V19H8C8.53043 19 9.03914 18.7893 9.41421 18.4142C9.78929 18.0391 10 17.5304 10 17V15C10 14.4696 9.78929 13.9609 9.41421 13.5858C9.03914 13.2107 8.53043 13 8 13H7Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </td>
        <td className="px-6 py-4 text-center">
          <span className="flex justify-center cursor-pointer">
            <svg
              width={18}
              height={19}
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V14M4 8L9 13M9 13L14 8M9 13V1"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

              
            </div>
            </div>
          </div>
        </section>
        </>
    )
}