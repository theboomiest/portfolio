'use client' // Mark as a Client Component since it will interact with state

export default function Navbar({ toggleSection }) {
  return (
    <nav className="border-gray-500 border-2 bg-transparent transition-all duration-300 ease-in-out p-12 max-lg:bg-white rounded-lg hover:shadow-lg lg:hover:bg-white max-lg:bg-opacity-70 flex-initial space-y-6 lg:space-y-10 fixed">
        <div className="font-semibold text-4xl lg:text-6xl xl:text-8xl">
            Oh hello;
        </div>

      {/* Row of buttons that use toggleSection to set a Right Column section to active or inactive */}
        <div className="flex flex-col max-xl:space-y-4 xl:flex-row xl:justify-between text-2xl text-slate-900">
          <button onClick={() => toggleSection('home')} className= "hover:text-primary transition">Home</button>
          <button onClick={() => toggleSection('about')} className= "hover:text-primary transition">About</button>
          <button onClick={() => toggleSection('projects')} className= "hover:text-primary transition">Projects</button>
          <button onClick={() => toggleSection('contact')} className= "hover:text-primary transition">Contact</button>
        </div>
    </nav>
  )
}
