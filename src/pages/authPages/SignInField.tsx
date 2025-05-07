import facebook from "../../assets/webImages/facebook.png";
import linkdln from "../../assets/webImages/linkdln.png";
import instagram from "../../assets/webImages/instagram.png";
import google from "../../assets/webImages/google.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as Yup from "yup";

import { Formik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../reducers/auth/AuthSlice";
import { useState } from "react";


const SignInField = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { token, error } = useAppSelector((s) => s.auth);
  console.log(token, error);

  // if (token) return <Navigate to="/admin" replace />;



  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });


  const handleSubmit = async (values: typeof initialValues) => {
    setLoading(true);
    try {
      await dispatch(login(values));
      // Don't redirect here - let the parent handle it
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
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
        <form
          onSubmit={handleSubmit}
          className="w-full flex-col flex items-center justify-center"
        >
          <div className="xl:min-w-[450px] md:min-w-[300px]  min-w-[270px]   min mt-6">
            <label className="block  text-left font-lighter text-zinc-400 mb-2">
              Email
            </label>
            <input
              className="w-full  h-[44px] px-4 md:px-1 border border-[#3A57E8] rounded focus:outline-none focus:ring-2 focus:ring-[#50BCD9]"
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

          <div className="text-red-500 text-sm mt-1">
            {error && <p>{error}</p>}
          </div>

          <div className="xl:min-w-[450px] md:min-w-[300px]  min-w-[270px]    mt-6">
            <label className="block text-left font-lighter text-zinc-400 mb-2">
              Password
            </label>
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

          <div className="xl:min-w-[450px]  min-w-[270px] md:min-w-[300px]  flex items-center justify-between mt-2">
            <div>
              <input type="checkbox" id="remember" />
              <label
                className="ml-1 text-zinc-400 md:text-sm xl:text-[16px] text-xs"
                htmlFor="remember"
              >
                Remember me?
              </label>
            </div>
            <h5 className="text-[#0286F7] font-large md:text-sm xl:text-[16px] text-xs cursor-pointer">
              Forget password
            </h5>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#3A57E8] xl:px-[24px] md:px-[15px] md:py-[5px] xl:py-[8px] h-[44px] w-[188px] md:h-[36px] md:w-[150px] rounded text-white mt-8 md:mt-6 font-large"
          >
            {loading ? (
              <div className="loader"></div>
            ) : (
              "Sign In"
            )}
          </button>

          <p className="text-[#232D42] tracking-wider md:text-sm xl:text-[16px] text-xs mt-4">
            or sign in with other accounts?
          </p>

          <div className="flex gap-2 mt-4 items-center">
            <img
              className="xl:h-[50px] xl:w-[50px] h-[30px]  w-[30px]"
              src={google}
              alt="Google"
            />
            <img
              className="xl:h-[50px] xl:w-[50px] h-[30px] w-[30px]"
              src={facebook}
              alt="Facebook"
            />
            <img
              className="xl:h-[50px] xl:w-[50px] h-[30px] w-[30px]"
              src={instagram}
              alt="Instagram"
            />
            <img
              className="xl:h-[50px] xl:w-[50px] h-[30px] w-[30px]"
              src={linkdln}
              alt="LinkedIn"
            />
          </div>

          <p className="xl:mt-2 text-[#232D42] md:text-sm xl:text-[16px] text-xs tracking-wider">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#3A57E8] md:text-sm xl:text-[16px] text-xs tracking-wider cursor-pointer"
            >
              Click here to sign up.
            </Link>
          </p>
        </form>
      )}
    </Formik>
  );
};

export default SignInField;

/* HTML: <div class="loader"></div> */


