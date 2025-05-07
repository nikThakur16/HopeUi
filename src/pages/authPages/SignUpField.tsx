import { Formik } from "formik";
import * as Yup from "yup";
import facebook from "../../assets/webImages/facebook.png";
import linkdln from "../../assets/webImages/linkdln.png";
import instagram from "../../assets/webImages/instagram.png";
import google from "../../assets/webImages/google.png";
import { Link, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { register } from "../../reducers/auth/AuthSlice";
import { useState } from "react";



const SignUpField = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: 0,
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  };
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const {token } = useAppSelector((s)=>s.auth)

  if(token) return <Navigate to="/admin" replace/>


  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNo: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
    agreeTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    setLoading(true)
    await new Promise (resolve => setTimeout(resolve, 3000))

    dispatch(register(values));
    setLoading(false)
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit} className="w-full flex-col flex items-center justify-center">
          <div className="lg:min-w-[450px]  min-w-[300px] flex  gap-2 mt-6">
            <div className="flex flex-col  w-full">
              <label className="text-left md:text-md  text-[12px] text-zinc-400 mb-2">First Name</label>
              <input
                name="firstName"
                type="text"
                className="w-full md:h-[33px]  h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {touched.firstName && errors.firstName && (
                <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-left text-zinc-400 md:text-md  text-[12px] mb-2">Last Name</label>
              <input
                name="lastName"
                type="text"
                className="w-full md:h-[33px]  h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {touched.lastName && errors.lastName && (
                <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="lg:min-w-[450px]  min-w-[300px]  flex  gap-2 mt-6">
            <div className="flex flex-col w-full">
              <label className="text-left md:text-md  text-[12px] text-zinc-400 mb-2">Email</label>
              <input
                name="email"
                type="email"
                className="w-full md:h-[33px]  h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm mt-2">{errors.email}</div>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-left text-zinc-400 md:text-md  text-[12px] mb-2">Phone No</label>
              <input
                name="phoneNo"
                type="text"
                className="w-full md:h-[33px]  h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNo}
              />
              {touched.phoneNo && errors.phoneNo && (
                <div className="text-red-500 text-sm mt-2 ">{errors.phoneNo}</div>
              )}
            </div>
          </div>

          <div className="lg:min-w-[450px]  min-w-[300px]  flex  gap-2 mt-6">
            <div className="flex flex-col w-full">
              <label className="text-left text-zinc-400 md:text-md  text-[12px] mb-2">Password</label>
              <input
                name="password"
                type="password"
                className="w-full md:h-[33px]  h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className="text-red-500 text-sm mt-2">{errors.password}</div>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-left text-zinc-400 md:text-md  text-[12px] mb-2">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                className="w-full md:h-[33px]  h-[28px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="lg:min-w-[450px]  min-w-[300px]  flex items-center justify-center mt-4 ">
            <input
              type="checkbox"
              name="agreeTerms"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.agreeTerms}
              id="agreeTerms"
            />
            <label htmlFor="agreeTerms" className="ml-2  text-zinc-400 md:text-md text-xs">
              I agree with the terms of use
            </label>
          </div>
          {touched.agreeTerms && errors.agreeTerms && (
            <div className="text-red-500 text-sm mt-2">{errors.agreeTerms}</div>
          )}
<button
            type="submit"
            disabled={loading}
            className="bg-[#3A57E8] xl:px-[24px] md:px-[15px] md:py-[5px] xl:py-[8px] h-[44px] w-[188px] md:h-[36px] md:w-[150px] rounded text-white mt-8 md:mt-6 font-large"
          >
            {loading ? (
              <div className="loader"></div>
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="text-[#232D42] tracking-wider text-[14px] md:text-[16px] mt-4 ">
            or sign in with other accounts?
          </p>

          <div className="flex gap-2 md:mt-4 mt-2 items-center">
            <img className="h-[40px] w-[40px]" src={google} alt="Google" />
            <img className="h-[40px] w-[40px]" src={facebook} alt="Facebook" />
            <img className="h-[40px] w-[40px]" src={instagram} alt="Instagram" />
            <img className="h-[40px] w-[40px]" src={linkdln} alt="LinkedIn" />
          </div>

          <p className="mt-2 text-[#232D42] text-[12px] md:text-[16px] tracking-wider">
            Already have an Account?{" "}
            <Link to="/login" className="text-[#3A57E8] tracking-wider cursor-pointer">
              Click here to sign up.
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SignUpField;
