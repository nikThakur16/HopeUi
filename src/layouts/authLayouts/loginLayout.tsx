import ImageBg from "../../comman/ImageBg";
import SignInField from "../../pages/authPages/SignInField";
import bgImg from "../../assets/webImages/bgimg.png"
import logo from "../../assets/webImages/logo.png"


const loginLayout = () => {
  return (
    <div className="flex w-full lg:w-full    md:h-full min-h-screen overflow-x-hidden">

      <div className="relative h-full w-full">
        <img src={bgImg} alt="" />
        <div className="absolute h-full w-full 2xl:top-[85%] top-[70%] right-[32%] xl:right-[17%]   flex items-center justify-center flex-col ">
          <div className=" flex md:ml-[80px] h-full gap-2">
            <img className="h-[40px] w-[40px]" src={logo} alt="" />
            <h1 className="text-2xl md:text-4xl ">Hope UI</h1>
          </div>
          <div className=" flex flex-col ml-[250px] mt-[4%] w-full items-center justify-center ">
          <h1 className="font-semibold text-2xl md:text-4xl ">Sign In</h1>
          <h6 className="font-lighter text-sm md:text-[18px] text-[#8A92A6] tracking-wider mt-[20px]">Sign in to stay connected.</h6>
          <SignInField/>
        
        </div>
        
        </div>
        
        
      </div>

        <ImageBg/>
    </div>
    
  );
};

export default loginLayout;
