import { motion } from "framer-motion";
import React from "react";

const TopbarSkeleton: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "lg:w-[87%] w-full" : "w-full"
      } flex bg-[#ffffff] justify-between lg:gap-0 md:gap-16 gap-8 items-center py-0 lg:py-2 md:px-12 px-0 md:pl-12 pl-2`}
    >
      {/* Search Section */}
      <div className="flex relative gap-2">
        {!isOpen && (
          <motion.div
            className="absolute md:left-[-15%] left-[-2%] top-1 z-[3000] w-6 h-6 bg-gray-200 rounded-full"
            animate={{
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        <div className="relative">
          <motion.div
            className="md:px-8 px-2 lg:ml-0 ml-10 lg:h-[36px] md:h-[25px] h-[18px] w-[100px] md:w-[150px] lg:w-[304px] bg-gray-200 rounded"
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
            className="absolute text-xs md:text-2xl top-[7px] sm:top-0 left-[87%] md:left-[40px] lg:left-[4px] w-4 h-4 bg-gray-200 rounded-full"
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

      {/* Icons and Profile Section */}
      <div className="flex items-center lg:gap-4 gap-2">
        {/* Icons */}
        <motion.div
          className="lg:h-[28px] lg:w-[28px] h-[15px] w-[15px] bg-gray-200 rounded"
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
          className="lg:h-[25px] lg:w-[25px] h-[12px] w-[12px] bg-gray-200 rounded"
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
          className="lg:h-[20px] lg:w-[20px] h-[12px] w-[12px] bg-gray-200 rounded"
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Profile Section */}
        <motion.div
          className="lg:h-[33px] lg:w-[33px] h-[16px] w-[16px] bg-gray-200 rounded-full"
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="flex flex-col">
          <motion.div
            className="lg:h-4 h-2 w-24 bg-gray-200 rounded"
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
            className="lg:h-3 h-1.5 w-32 bg-gray-200 rounded mt-1"
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
    </div>
  );
};

export default TopbarSkeleton;