import { motion } from "framer-motion";
import React from "react";

const DashboardSkeleton: React.FC = () => {
  // Enhanced pulse animation with better timing
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

  // Enhanced shimmer effect with better gradient
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

  return (
    <motion.div 
      className="p-6 space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header Section with enhanced animation */}
      <motion.div 
        className="flex justify-between items-center"
        variants={itemVariants}
      >
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
          className="h-10 w-32 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg relative overflow-hidden"
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

      {/* Stats Cards Grid with staggered animation */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden"
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
              <motion.div
                className="h-3 w-32 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded relative overflow-hidden"
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

      {/* Charts Section with enhanced animations */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {[...Array(2)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="h-6 w-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded mb-4 relative overflow-hidden"
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
            <div className="h-[300px] bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-lg relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                variants={shimmerAnimation}
                initial="initial"
                animate="animate"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Activity Section with enhanced animations */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden"
        variants={itemVariants}
      >
        <motion.div
          className="h-6 w-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded mb-6 relative overflow-hidden"
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
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <motion.div
                className="h-10 w-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full relative overflow-hidden"
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
              <div className="flex-1 space-y-2">
                <motion.div
                  className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded relative overflow-hidden"
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
                  className="h-3 w-1/2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded relative overflow-hidden"
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardSkeleton;