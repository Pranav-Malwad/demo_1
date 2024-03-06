import Nav from "./Componants/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import StudentRegisterForm from "./Componants/StudentRegisterForm.jsx";
import Navbar1 from "./Componants/Navbar1.jsx";
import Footer from "./Componants/Footer.jsx";
import StudentLoginForm from "./Componants/StudentLoginForm.jsx";
import InstructorLoginForm from "./Componants/InstructorLoginForm.jsx";
import InstructorRegisterForm from "./Componants/InstructorRegisterForm.jsx";
import StudentProfile from "./Componants/StudentProfile.jsx";
import InstructorProfile from "./Componants/InstructorProfile.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
const App = () => {
  return (
    <>
      <div>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/instructorprofile/:id"
            element={<InstructorProfile />}
          ></Route>
          <Route path="/login" element={<StudentRegisterForm />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/categories" element={<Home />}></Route>

          <Route
            path="/studentprofile/:id"
            element={<StudentProfile />}
          ></Route>
          <Route path="/student-login" element={<StudentLoginForm />}></Route>

          <Route
            path="/instructor-login"
            element={<InstructorLoginForm />}
          ></Route>

          <Route
            path="/student-register"
            element={<StudentRegisterForm />}
          ></Route>
          <Route
            path="/instructor-register"
            element={<InstructorRegisterForm />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
