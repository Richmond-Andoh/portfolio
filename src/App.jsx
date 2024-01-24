import styles from "./App.module.css"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/HeroSession/Hero"
import About from "./components/AboutSession/About"
import Experience from "./components/ExperienceSession/Experience"
import Projects from "./components/ProjectsSession/Projects"
import Contact from "./components/ContactSession/Contact"


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
