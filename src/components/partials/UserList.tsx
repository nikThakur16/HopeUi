// src/components/UserList.tsx
import React, { useEffect, useState } from "react";
import { FaRegUser, FaEdit, FaTrash } from "react-icons/fa";
import bg from "../../assets/image.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import cube from "../../assets/Gallery/cube.png";
import ring from "../../assets/Gallery/ring.png";
import ModalLayout from "./ModalLayout";



import { getUsersList, loadFromLocalStorage } from "../../auth/TableDataSlice";
import AddUserForm from "./AddUserForm";
import blender from "../../assets/Gallery/blender.png"
import DeleteConfirm from "./DeleteConfirm";
import EditUserForm from "./EditUserForm";

const users = [
  {
    profile: cube,
    name: "Anna Sthesia",
    email: "annasthesia@gmail.com",
    contact: "(760) 756 7568",

    country: "USA",
    status: "Active",
    company: "Acme Corporation",
    joinDate: "2019/12/01",
  },
  {
    profile: ring,
    name: "Brock Lee",
    contact: "+62 5689 456 658",
    email: "brocklee@gmail.com",
    country: "Indonesia",
    status: "Active",
    company: "Soylent Corp",
    joinDate: "2019/12/01",
  },
  {
    profile: cube,
    name: "Dan Druff",
    contact: "+55 6523 456 856",
    email: "dandruff@gmail.com",
    country: "Brazil",
    status: "Pending",
    company: "Umbrella Corporation",
    joinDate: "2019/12/01",
  },
  {
    profile: ring,
    name: "Hans Olo",
    contact: "+91 2586 253 125",
    email: "hansolo@gmail.com",
    country: "India",
    status: "Inactive",
    company: "Vehement Capital",
    joinDate: "2019/12/01",
  },
  {
    profile: cube,
    name: "Lynn Guini",
    contact: "+27 2563 456 589",
    email: "lynnguini@gmail.com",
    country: "Africa",
    status: "Active",
    company: "Massive Dynamic",
    joinDate: "2019/12/01",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-blue-600 text-white",
  Pending: "bg-orange-500 text-white",
  Inactive: "bg-red-600 text-white",
  Hold: "bg-teal-600 text-white",
  Complete: "bg-green-600 text-white",
};

export default function UserList() {
  // const[open,setOpen]=useState(false)

  // const onClose=()=>{
  //   setOpen(false)
  // }
  const table = useAppSelector((state) => state.table.TableData);

  // console.log("tableData", table[9]);

  // const mergeData=users.map((item,index)=>{
  //   const apiData=table[index]||{};
  //   return{
  //     name:apiData.first_name+"     "+apiData.last_name,
  //     email:apiData.email,
  //     profile:apiData.avatar,
  //     contact: item.contact,

  //     country: item.country,
  //     status: item.status,
  //     company: item.company,
  //     joinDate: item.joinDate,

  //   }
  // })
const [id ,setId] = useState(null )
const[data,setData]=useState(null)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFromLocalStorage()); // Load from localStorage first
    dispatch(getUsersList()); 
    // Optionally fetch from API
  }, [dispatch]);
  
  const userData = JSON.parse(localStorage.getItem("userData") || "[]");

  console.log("local data",userData)

  type modalType = "add" | "edit" | "delete" | null;

  const [modalType, setModalType] = useState<modalType>(null);
  const onClick = (type: modalType,value:any) => {
    setModalType(type);
    setId(value)
    setData(value)
  };
  console.log("sgdghdfgbfgb", modalType);

  const onClose = () => {
    setModalType(null);
   
  };
  const handleDelete=()=>{
    const filtereddata:any=userData.filter((item:any)=>item.id != id);
   localStorage.setItem("userData",JSON.stringify(filtereddata))
   setModalType(null);
 }
 
  



  return (
    <div className="w-full">
      {/* Banner */}
      <div
        className="h-[100px] md:h-[150px] lg:h-[200px] rounded-b-2xl w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative flex items-baseline md:items-center justify-between px-4 md:px-16 py-4 md:py-6">
          <div className="w-full">
            <h1 className="text-white md:text-2xl lg:text-4xl font-medium tracking-tighter">
              Hello Devs !
            </h1>
            <h4 className="text-white mt-2 text-[10px] md:text-sm lg:text-lg">
              We are on a mission to help developers like you to build beautiful
              projects for free.
            </h4>
          </div>
          <button className="absolute right-0 md:right-10 bg-[#3A57E8] py-[7px] text-gray-200 text-[10px] md:text-sm px-2 md:px-[20px] rounded">
            <i className="ri-mic-fill text-white mr-2"></i>Announcements
          </button>
        </div>
        <i
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          onClick={() => onClick("add")}
          className="p-2 ml-[94%] ri-user-add-fill  bg-green-500 rounded text-white hover:bg-green-600 transition"
        ></i>
      </div>

      {/* Table Section */}
      <div className="p-4 md:px-8 mt-[-3%]">
        <div className="w-full  overflow-y-auto overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-[1400px] w-full table-auto border-collapse">
            <thead className="bg-[#F2F2F2] sticky top-0">
              <tr>
                <th className="px-2 py-2 w-30">Profile</th>
                <th className="px-4 py-2 w-40">Name</th>
                <th className="px-4 py-2 w-56">Contact</th>
                <th className="px-4 py-2 w-50">Email</th>
                <th className="px-4 py-2 w-28">Country</th>
                <th className="px-4 py-2 w-25">Status</th>
                <th className="px-4 py-2 w-50">Company</th>
                <th className="px-4 py-2 w-32">Join Date</th>
                <th className="px-4 py-2 w-36">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((u:any, i:any) => (
                <tr
                  key={i}
                  className={i % 2 !== 0 ? "bg-[#F2F2F2]" : "bg-white"}
                >
                  <td className="px-4 py-2 flex items-center justify-center">
                    <img
                      src={u.avatar|| blender}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-700 text-center">
                    {u.first_name} {u.last_name}
                  </td>
                  <td className="px-4 py-2 text-gray-700 text-center ">
                    +62 5689 456 658
                  </td>
                  <td className="px-4 py-2 text-gray-600 text-center">
                    {u.email}
                  </td>
                  <td className="px-4 py-2 text-gray-600 text-center">USA</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ml-4 font-semibold bg-blue-600 text-white
                       
                      }`}
                    >
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-600 text-center">
                    SOFTRADIX
                  </td>
                  <td className="px-4 py-2 text-gray-600 text-center">
                    1-May-2025
                  </td>
                  <td className="px-4 py-2 flex items-center space-x-2 text-center">
                    <button className="p-2 bg-green-500 rounded text-white hover:bg-green-600 transition">
                      <FaRegUser />
                    </button>
                    <button
                      data-modal-target="crud-modal"
                      data-modal-toggle="crud-modal"
                      onClick={() => onClick("edit",u)}
                      className="p-2 bg-orange-500 rounded text-white hover:bg-orange-600 transition"
                    >
                      <FaEdit />
                    </button>
                    <button
                      data-modal-target="crud-modal"
                      data-modal-toggle="crud-modal"
                      onClick={() => onClick("delete" , u.id)}
                      id={u.id}
                      className="p-2 bg-red-500 rounded text-white hover:bg-red-600 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ModalLayout
        isOpen={!!modalType}
        onClose={onClose}
        
        // title={modalType?.toUpperCase()}
      >
        {modalType === "add" && <AddUserForm onClose={onClose} />}
        {modalType === "edit" && <EditUserForm onClose={onClose} Data={data} />}
        {modalType === "delete" && <DeleteConfirm onClose={onClose} handleDelete={handleDelete} id={id}/>}
      </ModalLayout>
    </div>
  );
}
