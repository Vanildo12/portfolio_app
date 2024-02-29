import React from 'react'

import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      
      <main className='main'>
        <Home/>
        <About/>
        <Qualification/>
        <Services/>
        <Skills/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </main>
      
      <Footer/>
    </>

    
  )
}

export default App