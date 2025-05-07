
import { Route, Routes } from 'react-router-dom'
import LoginLayout from '../layouts/authLayouts/loginLayout'
import SignUpLayout from '../layouts/authLayouts/SignUpLayout'
import { ProtectedRoute } from './ProtectedRoute'

import UserProfile from '../pages/users/UserProfile'
import NotFound from '../comman/NotFound'
import MainLayout from '../layouts/mainLayout/MainLayout'

import EditUser from '../pages/users/EditUser'
import UserList from '../pages/users/UserList'
import Dashboard from '../pages/dashboard'

const AppRoutes = () => {
  return (
    <div className='w-full h-full'>
      <Routes>
   
        <Route path='/' element={<LoginLayout />} />
        <Route path='/signup' element={<SignUpLayout />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path='admin' element={<Dashboard />} />
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