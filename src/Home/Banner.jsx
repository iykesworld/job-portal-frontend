import React from 'react'
import './Home.css'

const banner_data =[
    {
        title: "12",
        subtitle: "Offices Worldwide",
    },
    {
        title: "100",
        subtitle: "Full Time Colleagues",
    },
    {
        title: "40",
        subtitle: "Hours Per Week",
    },
    {
        title: "Unlimited",
        subtitle: "Paid Time Off",
    },
]

const Banner = () => {
  return (
    <div className='banner'>
        <h2>How Tech Jobs Portal Works</h2>
        <p className='banner-subtitled'>Our job portal is designed to simplify the job search process for candidates and streamline hiring for employers. Here's a step-by-step breakdown of how it works:</p>
        <div className="banner-jobs-container">
            <h4>For Job Seekers</h4>
            <div className="banner-seekers">
                <p>Create a Profile</p>
                <i className="ri-arrow-right-line"></i>
                <p>Browse Job Listings</p>
                <i className="ri-arrow-right-line"></i>
                <p>Apply Instantly</p>
                <i className="ri-arrow-right-line"></i>
                <p>Track Your Applications</p>
            </div>
        </div>
        <div className="banner-employee-container">
            <h4>For Employers</h4>
            <div className="banner-seekers">
                <p>Create an Employer Account</p>
                <i className="ri-arrow-right-line"></i>
                <p>Post Job Openings</p>
                <i className="ri-arrow-right-line"></i>
                <p>Access Talent Pool</p>
                <i className="ri-arrow-right-line"></i>
                <p>Manage Applications</p>
            </div>
        </div>
        <div className="banner-offices">
            {
                banner_data.map((data, index)=>{
                    return <div key={index} className="banner-offices-content">
                        <h5>{data.title}</h5>
                        <p>{data.subtitle}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Banner