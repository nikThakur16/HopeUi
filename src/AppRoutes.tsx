
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Layout2 from './components/Layout2'
import { ProtectedRoute } from './components/ProtectedRoute'

import Profile from './components/Profile'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}/>
            <Route path='/signup' element={<Layout2/>}/>
            <Route path='/admin' element={<ProtectedRoute>
              <Profile/>
              
            </ProtectedRoute>}/>
            
        </Routes>
    </div>
  )
}

export default AppRoutes