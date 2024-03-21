import Link from "next/link"


const MenuItem = ({item,route,icon:Icon}) => {
  return (
    <div>
        <Link href={route} className="flex items-start gap-2">
                <Icon className=" text-2xl"/>
               <span className="font-semibold">{item}</span>
                 </Link>
    </div>
  )
}

export default MenuItem