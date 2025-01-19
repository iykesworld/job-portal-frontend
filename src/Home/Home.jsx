import React, { useEffect } from 'react'
import './Home.css'
import Hero from './Hero'
import Popular from './Popular'
import Banner from './Banner'
import About from './About'
import Teams from './Teams'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <>
    <Hero/>
    <Popular/>
    <Banner/>
    <About/>
    <Teams/>
    </>
  )
}

export default Home