import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../app/hooks";
import { addUser } from "../../../reducers/table/TableDataSlice";
import { useState } from "react";

const AddUserForm = ({onClose}:{onClose:()=>void}) => {
  const [error, setError] = useState<string | null>(null);
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required!"),
    last_name: Yup.string().required("Last Name is required!"),
    email: Yup.string().email("enter A valid mail").required("mail is required"),
  });

  const dispatch = useAppDispatch();

  const handleFormSubmit = async (values: typeof initialValues) => {
    try {
      console.log("Form Submitted: ", values);
      const userWithId = {
        id: crypto.randomUUID(),
        ...values
      };
      dispatch(addUser(userWithId));
      onClose(); // Close the modal on success
    } catch (error: any) {
      if (error.message === "Email already exists") {
        setError("This email is already registered. Please use a different email.");
      } else {
        setError("An error occurred while adding the user.");
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          <div className="flex gap-2 mt-6">
            <div className="flex flex-col w-full">
              <label className="text-left text-[18px] text-zinc-400 mb-2">
                First Name
              </label>
              <input
                name="first_name"
                type="text"
                className="w-full md:h-[33px] h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
              />
              {touched.first_name && errors.first_name && (
                <p className="text-red-500 text-sm mt-2">{errors.first_name}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-left text-zinc-400 text-[18px] mb-2">
                Last Name
              </label>
              <input
                name="last_name"
                type="text"
                className="w-full md:h-[33px] h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
              />
              {touched.last_name && errors.last_name && (
                <p className="text-red-500 text-sm mt-2">{errors.last_name}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-left text-[18px] text-zinc-400 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full md:h-[33px] h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm mt-2">{errors.email}</div>
            )}
          </div>
          <div className="flex justify-between gap-3 mt-4">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddUserForm;