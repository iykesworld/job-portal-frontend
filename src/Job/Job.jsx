import React, { useEffect } from 'react'
import './Job.css'
import JobsCard from './JobsCard'
import Pageheader from '../Component/Pageheader/Pageheader'

const Job = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className='job' >
        <Pageheader
        title="Find Your Next Career Opportunity."
        />
        <div className="jobcars-wrapper">
        <JobsCard/>
        </div>
        
    </div>
  )
}

export default Job