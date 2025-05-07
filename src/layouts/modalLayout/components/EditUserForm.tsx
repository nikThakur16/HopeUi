import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../store/hooks";
import { editUser } from "../../../reducers/table/TableDataSlice";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required!"),
  last_name: Yup.string().required("Last Name is required!"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const EditUserForm = ({
  onClose,
  Data,
}: {
  onClose: () => void;
  Data: any;
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(editUser(values));
      setIsLoading(false);
      setShowSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onClose();
      toast.success("User updated successfully!");
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to update user");
    }
  };

  if (!Data) return null;

  if (isLoading) return <div className="theme-loader"></div>;

  return (
    <Formik
      initialValues={Data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex flex-col items-center justify-center"
        >
          <AnimatePresence>
            {showSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center"
              >
                <motion.div
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  <motion.svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-2xl font-semibold text-gray-800 mb-2"
                >
                  Success!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-600"
                >
                  User updated successfully
                </motion.p>
              </motion.div>
            ) : (
              <>
                <motion.div 
                  className="flex gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div 
                    className="flex flex-col w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-left text-[18px] text-zinc-400 mb-2">
                      First Name
                    </label>
                    <motion.input
                      name="first_name"
                      type="text"
                      className="w-full h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9] transition-all duration-200"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first_name}
                      whileFocus={{ scale: 1.02 }}
                    />
                    {touched.first_name && errors.first_name && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.first_name as string}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div 
                    className="flex flex-col w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-left text-[18px] text-zinc-400 mb-2">
                      Last Name
                    </label>
                    <motion.input
                      name="last_name"
                      type="text"
                      className="w-full h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9] transition-all duration-200"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                      whileFocus={{ scale: 1.02 }}
                    />
                    {touched.last_name && errors.last_name && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.last_name as string}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="flex flex-col w-full mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="flex flex-col w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-left text-[18px] text-zinc-400 mb-2">
                      Email
                    </label>
                    <motion.input
                      name="email"
                      type="email"
                      className="w-full h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9] transition-all duration-200"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      whileFocus={{ scale: 1.02 }}
                    />
                    {touched.email && errors.email && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-2"
                      >
                        {errors.email as string}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="flex justify-center gap-12 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 transition-all duration-200"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50 transition-all duration-200"
                  >
                    Save
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.form>
      )}
    </Formik>
  );
};

export default EditUserForm;
