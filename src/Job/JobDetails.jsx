import React, { useEffect, useState } from 'react'
import './Job.css'
import Pageheader from '../Component/Pageheader/Pageheader'
import jobs_data from '../data/jobs.js'
import { useParams } from 'react-router-dom'
import jobssvg from '../assets/jobsvg.svg'

const JobDetails = () => {
    const [job, setJob]= useState(null);
    const { id } = useParams();
    
    useEffect(()=>{
        const JobItems= jobs_data.find((j)=>j.id===Number(id));
        setJob(JobItems);
        
    },[id]);
    
    
    if (!job) {
        return (
            <div className="job-details">
                <Pageheader title="Job Not Found" />
                <p>The job you are looking for does not exist.</p>
            </div>
        );
    }
  return (
    <div className='jobdetails'>
        <Pageheader
        title ="Find Your Next Career Opportunity."
        />
        <div className="jobdetails-wrapper">
            <div className="jobdetails-top">
            <h2>Job Title: <span className='job-title-class'>{job.title}</span></h2>
            <p>Posted By: {job.company}</p>
            <div className="jobdetails-time">
            <i className="ri-time-line"></i>
            <p>{job.date}</p>
            </div>
            </div>
            <div className="jobdetails-main">
                <h3>Description</h3>
                <p className='description-text'>{job.description}</p>
                <div className="jobdetails-flex">
                    <div className="job-details-flex-top">
                        <p>Deadline: <span>{job.deadline}</span></p>
                        <p>Job Vacancy: <span>{job.vacancy}</span></p>
                        <p>Salary: ${job.Salary}</p>
                        <div className="requirements">
                            <p>requirements:</p>
                            <ul className='requirement-list'>
                                {
                                    job.requirements.map((job_item, index)=>{
                                        return <li key={index}>{job_item}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <p>To apply, send your CV/Resume</p>

                    </div>
                    <div className="details-image">
                        <img src={jobssvg} alt="job avatar" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default JobDetails