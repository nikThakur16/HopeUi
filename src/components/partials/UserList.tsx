import bg from "../../assets/image.png";


const UserList = () => {


  return (
    <div>
         <div
        className="md:h-[140px] h-[100px] lg:h-[200px] rounded-b-2xl w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="  relative flex :items-center items-baseline justify-baseline md:justify-between  py-4 px-4  md:px-16 md:py-8 w-full bg-cover bg-center ">
         <div className="w-full " >
         <h1 className="text-[#ffffff] md:text-2xl text-md lg:text-4xl font-medium tracking-tighter ">
            {" "}
            Hello Devs !
          </h1>
          <h4 className="text-white font-normal mt-2 text-[10px] md:text-sm lg:text-lg lg:tracking-wider">We are on a mission to help developers like you to build beautiful projects for free.</h4>
         </div>
          <button className=" absolute right-0 md:right-10 bg-[#3A57E8] inline-block md:py-[7px] py-0.5 text-start text-gray-200 text-[10px] md:text-sm px-2 md:px-[20px] rounded">
            {" "}
            <i className="ri-mic-fill text-white mr-2"></i>Announcements{" "}
          </button>
        </div>
  
      </div>
    
    </div>
  )
}

export default UserList