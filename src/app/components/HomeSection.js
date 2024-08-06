import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default function HomeSection() {
    return (
      <section className="flex-col">
        <p className="text-primary mb-4">Hi, my name is</p>
        <h1 className="text-5xl font-bold mb-2">Philip Roddenberry</h1>
        <h2 className="text-4xl font-bold text-gray-400 mb-4">I'm a Web Developer.</h2>
        <p className="max-w-xl text-lg text-gray-300 mb-8">
          I specialize in building exceptional websites, applications, and everything in between.
        </p>
        <div>
            <About />
        </div>
        <div>
            <Contact />
        </div>
        <div>
            <Projects />
        </div>
      </section>
    )
  }
  