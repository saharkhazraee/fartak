import React from 'react'
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UniversityLogos from './components/UniversityLogos';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import UniversityCards from './components/UniversityCards';
import Media from './components/Media';
import Footer from './components/Footer';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero />
      <About />
      <UniversityLogos />
      <Services />
      <SuccessStories />
      <UniversityCards />
      <Media />
      <Footer />
    </div>
  )
}
