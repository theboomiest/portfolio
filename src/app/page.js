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
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Left column: Navbar */}
      <div className="w-full lg:sticky lg:top-1/2 lg:w-2/5 flex lg:items-center justify-center lg:justify-end">
        <Navbar onSectionChange={handleSectionChange} />
      </div>

      {/* Right column: Content */}
      <div className="md:w-2/5 flex-col items-center justify-center p-4 lg:py-20">
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
      </div>
    </main>
  )
}
