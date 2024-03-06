import React from "react";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    axios.get("/");
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(data);
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Enter Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Enter Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
