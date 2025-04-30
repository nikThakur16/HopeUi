import { useState } from "react";
import logo from "../../assets/image copy.png";
import { Link } from "react-router-dom";

const Sidenav = ({isOpen,onClick}) => {
  const [usersOpen, setUsersOpen] = useState(false);

  return (
    <div className={`relative  w-full  ${isOpen? "block" :"hidden"}`}>
     

     
      <div className="flex relative justify-center lg:text-md xl:text-2xl shadow-lg font-medium gap-2 items-center xl:px-2 px-1 lg:py-2 py-4">
        <div className="flex absolute items-center justify-center left-8"><img
          className="lg:h-[15px] lg:w-[15px] h-[30px] w-[30px]"
          src={logo}
          alt="Hope UI Logo"
        />
        Hope Ui</div>
        <i onClick={onClick} className="ri-arrow-left-line ml-[106%]  bg-[#0048B2] text-white rounded-full text-sm px-2 py-1"></i>
      </div>

      <div className="2xl:px-10 lg:px-4 mt-8">
       
        <h3 className="text-[#8A92A6] lg:text-sm">Home</h3>
        <ul className="px-1 mt-4 lg:mt-2">
          <Link to="admin"  className="text-[#8A92A6] text-xs  lg:text-md xl:text-md mb-2 text-md  flex items-center">
            <i className="ri-dashboard-fill mr-2"></i>
            Dashboard
          </Link>
          <li className="text-[#8A92A6] lg:text-xs text-xs flex items-center lg:text-md xl:text-md mb-2 text-md md:text-sm sm:text-xs">
            <i className="ri-menu-2-line mr-2"></i>
            Menu Style
          </li>
        </ul>

        <hr className="border border-zinc-100 mb-4 lg:mb-2 mt-1.5" />

        <h3 className="text-[#8A92A6] text-sm lg:text-sm">Pages</h3>
        <ul className="px-1 mt-4 space-y-2">
          <li className="text-[#8A92A6] lg:text-xs text-xs flex items-center justify-between lg:text-md xl:text-md mb-2 text-md md:text-sm sm:text-xs">
            <div className="flex items-center">
              <i className="ri-dashboard-fill mr-2"></i>
              Special Pages
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </li>
          <li className="text-[#8A92A6] lg:text-xs text-xs flex items-center justify-between lg:text-md xl:text-md mb-2 text-md md:text-sm sm:text-xs">
            <div className="flex items-center">
              <i className="ri-menu-2-line mr-2"></i>
              Authentication
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </li>

        
          <li
            className={`flex items-center justify-between px-0 ${
              usersOpen ? "bg-[#3A57E8] px-3 py-2 text-white rounded-md" : ""
            }`}
            onClick={() => setUsersOpen((o) => !o)}
          >
            <div className="flex items-center lg:text-md xl:text-md mb-2 text-md md:text-sm sm:text-xs">
              <i
                className={`ri-user-3-line mr-2 ${
                  usersOpen ? "text-white" : "text-[#8A92A6]"
                }`}
              ></i>
              <span className={`lg:text-sm  ${ usersOpen ? "text-white" : "text-[#8A92A6]"}  lg:text-xs text-xs`}>Users</span>
            </div>
            <i
              className={`${
                usersOpen ? "ri-arrow-down-s-line text-[#8A92A6]" : "ri-arrow-right-s-line text-[#8A92A6]"
              }`}
            ></i>
          </li>
         
          {usersOpen && (
            <ul className="xl:pl-8 pl-2 mt-2 xl:space-y-1">
              <Link to="/Profile" className="flex items-center text-[#8A92A6] lg:text-xs text:md text-xs mt-2 xl:px-2 lg:text-md xl:text-md mb-2 text-md md:text-sm sm:text-xs xl:py-2 hover:bg-[#3A57E8] hover:px-3 hover:py-2 hover:rounded hover:text-white">
                <span className="w-2 h-2 bg-current rounded-full mr-2 inline-block "></span>
                User Profile
              </Link>
              <Link to="edituser" className="flex items-center text-[#8A92A6] mt-2 lg:text-sm  px-2 py-2 lg:text-md xl:text-md mb-2 text-xs md:text-sm sm:text-xs text-md hover:bg-[#3A57E8] hover:px-3 hover:py-2 hover:rounded hover:text-white">
                <span className="w-2 h-2 bg-current rounded-full mr-2 inline-block"></span>
                Edit User
              </Link>
              <Link to="/userList" className="flex items-center text-[#8A92A6] mt-2 lg:text-sm lg:text-md xl:text-md mb-2 text-xs md:text-sm sm:text-xs  px-2 py-2 text-md hover:bg-[#3A57E8] hover:px-3 hover:py-2 hover:rounded hover:text-white">
                <span className="w-2 h-2 bg-current rounded-full mr-2 inline-block"></span>
                User List
              </Link>
            </ul>
          )}
        </ul>

        <hr className="border border-zinc-100 my-4" />

        
        <h3 className="text-[#8A92A6] lg:text-md lg:text-md xl:text-md mb-2 text-md md:text-sm sm:text-xs">Utilities</h3>
        <ul className="px-1 mt-4 lg:mt-2">
          <li className="text-[#8A92A6] lg:text-sm text-md flex items-center justify-between">
            <div className="flex items-center lg:text-md xl:text-md mb-2 text-md md:text-sm sm:text-xs">
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
