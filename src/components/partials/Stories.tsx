import React from 'react'
import ios from "../../assets/Gallery/ios.png"
import abstract from "../../assets/Gallery/abstract.png"
import figma from "../../assets/Figma.png"

const Stories = () => {

    const storieData=[{image:ios,title:"Web Design"},{image:figma,title:"App Desgin"},{image:abstract,title:"Abstract Desgin"}]

  return (
    <div className='flex flex-col gap-8 my-4'>
        {storieData.map((storie,index)=>(
            <div key={index} className='flex gap-6 items-center'>
                <img className='2xl:h-[90px] 2xl:w-[90px] lg:h-[50px] lg:w-[50px] rounded-full border border-gray-400' src={storie.image} alt="" />
                <div>
                    <p className='font-medium text-lg mb-2'>{storie.title}</p>
                    <p className='text-gray-500'>1 hour ago</p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Stories