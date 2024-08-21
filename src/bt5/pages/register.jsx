import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import CustomTextField from "../components/customTextField";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { notification } from "../ultil/helper";

function Register5() {
  const validationSchema = yup.object({
    fullname: yup.string().required("Please enter your full name"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      notification("Register successful");
    },
  });

  return (
    <div className="relative">
      <div className="h-[240px]">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative -mt-40 m-4">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl"
        >
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-bold text-center">
              Register
            </h3>
          </div>
          <div>
            <div className="relative">
              <CustomTextField
                label="Enter full name"
                value={formik.values.fullname}
                onChange={formik.handleChange("fullname")}
                required
                type="text"
                color="error"
                helperText={
                  Boolean(formik.touched.fullname) && formik.errors.fullname
                }
                error={
                  Boolean(formik.touched.fullname) &&
                  Boolean(formik.errors.fullname)
                }
                icon={<PersonIcon />}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="relative">
              <CustomTextField
                label="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                required
                type="email"
                color="error"
                helperText={
                  Boolean(formik.touched.email) && formik.errors.email
                }
                error={
                  Boolean(formik.touched.email) && Boolean(formik.errors.email)
                }
                icon={<EmailIcon />}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="relative">
              <CustomTextField
                label="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                required
                type="password"
                color="error"
                helperText={
                  Boolean(formik.touched.password) && formik.errors.password
                }
                error={
                  Boolean(formik.touched.password) &&
                  Boolean(formik.errors.password)
                }
                icon={<VisibilityIcon />}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="relative">
              <CustomTextField
                label="Confirm password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange("confirmPassword")}
                required
                type="password"
                color="error"
                helperText={
                  Boolean(formik.touched.confirmPassword) && formik.errors.confirmPassword
                }
                error={
                  Boolean(formik.touched.confirmPassword) &&
                  Boolean(formik.errors.confirmPassword)
                }
                icon={<VisibilityIcon />}
              />
            </div>
          </div>
          <div className="flex items-center mt-8">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 shrink-0 rounded"
            />
            <label htmlFor="remember-me" className="ml-3 block text-sm">
              I accept the{" "}
              <Link className="text-[#b22830] font-semibold hover:underline ml-1">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold tracking-wider rounded-md text-white bg-[#b22830] hover:bg-[#f97c00e1] focus:outline-none transition-all"
            >
              Register
            </button>
            <p className="text-gray-800 text-sm mt-8 text-center">
              Already have an account?{" "}
              <NavLink
                to="/bt5/login"
                className="text-[#b22830] font-semibold hover:underline ml-1"
              >
                Login here
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register5;
