import React from 'react'
import ios from "../../../assets/Gallery/ios.png"
import abstract from "../../../assets/Gallery/abstract.png"
import figma from "../../../assets/webImages/Figma.png"

const Stories = () => {

    const storieData=[{image:ios,title:"Web Design"},{image:figma,title:"App Desgin"},{image:abstract,title:"Abstract Desgin"}]

  return (
    <div className='flex flex-col justify-between  md:gap-8 gap-4  my-4'>
        {storieData.map((storie,index)=>(
            <div key={index} className='flex lg:gap-6 gap-4 items-center'>
                <img className='2xl:h-[90px] 2xl:w-[90px] lg:h-[50px] lg:w-[50px] h-[50px] w-[50px] rounded-full border border-gray-400' src={storie.image} alt="" />
                <div>
                    <p className='font-medium xl:text-lg text-sm lg:mb-2 mb-1'>{storie.title}</p>
                    <p className='text-gray-500'>1 hour ago</p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Stories