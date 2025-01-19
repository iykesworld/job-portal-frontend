import React from 'react'
import './Footer.css'
import logo from '../../assets/JOBS-LOGO.svg'
import { Link } from 'react-router-dom'

const socials_data = [
    {
        title: "ri-facebook-line",
        subcolor: "#FCE49A",
    },
    {
        title: "ri-instagram-line",
        subcolor: "#E0F4FF",
    },
    {
        title: "ri-twitter-x-line",
        subcolor: "#D4F5EC",
    },
    {
        title: "ri-github-line",
        subcolor: "#FAE1F4",
    },
]

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
        <div className="footer-top">
        <div className="footer-brand-section">
            <div className="brand-image-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <span>Connecting Talent with Opportunities. We prioritize your data security and ensure a user-friendly experience. 
                Our platform is mobile-responsive, allowing you to search for jobs or manage listings on the go.</span>
        </div>
        <div className="footer-quicklinks">
            <h5>Quicklinks</h5>
            <ul className='footer-quicklinks-list'>
                <li><Link className='quicklink-links'>Browse Jobs</Link></li>
                <li><Link className='quicklink-links'>Create Profile</Link></li>
                <li><Link className='quicklink-links'>Post a job</Link></li>
                <li><Link className='quicklink-links'>Employer Dashboard</Link></li>
                <li><Link className='quicklink-links'>Talent Pool Access</Link></li>
            </ul>
        </div>
        <div className="footer-company-section">
            <h5>Company</h5>
            <ul>
                <li><Link className='company-links'>About us</Link></li>
                <li><Link className='company-links'>Meet our leadership</Link></li>
                <li><Link className='company-links'>Press and media</Link></li>
                <li><Link className='company-links'>Contact us</Link></li>
                <li><Link className='company-links'>Privacy policy</Link></li>
            </ul>
        </div>
        <div className="footer-newsletter">
            <span>Subscribe to Stay Updated with the Latest Job Openings.</span>
            <form className='form-container'>
                <input className='form-input' type="text" placeholder='Enter Your Email' />
                <button>Submit</button>
            </form>
        </div>
        </div>
        <hr />
        <div className="footer-socials">
            <p>Copyright @ {year} Iykes Design | all right reserved</p>
            <div className="social-icons">
                {
                    socials_data.map((data,index)=>{
                        return <div key={index} className="social-icon-container" style={{background: data.subcolor}}>
                            <a href="#"><i className={data.title}></i></a>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Footer