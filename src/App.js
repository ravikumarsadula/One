import "./App.css"
import Header from "./components/common/header/Header"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import LoginForm from "./components/login/Login"
import RegistrationForm from "./components/register/Register";

function App() {
  return (
    <>
         <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegistrationForm />} />


      </Routes>
      <Footer />
    </Router>       
    </>
  )
}

export default App
