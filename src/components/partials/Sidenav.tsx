import { useState } from "react";
import logo from "../../assets/image copy.png";

const Sidenav = () => {
  const [usersOpen, setUsersOpen] = useState(false);

  return (
    <div className="relative lg:w-[20%] xl:w-[15%] 2xl:w-[15%]">
     
      <i
        className="absolute top-[15px] lg:text-sm px-1 xl:px-1 xl:text-xl text-zinc-200 font-semibold rounded-full right-[-5%] border-none bg-[#0048B2] ri-arrow-left-line"

      ></i>

     
      <div className="flex lg:text-xl xl:text-2xl shadow-lg font-medium gap-2 items-center justify-center xl:px-2 lg:px-1 py-4">
        <img
          className="lg:h-[20px] lg:w-[20px] h-[30px] w-[30px]"
          src={logo}
          alt="Hope UI Logo"
        />
        Hope Ui
      </div>

      <div className="2xl:px-10 lg:px-4 mt-8">
       
        <h3 className="text-[#8A92A6] lg:text-md">Home</h3>
        <ul className="px-1 mt-4 lg:mt-2">
          <li className="text-[#8A92A6] lg:text-sm mb-2 text-md flex items-center">
            <i className="ri-dashboard-fill mr-2"></i>
            Dashboard
          </li>
          <li className="text-[#8A92A6] lg:text-sm text-md flex items-center">
            <i className="ri-menu-2-line mr-2"></i>
            Menu Style
          </li>
        </ul>

        <hr className="border border-zinc-100 mb-4 lg:mb-2 mt-1.5" />

        <h3 className="text-[#8A92A6] lg:text-md">Pages</h3>
        <ul className="px-1 mt-4 space-y-2">
          <li className="text-[#8A92A6] lg:text-sm text-md flex items-center justify-between">
            <div className="flex items-center">
              <i className="ri-dashboard-fill mr-2"></i>
              Special Pages
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </li>
          <li className="text-[#8A92A6] lg:text-sm text-md flex items-center justify-between">
            <div className="flex items-center">
              <i className="ri-menu-2-line mr-2"></i>
              Authentication
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </li>

        
          <li
            className={`flex items-center justify-between px-0 ${
              usersOpen ? "bg-[#0048B2] text-white rounded-md" : ""
            }`}
            onClick={() => setUsersOpen((o) => !o)}
          >
            <div className="flex items-center">
              <i
                className={`ri-user-3-line mr-2 ${
                  usersOpen ? "text-white" : "text-[#8A92A6]"
                }`}
              ></i>
              <span className={`lg:text-sm  ${ usersOpen ? "text-white" : "text-[#8A92A6]"} text-md`}>Users</span>
            </div>
            <i
              className={`${
                usersOpen ? "ri-arrow-down-s-line text-[#8A92A6]" : "ri-arrow-right-s-line text-[#8A92A6]"
              }`}
            ></i>
          </li>
         
          {usersOpen && (
            <ul className="pl-8 mt-2 space-y-1">
              <li className="flex items-center text-[#8A92A6] lg:text-sm text-md">
                <span className="w-2 h-2 bg-current rounded-full mr-2 inline-block"></span>
                User Profile
              </li>
              <li className="flex items-center text-[#8A92A6] lg:text-sm text-md">
                <span className="w-2 h-2 bg-current rounded-full mr-2 inline-block"></span>
                Edit User
              </li>
              <li className="flex items-center text-[#8A92A6] lg:text-sm text-md">
                <span className="w-2 h-2 bg-current rounded-full mr-2 inline-block"></span>
                User List
              </li>
            </ul>
          )}
        </ul>

        <hr className="border border-zinc-100 my-4" />

        
        <h3 className="text-[#8A92A6] lg:text-md">Utilities</h3>
        <ul className="px-1 mt-4 lg:mt-2">
          <li className="text-[#8A92A6] lg:text-sm text-md flex items-center justify-between">
            <div className="flex items-center">
              <i className="ri-bookmark-line mr-2"></i>
              Utilities
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
