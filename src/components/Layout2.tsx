import React from "react";

import logo from "../assets/image copy.png";
import bgImg from "../assets/image copy 2.png";
import SignInField from "./partials/SignInField";
import ImageBg from './partials/ImageBg'
import SignUpField from "./partials/SignUpField";


const Layout2 = () => {
  return (
    
     <div className="flex w-full lg:w-full  md:h-full min-h-screen overflow-x-hidden ">
         <ImageBg/>
         <div className="relative  h-full w-full">
        <img className="ml-[50%]" src={bgImg} alt="" />
        <div className="absolute  w-full top-[25%] right-[13%] pl-8 pr-4 lg:pl-0 lg:pr-24 xl:pr-14 flex items-center justify-center flex-col ">
          <div className=" flex gap-2">
            <img className="h-[40px] w-[40px]" src={logo} alt="" />
            <h1 className="lg:text-4xl mr-20  lg:mr-0 text-2xl">Hope UI</h1>
          </div>
          <div className=" flex flex-col lg:ml-[250px] ml-20 mt-[4%] w-full items-center justify-center ">
          <h1 className="font-semibold lg:text-4xl text-xl ">Sign up</h1>
          <h6 className="font-lighter md:text-[18px] text-[14px] text-[#8A92A6] tracking-wider mt-[20px]">Create your Hope UI account.</h6>
          <SignUpField/>
        
        </div>
        
        </div>
        
        
      </div>
     

     </div>
     
     
    
  );
};

export default Layout2;
