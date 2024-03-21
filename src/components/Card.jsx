// import Image from "next/image"
// import image from '@/assets/Martin.jpg'
// import { GiSelfLove } from "react-icons/gi";
// import { LuEye } from "react-icons/lu";
// import { BiComment } from "react-icons/bi";
// import { IoShareSocialOutline } from "react-icons/io5";
// const Card = () => {
//   return (
//     <div className="bg-[#ffff] lg:px-4 py-5 my-5 rounded space-y-4 shadow-lg">
//     <div className="flex justify-between items-center px-2">
//     <div className="flex items-center gap-3">
    
//   <Image src={image} width={50} height={50} alt="martin" className="size-[50px] rounded-full" />

//       <h2>Lorem Ispim</h2>
//       <span className="bg-blue-700 text-white px-3 lg:px-4 py-0 rounded-xl">Section 2</span>
//     </div>
//     <p className="text-blue-500 font-medium text-lg">2 min ago</p>
//     </div>
//     <div className="px-5 lg:px-16 space-y-4">
//     <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore veniam, facere sapiente dolor alias expedita.</p>
//     <div className="flex justify-between items-center">
//     <div className="flex items-end gap-2">
// <GiSelfLove size={24}/><span className="text-lg font-medium">2k</span>
//     </div>
//     <div className="flex items-end gap-2">
// <LuEye size={24}/><span className="text-lg font-medium">2k</span>
//     </div>
//     <div className="flex items-end gap-2">
// <BiComment size={24}/><span className="text-lg font-medium">2k Comments</span>
//     </div>
//     <div className="flex items-end gap-2">
// <IoShareSocialOutline size={24}/><span className="text-lg font-medium">Share</span>
//     </div>
//     </div>
//     </div>
//   </div>
//   )
// }

// export default Card
import Image from "next/image";
import image from '@/assets/Martin.jpg';
import { GiSelfLove } from "react-icons/gi";
import { LuEye } from "react-icons/lu";
import { BiComment } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="bg-white py-5 my-5 rounded-lg shadow-lg">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src={image} layout="fill" alt="Martin" />
          </div>
          <div className="flex gap-4">
            <h2 className="text-lg font-semibold">Lorem Ipsum</h2>
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">Section 2</span>
          </div>
        </div>
        <p className="text-blue-500 font-medium text-sm">2 min ago</p>
      </div>
      <div className="px-4 lg:px-[66px] py-4">
  <p className="text-sm text-gray-700 leading-relaxed">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam, facere sapiente dolor alias expedita.
  </p>
  <div className="flex justify-between items-center mt-4">
    <div className="flex items-center gap-2">
      <GiSelfLove size={24} className="text-red-500" />
      <span className="text-sm font-medium">2k <span className="hidden lg:inline">Likes</span></span>
    </div>
    <div className="flex items-center gap-2">
      <LuEye size={24} className="text-green-500" />
      <span className="text-sm font-medium">2k <span className="hidden lg:inline">Views</span></span>
    </div>
    <div className="flex items-center gap-2">
      <BiComment size={24} className="text-blue-500" />
      <span className="text-sm font-medium">2k Comments</span>
    </div>
    <div className="flex items-center gap-2 justify-end"> {/* Aligning items to the right */}
      <IoShareSocialOutline size={24} className="text-gray-500" />
      <span className="text-sm font-medium">Share</span>
    </div>
  </div>
</div>
    </div>
  );
};

export default Card;
