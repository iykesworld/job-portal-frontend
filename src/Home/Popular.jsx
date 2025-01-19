import React from 'react'
import './Home.css'

const popular_data = [
    {
        title: "Mobile Developer",
        subtitle: "20,000 Open Position"
    },
    {
        title: "Graphic Designer",
        subtitle: "18,000 Open Position"
    },
    {
        title: "Sales Engineer",
        subtitle: "10,000 Open Position"
    },
    {
        title: "Front-end Developer",
        subtitle: "11,000 Open Position"
    },
    {
        title: "Full-Stack Developer",
        subtitle: "9,000 Open Position"
    },
    {
        title: "Back-end Developer",
        subtitle: "18,000 Open Position"
    },
    {
        title: "Software Engineer",
        subtitle: "12,000 Open Position"
    },
    {
        title: "Data Analyst",
        subtitle: "22,000 Open Position"
    },
    {
        title: "Project Manager",
        subtitle: "27,000 Open Position"
    },
    {
        title: "Cloud Engineer",
        subtitle: "1,000 Open Position"
    },
    {
        title: "3D Graphic Developer",
        subtitle: "12,000 Open Position"
    },
    {
        title: "Social Media Manager",
        subtitle: "21,000 Open Position"
    },
]

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Most Popular Vacancies</h1>
        <div className="popular-job-container">
            {
                popular_data.map((data,index)=>{
                    return <div key={index} className="popular-wrapper">
                        <h4>{data.title}</h4>
                        <p>{data.subtitle}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Popular