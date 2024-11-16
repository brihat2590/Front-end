import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import WorkFlow from './Components/WorkFlow'


function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'></div>
      <HeroSection/>
      <FeatureSection/>
      <WorkFlow/>
    </div>
  )
}

export default App