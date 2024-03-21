import image from '@/assets/Martin.jpg'
import Image from 'next/image'

const RightCard = () => {
  return (
    <div className='my-5'>
        <Image src={image} alt='martin' className='object-cover'/>
        <div className='pl-6 pr-11 border-2 border-t-0 rounded border-gray-300'>
        <h2 className='font-semibold text-2xl py-3'>Hello world every one</h2>
        <p className='text-gray-700 leading-relaxed pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius quo aliquam odit aperiam, asperiores voluptatibus libero. Distinctio numquam, est, veritatis esse adipisci cupiditate fugiat ipsa ab harum nam quo?</p>
        </div>
    </div>
  )
}

export default RightCard