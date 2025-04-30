import React from 'react'

const About = ({mail}) => {
  return (
    <div>

        <p className='text-gray-400 xl:text-sm lg:text-[14px] mb-6 xl:tracking-wider lg:tracking-tight '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eum.</p>
        <p className=' text-gray-400 xl:text-sm lg:text-[13px] mb-3 '>Email: <span className='ml-1 text-[#0048B2]'>{mail}</span> </p>
        <p  className='text-[#0048B2] xl:text-sm lg:text-[13px] mb-3'> <span className='text-gray-400 mr-2 '>phone:</span>1239788332424</p>
        <p  className='text-[#0048B2] xl:text-sm lg:text-[13px] mb-3' > <span  className='text-gray-400 mr-2 '>Location:</span> USA</p>
    </div>
  )
}

export default About