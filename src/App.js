import React from 'react'
import { useEffect, useState } from 'react'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import JsonData from "./data/data.json";

const App = () => {

  const [landingData, setLandingData] = useState({});
  useEffect(() => {
    setLandingData(JsonData);
  }, []);

  return (
    <>
      <Navigation/>
      <Header data={landingData.Header} />
      <Features data={landingData.Features}/>
      <About data={landingData.About}/>
      <Services data={landingData.Services}/>
      <Gallery data={landingData.Gallery}/>
      <Testimonials data={landingData.Testimonials}/>
      <Team data={landingData.Team}/>
      <Contact data={landingData.Contact}/>
    </>
  )
}

export default App