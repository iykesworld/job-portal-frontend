import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';

const heroCounts = [
    {
        titile: 200,
        subtitle: "Jobs Added",
    },
    {
        titile: 350,
        subtitle: "Active Resume",
    },
    {
        titile: 265,
        subtitle: "Position Matched",
    },

]

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-texts">
        <h1> <span className='hero-span-unlock'>Unlock</span> Opportunities <br />
        Explore New <span className='hero-span-poss'>Possibilities</span></h1>
        <p>Discover thousands of job listings from top companies. </p>
        <p>Our platform matches you with roles that fit your skills and ambitions. Take the next step in your career today!</p>
        </div>
        <Link to="/job" className='hero-search'>
        <p>Find Jobs</p>
        <i className="ri-search-line"></i>
        </Link>
        <div className="hero-count-wrapper">
            {
                heroCounts.map((data,index)=>{
                    return <div key={index} className="counts-container">
                            <h3><span><CountUp end={data.titile} />K</span><span>+</span></h3>
                            <p>{data.subtitle}</p>
                    </div>
                })
            }
        </div>

    </div>
  )
}

export default Hero