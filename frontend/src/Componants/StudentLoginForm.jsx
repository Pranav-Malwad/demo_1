import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
const StudentLoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    const username = formData.email;
    const password = formData.password;
    axios
      .post("http://localhost:5000/student-login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          console.log("Its Correct");
          console.log(result);
          // return <Navigate replace to="/home" />;

          navigate(`/studentprofile/${result.data}`);
        }
      })
      .catch((err) => console.log(err));

    console.log("Form submitted with data:", username);
    console.log(formData);
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-600">Don't have an account?</span>
              <Link
                to="/student-register"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Register as an Student
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentLoginForm;
