import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { editUser } from "../../auth/TableDataSlice";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required!"),
  last_name: Yup.string().required("Last Name is required!"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
});

const EditUserForm = ({ onClose, Data }) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values) => {
    console.log("Form Submitted: ", values);
    dispatch(editUser(values));
    onClose(); // optional: close modal/dialog
  };

  if (!Data) return null; // guard clause

  return (
    <Formik
      initialValues={Data}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 mt-6">
            <div className="flex flex-col w-full">
              <label className="text-left text-[18px] text-zinc-400 mb-2">
                First Name
              </label>
              <input
                name="first_name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
                className="w-full h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
              />
              {touched.first_name && errors.first_name && (
                <p className="text-red-500 text-sm mt-2">{errors.first_name}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-left text-[18px] text-zinc-400 mb-2">
                Last Name
              </label>
              <input
                name="last_name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
                className="w-full h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
              />
              {touched.last_name && errors.last_name && (
                <p className="text-red-500 text-sm mt-2">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full mt-4">
            <label className="text-left text-[18px] text-zinc-400 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="w-full h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
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

export default EditUserForm;
