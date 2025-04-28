import logo from "../../assets/image copy.png"

const Sidenav = () => {
  return (
    <div className="h-full relative lg:w-[20%] xl:w-[15%] 2xl:w-[15%]">
      <i class=" absolute top-[15px]  lg:text-sm px-1 xl:px-1 xl:text-xl text-zinc-200 font-semibold rounded-full right-[-5%] border-none bg-[#0048B2] ri-arrow-left-line"></i>
      <div className="flex lg:text-xl xl:text-2xl shadow-lg font-medium gap-2 items-center  justify-center xl:px-2 lg:px-1 py-4"><img className="lg:h-[20px] lg:w-[20px] h-[30px] w-[30px]" src={logo} alt="" />Hope Ui</div>
   <div className="2xl:px-10 lg:px-4 mt-8">
   <h3 className="text-[#8A92A6] lg:text-md ">Home</h3>
   
    <ul className="px-1 mt-4 lg:mt-2  ">
      <li className="text-[#8A92A6] lg:text-sm mb-2 text-md   "><i class="ri-dashboard-fill mr-2"></i> Dashboard</li>
     <li  className="text-[#8A92A6] lg:text-sm   text-md "> <i class="ri-menu-2-line mr-2"></i>  Menu Style</li>
    </ul>
    <hr className="border border-zinc-100 mb-4 lg:mb-2 mt-1.5" />
    <h3 className="text-[#8A92A6] lg:text-md">Page</h3>

    <ul className="px-1 mt-4  ">
      <li className="text-[#8A92A6] lg:text-sm  mb-2 text-md   "><i class="ri-dashboard-fill mr-2"></i> Special Pages</li>
     <li className="text-[#8A92A6]  lg:text-sm   text-md "> <i class="ri-menu-2-line mr-2"></i> Authentication</li>
    </ul>
   

   </div>


    </div>
  )
}

export default Sidenav