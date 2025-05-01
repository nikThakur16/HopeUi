// src/components/UserList.tsx
import React, { useState } from "react";
import { FaRegUser, FaEdit, FaTrash } from "react-icons/fa";
import bg from "../../assets/image.png";
import { useAppSelector } from "../../app/hooks";
import cube from "../../assets/Gallery/cube.png";
import ring from "../../assets/Gallery/ring.png";
import ModalLayout from "./ModalLayout";
import { AddUserForm } from "./AddUserForm";
import { EditUserForm } from "./EditUserForm";
import { DeleteConfirm } from "./DeleteConfirm";

const users = [
  {
    profile: cube,
    name: "Anna Sthesia",
    contact: "(760) 756 7568",
    email: "annasthesia@gmail.com",
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
  type modalType = "add" | "edit" | "delete" | null;

  const [modalType, setModalType] = useState<modalType>(null);
  const onClick = (type: modalType) => {
    setModalType(type);
  };
  console.log("sgdghdfgbfgb", modalType);

  const onClose = () => {
    setModalType(null);
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div
        className="h-[100px] md:h-[140px] lg:h-[200px] rounded-b-2xl w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative flex items-baseline md:items-center justify-between px-4 md:px-16 py-4 md:py-8">
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
      </div>

      {/* Table Section */}
      <div className="p-4 md:px-8 mt-[-5%]">
        <div className="w-full  overflow-y-auto overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-[1200px] w-full table-auto border-collapse">
            <thead className="bg-[#F2F2F2] sticky top-0">
              <tr>
                <th className="px-4 py-2 w-20">Profile</th>
                <th className="px-4 py-2 w-40">Name</th>
                <th className="px-4 py-2 w-56">Contact</th>
                <th className="px-4 py-2 w-48">Email</th>
                <th className="px-4 py-2 w-28">Country</th>
                <th className="px-4 py-2 w-24">Status</th>
                <th className="px-4 py-2 w-44">Company</th>
                <th className="px-4 py-2 w-32">Join Date</th>
                <th className="px-4 py-2 w-36">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr
                  key={i}
                  className={i % 2 !== 0 ? "bg-[#F2F2F2]" : "bg-white"}
                >
                  <td className="px-4 py-2">
                    <img
                      src={u.profile}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-700">{u.name}</td>
                  <td className="px-4 py-2 text-gray-700">{u.contact}</td>
                  <td className="px-4 py-2 text-gray-600">{u.email}</td>
                  <td className="px-4 py-2 text-gray-600">{u.country}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full font-semibold ${
                        statusStyles[u.status]
                      }`}
                    >
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-gray-600">{u.company}</td>
                  <td className="px-4 py-2 text-gray-600">{u.joinDate}</td>
                  <td className="px-4 py-2 flex items-center space-x-2">
                    <button   data-modal-target="crud-modal"
                      data-modal-toggle="crud-modal"
                      onClick={()=>onClick("add")} className="p-2 bg-green-500 rounded text-white hover:bg-green-600 transition">
                      <FaRegUser />
                    </button>
                    <button
                      data-modal-target="crud-modal"
                      data-modal-toggle="crud-modal"
                      onClick={()=>onClick("edit")}
                      className="p-2 bg-orange-500 rounded text-white hover:bg-orange-600 transition"
                    >
                      <FaEdit />
                    </button>
                    <button   data-modal-target="crud-modal"
                      data-modal-toggle="crud-modal"
                      onClick={()=>onClick("delete")} className="p-2 bg-red-500 rounded text-white hover:bg-red-600 transition">
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
        {modalType === "edit" && <EditUserForm onClose={onClose} />}
        {modalType === "delete" && <DeleteConfirm onClose={onClose} />}
      </ModalLayout>
    </div>
  );
}
