import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Playful from './components/Playful'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Question from './components/Question'
import Footer from './components/Footer'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-800'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Playful />
      <Projects />
      <Cards />
      <Question />
      <Footer />
    </div>
  )
}

export default App