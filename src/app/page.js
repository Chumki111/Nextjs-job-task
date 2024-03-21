

import Card from "@/components/Card"
import RightCard from "@/components/RightCard"



const Home = async() => {

  return (
    <div>
<div className="flex lg:justify-around">
  
<div className="py-4">
        <span className="text-xl bg-[#122033] lg:bg-gray-200 text-white lg:text-rose-500  lg:text-5xl font-semibold px-4 py-3 rounded-sm">Disscussion Fourm</span>
      </div>
      <div className="py-4">
        <span className="text-xl bg-[#122033] lg:bg-gray-200 text-white lg:text-rose-500 lg:text-5xl font-semibold  px-4 py-3 rounded-sm">Market Stories</span>
      </div>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-3 lg:gap-7">
        <div className="col-span-4">
       
         <div className="flex flex-col mt-4">
         <Card/>
          <Card/>
          <Card/>
          <Card/>
         </div>
          </div>
        <div className="col-span-3 flex-1">
       
      <div className="mt-8">
      <RightCard/>
      <RightCard/>
      <RightCard/>
      </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
