import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getUsers } from "../../../reducers/user"
import flag from "../../../assets/webImages/flag.png";
import message from "../../../assets/webImages/message.png";
import notification from "../../../assets/webImages/notification.png";

const Topbar = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void } ) => {
  
  const dispatch = useAppDispatch();
  const { users  } = useAppSelector((state) => state.user);
  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div
      className={` ${
        isOpen ? "lg:w-[87%] w-full" : "w-full "
      } flex  bg-[#ffffff] justify-between  lg:gap-0 md:gap-16 py-0 lg:py-2 xl:px-12 px-16  md:pl-12 `}
    >
      <div className="flex relative gap-2">
        {/* <button >{isOpen?"close":"open"}</button> */}

        <i
          onClick={onClick}
          className={`absolute text-xs md:text-lg lg:text-xl px-1 md:px-1 py-0.5 md:py-0 text-zinc-200 font-semibold rounded-full ${
            isOpen
              ? " hidden "
              : "md:left-[-15%] left-[-2%] ri-arrow-right-line"
          } top-1 z-[3000] border-none bg-[#0048B2] `}
        ></i>
        <div className="relative">
          <input
            className=" md:px-8 px-2 text-[10px] lg:text-xl border lg:ml-0 ml-10 border-gray-200 text-gray-400 lg:h-[36px] md:h-[25px] h-[18px] w-[100px] md:w-[150px] lg:w-[304px]"
            type="search"
            placeholder="search..."
          />
          <i className="ri-search-line absolute text-xs md:text-2xl text-gray-300 top-[7px] sm:top-0 left-[87%] md:left-[40px] lg:left-[4px]"></i>
        </div>
      </div>
      <div className="flex items-center lg:gap-4 gap-2">
        <img
          className="lg:h-[28px] lg:w-[28px] h-[15px] w-[15px] "
          src={flag}
          alt=""
        />
        <img
          className=" lg:h-[25px] lg:w-[25px] h-[12px] w-[12px] "
          src={notification}
          alt=""
        />
        <img
          className="lg:h-[20px] lg:w-[20px]  h-[12px] w-[12px] "
          src={message}
          alt=""
        />
        <img
          className="lg:h-[33px] lg:w-[33px] h-[16px] w-[16px] rounded-full"
          src={users.avatar}
          alt=""
        />
        <div className="flex flex-col ">
          <p className="lg:text-sm text-[8px] tracking-tighter text-zinc-700">
            {users.first_name} {users.last_name}
          </p>
          <p className="text-[5px] lg:text-sm  tracking-tighter text-zinc-400">Marketing Adminstrator</p>
        </div>
      </div>
      
    </div>
  );
};

export default Topbar;
