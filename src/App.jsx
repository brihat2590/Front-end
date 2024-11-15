import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'


function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'></div>
      <HeroSection/>
      <FeatureSection/>
    </div>
  )
}

export default App