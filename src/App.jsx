import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Technologies from './pages/Technologies'
import Packages from './pages/Packages'
import About from './pages/About'
import Contact from './pages/Contact'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App