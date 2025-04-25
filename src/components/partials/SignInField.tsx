import facebook from "../../assets/facebook.png";
import linkdln from "../../assets/linkdln.png";
import instagram from "../../assets/instagram.png";
import google from "../../assets/google.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as Yup from 'yup';
import { login } from "../../auth/AuthSlice";
import { Formik } from "formik";
import { Link, Navigate } from "react-router-dom";

const SignInField = () => {
  const dispatch = useAppDispatch();

  const {token , loading, error} = useAppSelector((s)=>s.auth)

  if(token) return <Navigate to="/admin" replace/>

  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = (values: typeof initialValues) => {
    dispatch(login(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit} className="w-full flex-col flex items-center justify-center">
          <div className="min-w-[450px] mt-6">
            <label className="block text-left font-lighter text-zinc-400 mb-2">Email</label>
            <input
              className="w-full h-[44px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div className="min-w-[450px] mt-6">
            <label className="block text-left font-lighter text-zinc-400 mb-2">Password</label>
            <input
              className="w-full h-[44px] px-4 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          <div className="min-w-[450px] flex items-center justify-between mt-2">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-1 text-zinc-400 text-md" htmlFor="remember">
                Remember me?
              </label>
            </div>
            <h5 className="text-[#0286F7] font-large text-lg cursor-pointer">
              Forget password
            </h5>
          </div>

          <button
            type="submit"
            className="bg-[#3A57E8] px-[24px] py-[8px] h-[44px] w-[188px] rounded text-white mt-8 font-large"
          >
            Sign In
          </button>

          <p className="text-[#232D42] tracking-wider text-[16px] mt-4">
            or sign in with other accounts?
          </p>

          <div className="flex gap-2 mt-4 items-center">
            <img className="h-[40px] w-[40px]" src={google} alt="Google" />
            <img className="h-[40px] w-[40px]" src={facebook} alt="Facebook" />
            <img className="h-[40px] w-[40px]" src={instagram} alt="Instagram" />
            <img className="h-[40px] w-[40px]" src={linkdln} alt="LinkedIn" />
          </div>

          <p className="mt-2 text-[#232D42] text-[16px] tracking-wider">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[#3A57E8] tracking-wider cursor-pointer">
              Click here to sign up.
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SignInField;
