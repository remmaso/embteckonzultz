import { useState, useEffect } from 'react'
import Navigation from './components/navigation'
import { Header } from './components/header'
import Features from './components/features'
import  About  from './components/about'
import { Contact } from './components/contact'
import  GoogleMapApi  from './components/GoogleMapApi'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
      <GoogleMapApi data={landingPageData.GoogleMapApi} />
      </div>
  )
}

export default App
