import React from 'react'
import Layout from './Layout'
import ImageBg from './partials/ImageBg'
import { useLocation } from 'react-router-dom'
import Layout2 from './Layout2'

const Parent = () => {
    const location=useLocation()
  return (
    <div className='flex '>
   {location.pathname.includes("123")? <Layout2/> :     <Layout/>}
        <ImageBg/>

    </div>
  )
}

export default Parent