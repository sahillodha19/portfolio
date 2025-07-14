import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience.jsx";
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import Education from './pages/Education.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-background text-textLight min-h-screen">
      <Navbar />
      <main className="pt-16 pb-1">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        {/* Other sections will go here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
