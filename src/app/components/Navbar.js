'use client' // Mark as a Client Component since it will interact with state

export default function Navbar({ onSectionChange }) {
  return (
    <nav className="border-gray-500 border-2 bg-transparent transition-all duration-300 ease-in-out p-12 rounded-lg hover:shadow-lg hover:bg-white hover:bg-opacity-70 flex-initial space-y-6 md:space-y-10">
        <div className="font-semibold text-4xl lg:text-6xl xl:text-8xl">
            Oh hello;
        </div>
        <div className="flex flex-col max-xl:space-y-4 xl:flex-row xl:justify-between text-2xl text-slate-900">
            <button onClick={() => onSectionChange('home')} className= "hover:text-primary transition">
            Home
            </button>
            <button onClick={() => onSectionChange('about')} className= "hover:text-primary transition">
            About
            </button>
            <button onClick={() => onSectionChange('projects')} className= "hover:text-primary transition">
            Projects
            </button>
            <button onClick={() => onSectionChange('contact')} className= "hover:text-primary transition">
            Contact
            </button>
        </div>
    </nav>
  )
}
