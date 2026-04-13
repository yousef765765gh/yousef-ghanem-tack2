
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Academics from './pages/Academics'
import StudentLife from './pages/StudentLife'
import Admissions from './pages/Admissions'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutAs" element={<AboutUs />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/StudentLife" element={<StudentLife />} />
          <Route path="/Admissions" element={<Admissions />} />
        </Routes>
    <Footer/>
    </>
  )
}

export default App
