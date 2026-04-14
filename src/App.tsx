
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Academics from './pages/Academics'
import StudentLife from './pages/StudentLife'
import Admissions from './pages/Admissions'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import ContactUs from './pages/ContactUs'
import HeaderNav from './components/HeaderNav/HeaderNav'
function App() {
  const navItems = [
    { href: "/", content: "Home" },
    { href: "/AboutAs", content: "About Us" },
    { href: "/Academics", content: "Academics" },
    { href: "/Admissions", content: "Admissions" },
    { href: "/StudentLife", content: "Student Life" },
    { href: "/ContactUs", content: "Contact Us" },
  ];


  return (
    <>
    <HeaderNav/>
    <NavBar
      logo='/assets/img/Logo.png'
      items={navItems}
      btn='Contac tUs'
      media_btn='/assets/img/mediabtn.png'
    />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutAs" element={<AboutUs />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/StudentLife" element={<StudentLife />} />
          <Route path="/Admissions" element={<Admissions />} />
          <Route path="/CountactUS" element={<ContactUs />} />
        </Routes>
    <Footer/>
    </>
  )
}

export default App
