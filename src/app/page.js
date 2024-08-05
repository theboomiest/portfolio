import Image from "next/image";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <nav className="mt-48 h-24 flex items-center justify-center p-5">
        <div className="bg-transparent border border-gray-600 rounded-lg p-8 w-full hover:bg-white/70 hover:shadow-lg transition-all duration-300 space-y-10">
          <h1 className="mb-8 text-8xl font-mono">Oh hello;</h1>
          <ul className="flex flex-row justify-between">
            <li><a href="/" className="block text-gray-800 text-lg font-semibold hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="block text-gray-800 text-lg font-semibold hover:text-blue-500">About</a></li>
            <li><a href="/projects" className="block text-gray-800 text-lg font-semibold hover:text-blue-500">Projects</a></li>
            <li><a href="/contact" className="block text-gray-800 text-lg font-semibold hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>
      
    </main>
  );
}
