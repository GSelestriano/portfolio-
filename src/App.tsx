import { Header } from './components/Header/Header'
import { About } from './sections/About/About'
import { Contact } from './sections/Contact/Contact'
import { Experience } from './sections/Experience/Experience'
import { Footer } from './sections/Footer/Footer'
import { Hero } from './sections/Hero/Hero'
import { Projects } from './sections/Projects/Projects'
import { Technologies } from './sections/Technologies/Technologies'
import './App.css'

function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <div className="split">
          <div className="split__inner split__inner--even container">
            <About />
            <Technologies />
          </div>
        </div>
        <div className="split">
          <div className="split__inner split__inner--aside container">
            <Projects />
            <div className="split__aside">
              <Experience />
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
