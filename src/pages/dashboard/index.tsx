import bg from "../../assets/webImages/image.png";

import News from "../../layouts/cardLayout/components/News";
import Gallary from "../../layouts/cardLayout/components/Gallary";
import Feeds from "../../layouts/cardLayout/components/Feeds";
import cube from "../../assets/Gallery/CubeP.png";
import staged from "../../assets/Gallery/staged.png";

import sphare from "../../assets/Gallery/sphare.png";
import bluering from "../../assets/Gallery/bluering.png";
import About from "../../layouts/cardLayout/components/About";
import Stories from "../../layouts/cardLayout/components/Stories";
import { Suggestions } from "../../layouts/cardLayout/components/Suggestions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { getUsers } from "../../reducers/user";
import Card from "../../layouts/cardLayout/Card";
import DashboardSkeleton from "../../loaders/DashboardSkelton";


const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);
  console.log(users);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      dispatch(getUsers());
      setLoading(false)
    },6000)
  }, [dispatch]);
  const colleagesData = [
    { image: bluering, name: "Paul Molive" },
    { image: sphare, name: "Robert Fox" },
  ];

  if(loading){
    return <DashboardSkeleton/>
  }

  return (
    <div className=" bg-[#e9ecef]  overflow-x-hidden">
      <div
        className="md:h-[140px] h-[100px] lg:h-[200px] rounded-b-2xl w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="  relative flex :items-center items-baseline justify-baseline md:justify-between  py-4 px-4  md:px-16 md:py-8 w-full bg-cover bg-center ">
          <div className="w-full ">
            <h1 className="text-[#ffffff] md:text-2xl text-md lg:text-4xl font-medium tracking-tighter ">
              {" "}
              Hello Devs !
            </h1>
            <h4 className="text-white font-normal mt-2 text-[10px] md:text-sm lg:text-lg lg:tracking-wider">
              We are on a mission to help developers like you to build beautiful
              projects for free.
            </h4>
          </div>
          <button className=" absolute right-0 md:right-10 bg-[#3A57E8] inline-block md:py-[7px] py-0.5 text-start text-gray-200 text-[10px] md:text-sm px-2 md:px-[20px] rounded">
            {" "}
            <i className="ri-mic-fill text-white mr-2"></i>Announcements{" "}
          </button>
        </div>
      </div>
      <div className="lg:h-[124px] md:h-[80px] h-[50px] relative bg-[#ffffff] mt-[-2%] md:mx-10 mx-2  flex z-50">
        <div className="md:w-[7%] w-[10%]  relative">
          {" "}
          <img
            className="absolute md:ml-8 ml-2 top-[-25%] md::top-[-30%] rounded-full"
            src={users.avatar}
            alt=""
          />
        </div>
        <div className="flex md:w-[93%] w-[90%] md:px-8 px-2 justify-between  items-center">
          <div className="flex items-center md:gap-2 gap-1 lg:gap-4">
            <h1 className="lg:text-2xl md:text-lg mt-1 text-[10px] ">
              {users.first_name} {users.last_name}
            </h1>
            <p className="md:text-sm text-[8px] text-zinc-400">web Designer</p>
          </div>
          <ul className="flex items-center md:gap-6 gap-2">
            <li className="text-white bg-[#0048B2] md:px-3 md:py-2 px-1 py-0.5 rounded-full md:text-sm text-[8px] font-normal tracking-wider ">
              Feed
            </li>
            <li className="text-[#3A57E8] text-[8px] md:text-sm font-normal tracking-wider ">
              Activity
            </li>
            <li className="text-[#3A57E8] text-[8px]  md:text-sm font-normal tracking-wider ">
              Friends
            </li>
            <li className="text-[#3A57E8] text-[8px]  md:text-sm font-normal tracking-wider ">
              Profile{" "}
            </li>
          </ul>
        </div>
      </div>
      {/* 
      Main Content */}

      <div
        className=" w-full  bg-[#e9ecef] lg:flex lg:flex-row gap-4 flex flex-col py-4 px-5
       "
      >
        <div className="lg:w-[25%] sm:w-full h-full  flex flex-col gap-4 ">
          <Card title="News" data="">
            <News />
          </Card>
          <Card title="title 2" data="132 pics">
            <Gallary />
          </Card>
          <Card title="title 3" data="132 pics">
            <Feeds title="Figma Community" username="@figma69" />
          </Card>
        </div>
        <div className="lg:w-[50%] sm:w-full  h-full rounded-lg">
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
                <i className="  text-gray-400 text-xl ri-heart-line"></i>
                <p className="text-md text-gray-400">Likes</p>
                <i className="  text-gray-400 text-xl ri-chat-2-line"></i>
                <p className="text-md text-gray-400">140</p>
              </div>
              <p className="text-[#0048B2] ">
                <i className="text-xl ri-share-line mr-2"></i> 99 share
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
            <div className="flex flex-col md:gap-6 md:px-5 px-1 gap-2 py-2">
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
                    <div className="flex md:gap-3 gap-2">
                      <i className="ri-heart-line text-gray-500 md:text-sm text-[10px]"></i>
                      <span className="text-[#0048B2] md:text-sm text-[10px]">
                        like
                      </span>
                      <i className="ri-reply-line text-[#0048B2] md:text-sm text-[10px]"></i>
                      <span className="text-[#0048B2] md:text-sm text-[10px]">
                        Reply
                      </span>
                      <span className="text-[#0048B2] md:text-sm text-[10px]">
                        translation
                      </span>
                      <span className="text-gray-400 md:text-sm text-[10px] ">
                        5min
                      </span>
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
                <i className="ri-camera-line absolute left-[95%] top-1/2 text-lg text-gray-400  transform -translate-x-1/2 -translate-y-1/2"></i>
                <i className="ri-user-smile-line text-lg text-gray-400 absolute md:left-[91%] left-[86%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
              </div>
            </div>
          </div>

          <div className="bg-white p-4  rounded-lg">
            <div>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit quod sapiente aut facilis repellendus temporibus
                corporis, aperiam sunt ducimus eum? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cumque, laudantium?
              </p>
              <hr className="text-gray-300 my-3" />

              <div className="flex items-center justify-between px-4">
                <div className="w-[30%] flex justify-between">
                  <i className="  text-gray-400 text-xl ri-heart-line"></i>
                  <p className="text-md text-gray-400">Likes</p>
                  <i className="  text-gray-400 text-xl ri-chat-2-line"></i>
                  <p className="text-md text-gray-400">140</p>
                </div>
                <p className="text-[#0048B2] ">
                  <i className="text-xl ri-share-line mr-2"></i> 99 share
                </p>
              </div>

              <div className="relative w-full mt-4">
                <input
                  className=" border w-full h-12 text-sm rounded-lg border-gray-300 p-4 text-gray-400"
                  type="search"
                  placeholder="Lovely!"
                />
                <i className="ri-camera-line absolute left-[95%] top-1/2 text-lg text-gray-400  transform -translate-x-1/2 -translate-y-1/2"></i>
                <i className="ri-user-smile-line text-lg text-gray-400 absolute  md:left-[91%] left-[86%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------------*/}

        <div className="lg:w-[25%] sm:w-full flex flex-col gap-4 ">
          <Card title="About" data="132 pics">
            <About mail={users.email} />
          </Card>
          <Card title="stories" data="132 pics">
            <Stories />
          </Card>
          <Card title="Suggestions" data="132 pics">
            <Suggestions />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
