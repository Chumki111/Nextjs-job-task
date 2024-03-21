// import { getAllNews } from "@/utils/getAllNews";

import Card from "@/components/Card"


const Home = async() => {
  // const { data: allCategories } = await getAllNews();
  // console.log(allCategories);
  return (
    <div>

      <div className="py-4">
        <span className="text-3xl lg:text-5xl font-semibold bg-gray-200 px-4 py-3 rounded-sm">Disscussion Fourm</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 mt-7">
        <div className="col-span-4"><Card/></div>
        <div className="col-span-3"></div>
      </div>
      
    </div>
  )
}

export default Home
