import flag from "../../assets/flag.png";
import message from "../../assets/message.png";
import notification from "../../assets/notification.png";
import avatar from "../../assets/avatar.png";
import bg from "../../assets/image.png";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-[#e9ecef] w-[85%]">
      <div className="flex w-full bg-[#ffffff] justify-between py-2 px-12 ">
        <div className="relative">
          <input
            className=" px-8 border border-gray-200 text-gray-400 h-[36px] w-[304px]"
            type="search"
            placeholder="search..."
          />
          <i class="ri-search-line absolute text-2xl text-gray-300 top-[4px] left-[4px]"></i>
        </div>
        <div className="flex items-center gap-4">
          <img className="h-[28x] w-[28px] " src={flag} alt="" />
          <img className="h-[20x] w-[20px] " src={notification} alt="" />
          <img className="h-[20x] w-[20px] " src={message} alt="" />
          <img className="h-[33x] w-[33px] " src={avatar} alt="" />
          <div className="flex flex-col ">
            <p className="text-sm text-zinc-700">Austin Robertson</p>
            <p className="text-sm text-zinc-400">Marketing Adminstrator</p>
          </div>
        </div>
      </div>

      <div
        className="h-[200px]  rounded-b-2xl w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="  flex items-center justify-between  px-16 py-14 w-full bg-cover bg-center ">
          <h1 className="text-white text-5xl font-medium tracking-tighter ">
            {" "}
            Hello Devs !
          </h1>
          <button className=" bg-[#3A57E8] py-[7px] text-gray-200 text-sm px-[20px] rounded">
            {" "}
            <i class="ri-mic-fill text-white mr-2"></i>Announcements{" "}
          </button>
        </div>
      </div>
      <div className="h-[124px] relative bg-[#ffffff] mt-[-2%] mx-10  flex z-50">
        <div className="w-[7%] relative">
          {" "}
          <img className="absolute ml-8 top-[-30%]" src={avatar} alt="" /> 
        </div>
        <div className="flex w-[93%] px-8 justify-between items-center">
        <div className="flex justify-between items-center gap-4"  >
        <h1 className="text-2xl ">Austin Robertson</h1>
        <p className="text-sm text-zinc-400">web Designer</p>
        </div>
        <ul className="flex items-center gap-6">
            <li className="text-white bg-[#0048B2] px-3 py-2 rounded-full text-sm font-normal tracking-wider ">Feed</li>
            <li className="text-[#3A57E8] text-sm font-normal tracking-wider ">Activity</li>
            <li className="text-[#3A57E8] text-sm font-normal tracking-wider ">Friends</li>
            <li className="text-[#3A57E8] text-sm font-normal tracking-wider ">Profile </li>
        </ul>
      
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
