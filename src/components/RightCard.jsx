import image from '@/assets/Martin.jpg'
import Image from 'next/image'

const RightCard = () => {
  return (
    <div className='my-5'>
        <Image src={image} alt='martin' className='object-cover'/>
        <div className='pl-6 pr-11 border-2 border-t-0 rounded border-gray-300'>
        <h2 className='font-semibold text-2xl py-3'>Exploring Natures Wonders</h2>
        <p className='text-gray-700 leading-relaxed pb-3'>Dive into the mesmerizing beauty of nature as we uncover its hidden gems and breathtaking landscapes. Join us on this journey of discovery!Dive into the mesmerizing beauty of nature as we uncover its hidden gems and breathtaking landscapes. Join us on this journey of discovery!</p>
        </div>
    </div>
  )
}

export default RightCard