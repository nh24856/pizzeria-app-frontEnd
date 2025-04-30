import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Hero from '../components/heroComponents/hero'
import HomeFlowMotion from '../components/slideMotions/homeFlowMotion'
import HomeFeature from '../components/featureComponent/homeFeature'

const HomePage = () => {
  return (
    <>
    <Navbar/>
        <Hero/>
        <HomeFeature />
        <div className="flex justify-center items-center h-screen bg-white">
      <HomeFlowMotion />
    </div>
    <Footer/>
    </>
  )
}

export default HomePage
