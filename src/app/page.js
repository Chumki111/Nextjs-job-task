// import { getAllNews } from "@/utils/getAllNews";

import Card from "@/components/Card"


const Home = async() => {
  // const { data: allCategories } = await getAllNews();
  // console.log(allCategories);
  return (
    <div>

     

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-7">
        <div className="col-span-4">
        <div className="py-4">
        <span className="text-3xl lg:text-5xl font-semibold bg-gray-200 px-4 py-3 rounded-sm">Disscussion Fourm</span>
      </div>
         <div className="flex flex-col mt-4">
         <Card/>
          <Card/>
          <Card/>
          <Card/>
         </div>
          </div>
        <div className="col-span-3">
          <p>lorem34333333333333333333333333333333333333</p>
        </div>
      </div>
      
    </div>
  )
}

export default Home
