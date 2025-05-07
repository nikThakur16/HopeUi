import { Outlet } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Topbar from './components/Topbar';
import { useState } from 'react';

const MainLayout = () => {
  const [usersOpen, setUsersOpen] = useState(false);

  const handleClick = () => {
    setUsersOpen(!usersOpen);
  };

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("token");
    
  });
  

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
   {/* topbar */}
      <div className={`flex flex-col mt-2 bg-gray-100 transition-all  duration-300 w-full
            ${usersOpen ? 'xl:ml-[230px] lg:ml-[130px]' : ''}
            `}>
        <Topbar onClick={handleClick} isOpen={usersOpen} />
      </div>

      <div className="flex flex-1 overflow-x-hidden">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0  z-60 sm:z-[2000] h-full bg-white w-[200px]   lg:w-[16%] xl:w-[13%] sm:px-2  transition-transform duration-500 ${usersOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidenav isOpen={usersOpen} onClick={handleClick} />
        </div>

        {/* Main content */}
        <main  className={`flex-1 mt-2 bg-gray-100 transition-all overflow-x-hidden  lg:w-[84%] xl:w-[87%] duration-300
            ${usersOpen ? 'xl:ml-[230px] lg:ml-[150px]' : ''}
            `}>
          <Outlet isOpen ={usersOpen} />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
