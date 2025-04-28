import React from "react";

import logo from "../assets/image copy.png";
import bgImg from "../assets/image copy 2.png";
import ImageBg from './partials/ImageBg'
import SignInField from "./partials/SignInField";

const Layout = () => {
  return (
    <div className="md:flex w-full h-full xl:overflow-y-hidden sm:overflow-x-hidden">

      <div className="relative h-full w-full">
        <img src={bgImg} alt="" />
        <div className="absolute h-full w-full md:top-[85%] xl:right-[13%]  lg:right-[17%] md:right-[32%]  flex items-center justify-center flex-col ">
          <div className=" flex md:ml-[80px] h-full gap-2">
            <img className="h-[40px] w-[40px]" src={logo} alt="" />
            <h1 className="text-4xl ">Hope UI</h1>
          </div>
          <div className=" flex flex-col ml-[250px] mt-[4%] w-full items-center justify-center ">
          <h1 className="font-semibold text-4xl ">Sign In</h1>
          <h6 className="font-lighter text-[18px] text-[#8A92A6] tracking-wider mt-[20px]">Sign in to stay connected.</h6>
          <SignInField/>
        
        </div>
        
        </div>
        
        
      </div>

        <ImageBg/>
    </div>
    
  );
};

export default Layout;
