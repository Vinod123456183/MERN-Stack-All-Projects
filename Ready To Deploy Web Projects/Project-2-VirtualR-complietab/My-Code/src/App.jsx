import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import TestiMonials from './components/TestiMonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Features/>
        <WorkFlow/>
        <Pricing/>
        <TestiMonials/>
        <Footer/>
    </div>
  )
}

export default App
