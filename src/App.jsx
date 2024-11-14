import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'


function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'></div>
      <HeroSection/>
    </div>
  )
}

export default App