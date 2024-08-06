'use client' // Mark as a Client Component to use state

import { useState } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  return (
    <div className='mt-10 columns-2'>
      <div className=''>
        <Navbar onSectionChange={handleSectionChange} />
      </div>
      <main className="mt-20"> {/* Add margin to account for the fixed navbar */}
        <div className={activeSection === 'home' ? 'fade-in' : 'fade-out'}>
          <HomeSection />
        </div>
        <div className={activeSection === 'about' ? 'fade-in' : 'fade-out'}>
          <About />
        </div>
        <div className={activeSection === 'projects' ? 'fade-in' : 'fade-out'}>
          <Projects />
        </div>
        <div className={activeSection === 'contact' ? 'fade-in' : 'fade-out'}>
          <Contact />
        </div>
      </main>
    </div>
  )
}
