// src/components/UserList.tsx

import { FaRegUser, FaEdit, FaTrash, FaSync } from "react-icons/fa";
import bg from "../../assets/webImages/image.png";
import { useAppDispatch } from "../../store/hooks";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import {
  getUsersList,
  loadFromLocalStorage,
} from "../../reducers/table/TableDataSlice";
import AddUserForm from "../../layouts/modalLayout/components/AddUserForm";
import blender from "../../assets/Gallery/blender.png";
import DeleteConfirm from "../../layouts/modalLayout/components/DeleteConfirm";
import EditUserForm from "../../layouts/modalLayout/components/EditUserForm";
import { useEffect, useState } from "react";
import ModalLayout from "../../layouts/modalLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

// Add this interface at the top of the file, after imports
interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// const users = [
//   {
//     profile: cube,
//     name: "Anna Sthesia",
//     email: "annasthesia@gmail.com",
//     contact: "(760) 756 7568",

//     country: "USA",
//     status: "Active",
//     company: "Acme Corporation",
//     joinDate: "2019/12/01",
//   },
//   {
//     profile: ring,
//     name: "Brock Lee",
//     contact: "+62 5689 456 658",
//     email: "brocklee@gmail.com",
//     country: "Indonesia",
//     status: "Active",
//     company: "Soylent Corp",
//     joinDate: "2019/12/01",
//   },
//   {
//     profile: cube,
//     name: "Dan Druff",
//     contact: "+55 6523 456 856",
//     email: "dandruff@gmail.com",
//     country: "Brazil",
//     status: "Pending",
//     company: "Umbrella Corporation",
//     joinDate: "2019/12/01",
//   },
//   {
//     profile: ring,
//     name: "Hans Olo",
//     contact: "+91 2586 253 125",
//     email: "hansolo@gmail.com",
//     country: "India",
//     status: "Inactive",
//     company: "Vehement Capital",
//     joinDate: "2019/12/01",
//   },
//   {
//     profile: cube,
//     name: "Lynn Guini",
//     contact: "+27 2563 456 589",
//     email: "lynnguini@gmail.com",
//     country: "Africa",
//     status: "Active",
//     company: "Massive Dynamic",
//     joinDate: "2019/12/01",
//   },
// ];

// const statusStyles: Record<string, string> = {
//   Active: "bg-blue-600 text-white",
//   Pending: "bg-orange-500 text-white",
//   Inactive: "bg-red-600 text-white",
//   Hold: "bg-teal-600 text-white",
//   Complete: "bg-green-600 text-white",
// };

// Add futuristic animations
const futuristicKeyframes = `
  @keyframes shimmer {
    0% {
      transform: translateX(-100%) skewX(-15deg);
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%) skewX(-15deg);
      opacity: 0.5;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.02);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.7;
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    }
    100% {
      box-shadow: 0 0 5px rgba(59, 130, 246, 0.2);
    }
  }
`;

// Add the keyframes to the document
const style = document.createElement("style");
style.textContent = futuristicKeyframes;
document.head.appendChild(style);

// Update ShimmerEffect component
const ShimmerEffect = () => (
  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
);

// Update SkeletonLoader component
const SkeletonLoader = () => {
  return (
   
  );
};

export default function UserList() {
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  type ModalType = "add" | "edit" | "delete" | null;
  const [modalType, setModalType] = useState<ModalType>(null);
  const dispatch = useAppDispatch();
  const userData = JSON.parse(localStorage.getItem("userData") || "[]");

  // Get the search query from Redux state
  const query = useSelector((state: RootState) => state.search.query);
  console.log("Search Query:", query); // This should now show the actual string value

  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch and store users
  const fetchAndStoreUsers = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch("https://reqres.in/api/users?page=2", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      if (data && data.data) {
        // Get existing users from localStorage
        const existingUsers: User[] = JSON.parse(
          localStorage.getItem("userData") || "[]"
        );

        // Create a map of existing users by id to avoid duplicates
        const existingUsersMap = new Map(
          existingUsers.map((user: User) => [user.id, user])
        );

        // Add new users to the map (this will update existing users and add new ones)
        data.data.forEach((newUser: User) => {
          existingUsersMap.set(newUser.id, newUser);
        });

        // Convert map back to array
        const mergedUsers = Array.from(existingUsersMap.values());

        // Store merged users in localStorage
        localStorage.setItem("userData", JSON.stringify(mergedUsers));
        dispatch(loadFromLocalStorage());
        toast.success("Users refreshed successfully!");
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to refresh users. Please try again.");
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Load data from localStorage first for instant feedback
        dispatch(loadFromLocalStorage());

        // Then fetch fresh data
        await dispatch(getUsersList());
      } catch (error) {
        toast.error("Failed to load data");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [dispatch]);

  // Filter users based on search query
  const filteredUsers = userData.filter((user: any) => {
    const searchLower = query.toLowerCase();
    return (
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(searchLower) || user.email.toLowerCase().includes(searchLower)
    );
  });

  const onClick = (type: ModalType, value: any) => {
    setModalType(type);
    setId(value?.id);
    setData(value);
  };

  const onClose = () => {
    setModalType(null);
  };

  const handleDelete = () => {
    const filteredData = userData.filter((item: any) => item.id !== id);
    localStorage.setItem("userData", JSON.stringify(filteredData));
    dispatch(loadFromLocalStorage());
    setModalType(null);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50  ">
      {/* Banner */}
      <div
        className="h-[100px] md:h-[150px] lg:h-[200px] rounded-b-2xl w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="relative flex items-baseline md:items-center justify-between px-4 md:px-16 py-4 md:py-6">
          <div className="w-full">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-medium">
              Hello Devs !
            </h1>
            <h4 className="text-white mt-2 text-xs md:text-sm lg:text-lg">
              We are on a mission to help developers like you to build beautiful
              projects for free.
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchAndStoreUsers}
              disabled={isRefreshing}
              className="bg-[#3A57E8] w-[150px] py-1 md:py-2 text-white text-xs md:text-sm px-2 md:px-4 rounded flex items-center gap-2 hover:bg-[#2a46d1] transition-all duration-300 relative overflow-hidden group"
            >
              <FaSync
                className={`${
                  isRefreshing
                    ? "animate-[spin_1.5s_linear_infinite] text-blue-200"
                    : "group-hover:rotate-180 transition-transform duration-300"
                } `}
              />
              <span className={`${isRefreshing ? "animate-pulse" : ""}`}>
                {isRefreshing ? "Refreshing..." : "Refresh Users"}
              </span>
              {isRefreshing && (
                <div className="absolute inset-0 bg-blue-400 opacity-20 animate-[pulse_2s_ease-in-out_infinite]"></div>
              )}
            </button>
            <button className="bg-[#3A57E8] py-1 md:py-2 text-white text-xs md:text-sm px-2 md:px-4 rounded">
              <i className="ri-mic-fill text-white mr-2"></i>Announcements
            </button>
          </div>
        </div>
        <button
          onClick={() => onClick("add", null)}
          className="absolute right-8 md:right-16 px-2 py-1 bg-green-500 rounded-full text-white hover:bg-green-600 transition"
        >
          <i className="ri-user-add-fill text-lg"></i>
        </button>
      </div>

      {/* Table Section */}
      <div className="p-4 md:px-8 -mt-8 lg:-mt-12 relative z-10">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="w-full overflow-x-auto bg-white rounded-lg shadow-lg">
            <div className="min-w-[800px] md:min-w-full">
              <table className="w-full table-auto border-collapse">
                <thead className="bg-[#F2F2F2] sticky top-0 z-10">
                  <tr>
                    <th className="px-2 py-2 w-20">Profile</th>
                    <th className="px-4 py-2 w-40">Name</th>
                    <th className="px-4 py-2 w-40">Contact</th>
                    <th className="px-4 py-2 w-40">Email</th>
                    <th className="px-4 py-2 w-32">Country</th>
                    <th className="px-4 py-2 w-24">Status</th>
                    <th className="px-4 py-2 w-40">Company</th>
                    <th className="px-4 py-2 w-32">Join Date</th>
                    <th className="px-4 py-2 w-36">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u: any, i: any) => (
                    <tr
                      key={i}
                      className={i % 2 !== 0 ? "bg-[#F2F2F2]" : "bg-white"}
                    >
                      <td className="px-4 py-2">
                        <img
                          src={u.avatar || blender}
                          alt=""
                          className="w-8 h-8 rounded-full object-cover mx-auto"
                        />
                      </td>
                      <td className="px-4 py-2 text-gray-700 text-center">
                        {u.first_name} {u.last_name}
                      </td>
                      <td className="px-4 py-2 text-gray-700 text-center">
                        +62 5689 456 658
                      </td>
                      <td className="px-4 py-2 text-gray-600 text-center">
                        {u.email}
                      </td>
                      <td className="px-4 py-2 text-gray-600 text-center">
                        USA
                      </td>
                      <td className="px-4 py-2">
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
                          Active
                        </span>
                      </td>
                      <td className="px-4 py-2 text-gray-600 text-center">
                        SOFTRADIX
                      </td>
                      <td className="px-4 py-2 text-gray-600 text-center">
                        1-May-2025
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center justify-center space-x-2">
                          <button className="p-2 bg-green-500 rounded text-white hover:bg-green-600 transition">
                            <FaRegUser />
                          </button>
                          <button
                            onClick={() => onClick("edit", u)}
                            className="p-2 bg-orange-500 rounded text-white hover:bg-orange-600 transition"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => onClick("delete", u)}
                            className="p-2 bg-red-500 rounded text-white hover:bg-red-600 transition"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <ModalLayout
        isOpen={!!modalType}
        onClose={onClose}
        title={modalType?.toUpperCase() + "User"}
      >
        {modalType === "add" && <AddUserForm onClose={onClose} />}
        {modalType === "edit" && <EditUserForm onClose={onClose} Data={data} />}
        {modalType === "delete" && (
          <DeleteConfirm
            onClose={onClose}
            handleDelete={handleDelete}
            id={id}
            Data={data}
          />
        )}
      </ModalLayout>
    </div>
  );
}
