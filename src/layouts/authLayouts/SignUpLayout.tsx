

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import bgImg from "../../assets/webImages/bgimg.png"
import logo from "../../assets/webImages/logo.png"
import ImageBg from "../../comman/ImageBg";
import SignUpField from "../../pages/authPages/SignUpField";
import { useAppSelector } from "../../store/hooks";
import { PageTransition } from "../../comman/PageTransition";

const Layout2 = () => {
  const [showTransition, setShowTransition] = useState(false);
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      // Show transition immediately
      setShowTransition(true);
      
      // Redirect after animation (adjust timing to match your GIF duration)
      const timer = setTimeout(() => {
        navigate("/admin", { replace: true });
      }, 4000); // Reduced to 1.5 seconds

      return () => clearTimeout(timer);
    }
  }, [token, navigate]);

  if (showTransition) {
    return <PageTransition />;
  }     

  return (
    
     <div className="flex w-full h-screen overflow-hidden">
         <ImageBg/>
         <div className="relative w-full h-full">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-8">
              <img className="h-[40px] w-[40px]" src={logo} alt="" />
              <h1 className="text-2xl xl:text-4xl lg:text-3xl">Hope UI</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-center">Sign In</h1>
              <h6 className="font-lighter text-sm md:text-[18px] text-[#8A92A6] tracking-wider mt-[20px] text-center">Sign in to stay connected.</h6>
              <div className="w-full mt-6">
                <SignUpField/>
              </div>
            </div>
          </div>
        </div>
      </div>
     

     </div>
     
     
    
  );
};

export default Layout2;
