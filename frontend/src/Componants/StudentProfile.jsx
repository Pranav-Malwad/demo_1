// StudentProfile.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StudentProfile = () => {
  const { id } = useParams();

  const avatar =
    "data:image/jpeg;base64,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";

  const [studentData, setStudentData] = useState({
    stu_name: "",
    stu_email: "",
    stu_phone: "",
    avatar: "https://via.placeholder.com/150", // Placeholder image URL
  });

  useEffect(() => {
    axios
      .post("http://localhost:5000/getprofile", { id })
      .then((user) => {
        setStudentData(user.data);
        // console.log(user);
        console.log("Users arrray : ", user.data);
        const name1 = user.data.stu_name;
        console.log(name1);
      })
      .catch((err) => console.log("This is error", err));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <div className="text-center">
            <img
              src={avatar}
              //   src={studentData.avatar}
              alt="Student Avatar"
              className="w-32 h-32 mx-auto object-cover rounded-full"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4">{studentData.stu_name}</h2>
          <p className="text-gray-600">{studentData.stu_email}</p>
          <p className="text-gray-600">{studentData.stu_phone}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
