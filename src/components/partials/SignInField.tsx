
import facebook from "../../assets/facebook.png"
import linkdln from "../../assets/linkdln.png"
import instagram from "../../assets/instagram.png"
import google from "../../assets/google.png"

const SignInField = () => {
  return (
    <div className="w-full flex-col flex items-center justify-center">
      <div className="min-w-[450px] mt-6">
        <label className="block text-left font-lighter text-zinc-400 mb-2">
          Email
        </label>
        <input
          className="w-full h-[44px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
          name="email"
          type="email"
        />
      </div>

      <div className="min-w-[450px] mt-6">
        <label className="block text-left font-lighter text-zinc-400 mb-2">
          Password
        </label>
        <input
          className="w-full h-[44px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
          name="password"
          type="password"
        />
      </div>
      <div className="min-w-[450px] flex items-center justify-between mt-2">
        <div>
          <input type="checkbox" />
          <label className="ml-1 text-zinc-400  text-md" htmlFor="remember">
            {" "}
            Remember me ?
          </label>
        </div>
        <h5 className="text-[#0286F7] font-large text-lg">Forget password</h5>
      </div>
      <button className="bg-[#3A57E8] px-[24px] py-[8px] h-[44px] w-[188px] rounded text-white mt-8 font-large">Sign In</button>
      <p className="text-[#232D42] tracking-wider text-[16px] mt-4 ">or sign in with other accounts?</p>

      <div className="flex gap-2 mt-4 items-center">
      <img className="h-[40px] w-[40px]"  src={google} alt="h" />
      <img  className="h-[40px] w-[40px]" src={facebook} alt="d" />
      <img className="h-[40px] w-[40px]"  src={instagram} alt="i" />
        <img className="h-[40px] w-[40px]"  src={linkdln} alt="f" />
   

       
      </div>
      <p className="mt-2 text-[#232D42] text-[16px] tracking-wider">Don’t have an account? <span className="text-[#3A57E8] tracking-wider">Click here to sign up.</span></p>
    </div>
  );
};

export default SignInField;
