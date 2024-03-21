import Image from "next/image"
import image from '@/assets/Martin.jpg'
import { GiSelfLove } from "react-icons/gi";
import { LuEye } from "react-icons/lu";
import { BiComment } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
const Card = () => {
  return (
    <div className="bg-[#ffff] lg:px-4 py-5 rounded space-y-4 shadow-lg">
    <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
    <div className="">
  <Image src={image} width={60} height={60} alt="martin" className="size-[60px] rounded-full" />
</div>
      <h2>Lorem Ispim</h2>
      <span className="bg-blue-500 text-white px-3 lg:px-4 py-0 rounded-xl">Section 2</span>
    </div>
    <p className="text-blue-500 font-medium text-lg">2 min ago</p>
    </div>
    <div className="px-3 lg:px-10 space-y-4">
    <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore veniam, facere sapiente dolor alias expedita.</p>
    <div className="flex justify-between items-center">
    <div className="flex items-end gap-2">
<GiSelfLove size={24}/><span className="text-lg font-medium">2k</span>
    </div>
    <div className="flex items-end gap-2">
<LuEye size={24}/><span className="text-lg font-medium">2k</span>
    </div>
    <div className="flex items-end gap-2">
<BiComment size={24}/><span className="text-lg font-medium">2k Comments</span>
    </div>
    <div className="flex items-end gap-2">
<IoShareSocialOutline size={24}/><span className="text-lg font-medium">Share</span>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Card