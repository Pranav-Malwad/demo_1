import express from "express";
import connectDB from "./src/dbConnection.js";
import stu_Register from "./src/models/stu_register.model.js";
import instru_Register from "./src/models/instru_register.model.js";
import cors from "cors";

const app = express();
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors());

connectDB("mongodb+srv://devarsh:devarsh123@cluster0.fnvqdm6.mongodb.net/olms")
  .then(() => console.log("Database Connected!"))
  .catch(() => console.log("Database Connection Error"));

app.listen(port, () => {
  console.log(`Server is listening to port number ${port}`);
});

app.post("/student-register", (req, res) => {
  console.log("Request Accepted at student-register");
  const { name, email, phone, pass } = req.body;

  console.log("Email is ", email);
  stu_Register
    .findOne({
      stu_email: email,
    })
    .then((user) => {
      if (user) {
        res.json("User Already Exists !");
      } else {
        console.log("Name is", name);
        console.log("Email is", email);
        console.log("Password is", pass);
        stu_Register
          .create({
            stu_email: email,
            stu_name: name,
            stu_password: pass,
            stu_phone: phone,
          })
          .then((result) => res.json("Account Created"))
          .catch((err) => res.json("Account Creation Failed"));
      }
    });
});

app.post("/getinstructorprofile", (req, res) => {
  const id = req.body.id;
  console.log("Request Accepted");
  console.log(id);

  instru_Register
    .findById({
      _id: id,
    })
    .then((user) => {
      if (user) {
        console.log("User data found");
        console.log(user);
        res.json(user);
        // res.render('show', {user: docs[0]});
      } else {
        res.json("User Not Found");
      }
    })
    .catch((err) => {
      console.log(" Catch Failed!");
      res.json(err);
    });
});
app.post("/getprofile", (req, res) => {
  const id = req.body.id;
  console.log("Request Accepted");
  console.log(id);

  stu_Register
    .findById({
      _id: id,
    })
    .then((user) => {
      if (user) {
        console.log("User data found");
        console.log(user);
        res.json(user);
        // res.render('show', {user: docs[0]});
      } else {
        res.json("User Not Found");
      }
    })
    .catch((err) => {
      console.log(" Catch Failed!");
      res.json(err);
    });
});
app.post("/student-login", (req, res) => {
  const { username, password } = req.body;
  if (username == "" || password == "") {
    throw console.error("fill the details");
  }
  stu_Register
    .findOne({
      stu_email: username,
    })
    .then((user) => {
      if (user) {
        if (user.stu_password === password) {
          console.log(user);
          res.status = 203;
          res.json(user._id);
          // res.json("Login Succussfully")
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("User Not Found in database!");
      }
    });
});

app.post("/instructor-login", (req, res) => {
  const { username, password } = req.body;
  if (username == "" || password == "") {
    throw console.error("fill the details");
  }
  instru_Register
    .findOne({
      instru_email: username,
    })
    .then((user) => {
      if (user) {
        if (user.instru_password === password) {
          console.log(user);
          res.status = 200;
          res.json(user._id);
          // res.json("Login Succussfully")
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("User Not Found in database!");
      }
    });
});

// app.post("/student-login",(req, res)=>{
// const {username, password}= req.body;
// stu_Register.findOne(
//     {
//         stu_email :username
//     })
// .then(user =>{
// if (user)
//  {
//     if(user.stu_password === password)
//     {
//         console.log(user);
//         res.status = 203;
//         res.json(user._id);
//         // res.json("Login Succussfully")
//     }
//     else
//     {
//         res.json("The password is incorrect")
//     }
//  }
// else
// {
//     res.json("User Not Found in database!")
//  }
// })
// })

// app.post("/student-login",(req, res)=>{
//     const {username, password}= req.body;
//     stu_Register.findOne(
//         {
//             stu_email :username
//         })
//     .then(user =>{
//     if (user)
//      {
//         if(user.stu_password === password)
//         {
//             console.log(user);
//             res.status = 203;
//             res.json(user._id);
//             // res.json("Login Succussfully")
//         }
//         else
//         {
//             res.json("The password is incorrect")
//         }
//      }
//     else
//     {
//         res.json("User Not Found in database!")
//      }
//     })
//     })

app.post("/instructor-register", (req, res) => {
  console.log("Request Accepted at instructor-register");
  const { name, email, password, aboutMe, specialization, qualification } =
    req.body;

  instru_Register
    .findOne({
      instru_email: email,
    })
    .then((user) => {
      if (user) {
        res.json("User Already Exists !");
      } else {
        // console.log("Name is",name);
        // console.log("Email is",email);
        // console.log("Password is",password);
        instru_Register
          .create({
            instru_email: email,
            instru_name: name,
            instru_password: password,
            instru_specialization: specialization,
            instru_about: aboutMe,
            instru_qualification: qualification,
          })
          .then((result) => res.json("Instructor Created"))
          .catch((err) => res.json("Account Creation Failed"));
      }
    });
});
