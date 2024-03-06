import React, { useState } from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={data.name}
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
          />
        </div>
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
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
