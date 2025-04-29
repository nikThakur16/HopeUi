
import { useEffect } from 'react'
import AdminPanel from './partials/AdminPanel'
import Sidenav from './partials/Sidenav'


const Profile = () => {
  // Remove token on page refresh or reload
// window.onbeforeunload = () => {
//   localStorage.removeItem("token");
// };

  
  

 
 
  
  return (
    <div className='flex h-full w-full '>
     <Sidenav/>
     <AdminPanel/>
    </div>
  )
}

export default Profile