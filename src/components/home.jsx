import React from 'react'
import Nav from './nav'
import './style/home.css'
import ImageSection from './imageSection'
import About from './about'
import Services from './services'

const Home = () => {
  return (
    <div className="home">
        <Nav/>
        <ImageSection/>
        <About/>
        <Services/>
    </div>
  )
}

export default Home