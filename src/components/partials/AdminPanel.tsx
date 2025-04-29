import flag from "../../assets/flag.png";
import message from "../../assets/message.png";
import notification from "../../assets/notification.png";
import avatar from "../../assets/avatar.png";
import bg from "../../assets/image.png";
import Card from "../Card";
import News from "./News";
import Gallary from "./Gallary";
import Feeds from "./Feeds";
import cube from "../../assets/Gallery/CubeP.png";
import staged from "../../assets/Gallery/staged.png";

import sphare from "../../assets/Gallery/sphare.png";
import bluering from "../../assets/Gallery/bluering.png";
import About from "./About";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { getUsers } from "../../auth/userListSlice";

const AdminPanel = () => {

  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.user);
  console.log(users);
  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const colleagesData = [
    { image: bluering, name: "Paul Molive" },
    { image: sphare, name: "Robert Fox" },
  ];

  return (
    <div className=" bg-[#e9ecef]  xl:w-[85%] lg:w-[80%]">
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
          <img className="h-[33x] w-[33px] rounded-full" src={users.avatar} alt="" />
          <div className="flex flex-col ">
            <p className="text-sm text-zinc-700">{users.first_name} {users.last_name}</p>
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
          <img className="absolute ml-8 top-[-30%] rounded-full" src={users.avatar} alt="" />
        </div>
        <div className="flex w-[93%] px-8 justify-between items-center">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-2xl ">{users.first_name} {users.last_name}</h1>
            <p className="text-sm text-zinc-400">web Designer</p>
          </div>
          <ul className="flex items-center gap-6">
            <li className="text-white bg-[#0048B2] px-3 py-2 rounded-full text-sm font-normal tracking-wider ">
              Feed
            </li>
            <li className="text-[#3A57E8] text-sm font-normal tracking-wider ">
              Activity
            </li>
            <li className="text-[#3A57E8] text-sm font-normal tracking-wider ">
              Friends
            </li>
            <li className="text-[#3A57E8] text-sm font-normal tracking-wider ">
              Profile{" "}
            </li>
          </ul>
        </div>
      </div>
      {/* 
      Main Content */}

      <div
        className=" w-full  bg-[#e9ecef]  flex gap-4  py-4 px-5
       "
      >
        <div className="w-[25%] h-full  flex flex-col gap-4 ">
          <Card title="News" data="">
            <News />
          </Card>
          <Card title="title 2" data="132 pics">
            <Gallary />
          </Card>
          <Card title="title 3">
            <Feeds title="Figma Community" username="@figma69" />
          </Card>
        </div>
        <div className="w-[50%]   h-full rounded-lg">
         <div className="bg-white p-6 rounded-lg mb-10">
         <div className="flex items-center p-4 justify-between">
            <div className="flex gap-3 ">
              <img
                className="h-[50px] w-[50px] p-1 border border-[#0048B2] rounded-full"
                src={cube}
                alt="cube"
              />
              <div>
                <h1 className="font-normal ">Wade Warren</h1>
                <p className="text-sm text-[#0048B2] font-medium ">
                  {" "}
                  colleages
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400">29mins</p>
          </div>
          <img className="h-[35vh] w-full" src={staged} alt="" />
          <div className="flex items-center justify-between p-4">
            <div className="w-[30%] flex justify-between">
              <i class="  text-gray-400 text-xl ri-heart-line"></i>
              <p className="text-md text-gray-400">Likes</p>
              <i class="  text-gray-400 text-xl ri-chat-2-line"></i>
              <p className="text-md text-gray-400">140</p>
            </div>
            <p className="text-[#0048B2] ">
              <i class="text-xl ri-share-line mr-2"></i> 99 share
            </p>
          </div>
          <hr className="text-gray-300 my-4" />
          <p className="text-sm text-gray-400 my-2 mx-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quod sapiente aut facilis repellendus temporibus corporis, aperiam
            sunt ducimus eum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Cumque, laudantium?
          </p>
          <hr className="text-gray-300 my-4" />
          <div className="flex flex-col gap-6 px-5 py-2">
            {colleagesData.map((user, index) => (
              <div key={index} className="flex gap-4">
                <img
                  className="h-[40px] border border-gray-500 rounded-full w-[40px]"
                  src={user.image}
                  alt={`photo ${index + 1}`}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{user.name}</span>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex gap-3">
                    <i class="ri-heart-line text-gray-500 text-sm"></i>
                    <span className="text-[#0048B2] text-sm">like</span>
                    <i class="ri-reply-line text-[#0048B2] text-sm"></i>
                    <span className="text-[#0048B2] text-sm">Reply</span>
                    <span className="text-[#0048B2] text-sm">translation</span>
                    <span className="text-gray-400 text-sm ">5min</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="relative w-full">
              <input
                className=" border w-full h-12 text-sm rounded-lg border-gray-300 p-4 text-gray-400"
                type="search"
                placeholder="Lovely!"
              />
              <i class="ri-camera-line absolute left-[95%] top-1/2 text-lg text-gray-400  transform -translate-x-1/2 -translate-y-1/2"></i>
              <i class="ri-user-smile-line text-lg text-gray-400 absolute left-[91%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
            </div>
         </div>
        
          </div>

          <div className="bg-white p-4  rounded-lg">
          <div >
          <div className="flex items-center p-4 justify-between">
            <div className="flex gap-3 ">
              <img
                className="h-[50px] w-[50px] p-1 border border-[#0048B2] rounded-full"
                src={cube}
                alt="cube"
              />
              <div>
                <h1 className="font-normal ">Wade Warren</h1>
                <p className="text-sm text-[#0048B2] font-medium ">
                  {" "}
                  colleages
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400">29mins</p>
          </div>
          <p className="text-sm text-gray-400 my-2 mx-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quod sapiente aut facilis repellendus temporibus corporis, aperiam
            sunt ducimus eum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Cumque, laudantium?
          </p>
          <hr className="text-gray-300 my-3" />

          <div className="flex items-center justify-between px-4">
            <div className="w-[30%] flex justify-between">
              <i class="  text-gray-400 text-xl ri-heart-line"></i>
              <p className="text-md text-gray-400">Likes</p>
              <i class="  text-gray-400 text-xl ri-chat-2-line"></i>
              <p className="text-md text-gray-400">140</p>
            </div>
            <p className="text-[#0048B2] ">
              <i class="text-xl ri-share-line mr-2"></i> 99 share
            </p>
          </div>
         
          <div className="relative w-full mt-4">
              <input
                className=" border w-full h-12 text-sm rounded-lg border-gray-300 p-4 text-gray-400"
                type="search"
                placeholder="Lovely!"
              />
              <i class="ri-camera-line absolute left-[95%] top-1/2 text-lg text-gray-400  transform -translate-x-1/2 -translate-y-1/2"></i>
              <i class="ri-user-smile-line text-lg text-gray-400 absolute left-[91%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
            </div>

          </div>
          </div>

        
        </div>

       

        {/* yuuigih */}

        <div className="w-[25%] flex flex-col gap-4 ">
          <Card title="About">
            <About mail={users.email}/>
          </Card>
          <Card title="stories">
            <Stories/>

          </Card>
          <Card title="Suggestions">
            <Suggestions/>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
