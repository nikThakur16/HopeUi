import logo from "../../assets/image copy.png"

const Sidenav = () => {
  return (
    <div className="min-h-screen relative w-[15%] ">
      <i class=" absolute top-[15px]   px-1 text-xl text-zinc-200 font-semibold rounded-full right-[-5%] border-none bg-[#0048B2] ri-arrow-left-line"></i>
      <div className="flex text-4xl shadow-lg font-medium gap-2 items-center  justify-center px-2 py-4"><img className="h-[30px] w-[30px]" src={logo} alt="" />Hope Ui</div>
   <div className="px-12 mt-8">
   <h3 className="text-[#8A92A6]">Home</h3>
   
    <ul className="px-1 mt-4  ">
      <li className="text-[#8A92A6] mb-2 text-md   "><i class="ri-dashboard-fill mr-2"></i> Dashboard</li>
     <li className="text-[#8A92A6]   text-md "> <i class="ri-menu-2-line mr-2"></i>  Menu Style</li>
    </ul>
    <hr className="border border-zinc-100 mb-4 mt-1.5" />
    <h3 className="text-[#8A92A6]">Page</h3>

    <ul className="px-1 mt-4  ">
      <li className="text-[#8A92A6] mb-2 text-md   "><i class="ri-dashboard-fill mr-2"></i> Special Pages</li>
     <li className="text-[#8A92A6]   text-md "> <i class="ri-menu-2-line mr-2"></i> Authentication</li>
    </ul>
   

   </div>


    </div>
  )
}

export default Sidenav