
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Layout2 from './components/Layout2'
import { ProtectedRoute } from './components/ProtectedRoute'

import UserProfile from './components/partials/UserProfile'
import NotFound from './components/NotFound'
import MainLayout from './components/MainLayout'
import AdminPanel from './components/partials/AdminPanel'
import EditUser from './components/partials/EditUser'
import UserList from './components/partials/UserList'

const AppRoutes = () => {
  return (
    <div className='w-full h-full'>
      <Routes>
   
        <Route path='/' element={<Layout />} />
        <Route path='/signup' element={<Layout2 />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path='admin' element={<AdminPanel />} />
          <Route path='Profile' element={<UserProfile/>} />
          <Route path='editUser' element={<EditUser/>}/>
          <Route path='userList' element={<UserList/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes