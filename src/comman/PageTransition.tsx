import { motion, AnimatePresence } from "framer-motion";
import runningGif from "../assets/webImages/ninjas-running-24084-1-min-1736334057.gif";

export const PageTransition = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen flex items-center bg-[#FAFAFA] justify-center"
    >
      <motion.img
        src={runningGif}
        alt=""
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};