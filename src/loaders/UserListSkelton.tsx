import { motion } from "framer-motion";
import React from "react";

const UserListSkeleton: React.FC = () => {
  // Animation variants for the pulse effect
  const pulseAnimation = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the shimmer effect
  const shimmerAnimation = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 1.8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Stagger animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

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
        box-shadow: 0 0 5px rgba(229, 231, 235, 0.2);
      }
      50% {
        box-shadow: 0 0 20px rgba(229, 231, 235, 0.4);
      }
      100% {
        box-shadow: 0 0 5px rgba(229, 231, 235, 0.2);
      }
    }
  `;

  // Add the keyframes to the document
  const style = document.createElement("style");
  style.textContent = futuristicKeyframes;
  document.head.appendChild(style);

  // Update ShimmerEffect component
  const ShimmerEffect = () => (
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
  );

  return (
    <motion.div 
      className="p-6 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header Section with Greeting and Announcement */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        variants={itemVariants}
      >
        <div className="space-y-2">
          <motion.div
            className="h-8 w-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg relative overflow-hidden"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              variants={shimmerAnimation}
              initial="initial"
              animate="animate"
            />
          </motion.div>
          <motion.div
            className="h-4 w-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded relative overflow-hidden"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              variants={shimmerAnimation}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </div>
        <motion.div
          className="h-10 w-40 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg relative overflow-hidden"
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            variants={shimmerAnimation}
            initial="initial"
            animate="animate"
          />
        </motion.div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 animate-[glow_3s_infinite] relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="space-y-3">
              <motion.div
                className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded relative overflow-hidden"
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  variants={shimmerAnimation}
                  initial="initial"
                  animate="animate"
                />
              </motion.div>
              <motion.div
                className="h-8 w-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded relative overflow-hidden"
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  variants={shimmerAnimation}
                  initial="initial"
                  animate="animate"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Table Section */}
      <div className="w-full overflow-x-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 animate-[glow_3s_infinite]">
        <div className="min-w-[800px] md:min-w-full">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 sticky top-0 z-10 backdrop-blur-sm">
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
              {[...Array(13)].map((_, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 !== 0 ? "bg-gray-200/5" : "bg-white/50"
                  } backdrop-blur-sm transition-all duration-300 hover:bg-gray-200/10`}
                >
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-500/20 to-gray-400/10 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="h-4 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded w-24 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="h-4 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded w-32 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="h-4 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded w-36 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="h-4 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded w-20 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="h-6 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded-full w-16 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="h-4 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded w-24 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="relative overflow-hidden animate-[pulse_2s_infinite]">
                      <div className="h-4 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded w-24 mx-auto" />
                      <ShimmerEffect />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center justify-center space-x-2">
                      {[...Array(3)].map((_, btnIndex) => (
                        <div
                          key={btnIndex}
                          className="relative overflow-hidden animate-[pulse_2s_infinite]"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-gray-500/20 to-gray-400/10 rounded" />
                          <ShimmerEffect />
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4">
        <motion.div
          className="w-32 h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded"
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded"
            animate={{
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded"
            animate={{
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UserListSkeleton;