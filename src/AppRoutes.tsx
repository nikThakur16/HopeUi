import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Parent from './components/Parent'
import Layout from './components/Layout'
import Layout2 from './components/Layout2'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='/123' element={<Layout2/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes