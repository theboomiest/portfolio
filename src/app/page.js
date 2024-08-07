'use client' // Mark as a Client Component to use state

import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  const [visibleSections, setVisibleSections] = useState({
    about: true,
    projects: true,
    contact: true,
  });

  const toggleSection = (section) => {
    if (section === 'home') {
      setVisibleSections({
        about: true,
        projects: true,
        contact: true,
      });
    } else {
      setVisibleSections({
        about: section === 'about',
        projects: section === 'projects',
        contact: section === 'contact',
      });
    }
  };

  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Left column: Navbar */}
      <div className="w-full lg:sticky lg:top-1/2 lg:w-2/5 flex lg:items-center justify-center lg:justify-end">
        <Navbar toggleSection={toggleSection} />
      </div>

      {/* Right column: Content */}
      <div className="md:w-2/5 flex-col items-center justify-center p-4 lg:py-20">
        <div className={`section about ${visibleSections.about ? 'active' : 'inactive'}`}>
          <About />
        </div>
        <div className={`section projects ${visibleSections.projects ? 'active' : 'inactive'}`}>
          <Projects />
        </div>
        <div className={`section contact ${visibleSections.contact ? 'active' : 'inactive'}`}>
          <Contact />
        </div>
      </div>
    </main>
  )
}
