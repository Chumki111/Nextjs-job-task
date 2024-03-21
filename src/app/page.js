// import { getAllNews } from "@/utils/getAllNews";

import Card from "@/components/Card"


const Home = async() => {
  // const { data: allCategories } = await getAllNews();
  // console.log(allCategories);
  return (
    <div>

      <div className="py-4">
        <span className="text-3xl lg:text-5xl font-semibold bg-gray-200 px-4 py-3 rounded-sm">Disscussion Form</span>
      </div>
      <Card/>
    </div>
  )
}

export default Home
