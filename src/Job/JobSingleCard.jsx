import React, { useState } from 'react'
import './Job.css'
import { Link } from 'react-router-dom';
import MessageModal from '../Component/MessageModal/MessageModal';

const JobSingleCard = ({jobColor, jobDate, jobImage, jobCompany, jobTitle, jobRole, jobLevel, jobExperience, jobDetails, jobApply, theLink}) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isShowText, setIsShowText] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModalClick =()=>{
        setOpenModal(true);
    }
    const handleCloseModal =()=>{
        setOpenModal(false);
    }

    const handleSaveClick =()=>{
        if(!isSaved){
            setIsShowText(true)
            setTimeout(() => {
                setIsShowText(false)
            }, 1000);
        }
        setIsSaved(!isSaved);
    }
  return (
    <div className="jobs-container">
        <div className="job-container-top" style={{background: jobColor}}>
            <div className="date-save">
                <div className="date">
                <p>{jobDate}</p>
                </div>
                <div onClick={handleSaveClick} className={`save ${isSaved? "save-clicked" : ""}`}>
                <i className="ri-bookmark-line"></i>
                {isShowText && <span className='saved-text'>SAVED</span>}
                </div>
            </div>
            <div className="company-image">
                <div className="image-container">
                <img src={jobImage} alt="image" />
                </div>
                <span>{jobCompany}</span>
            </div>
            <p>{jobTitle}</p>
            <div className="role-experience">
                <ul className="role-experience-ul">
                    <li>{jobRole}</li>
                    <li>{jobLevel}</li>
                    <li>{jobExperience}</li>
                </ul>
            </div>
        </div>
        <div className="details-apply">
            <Link to={`/job/${theLink}`} className="details"><p>{jobDetails}</p></Link>
            <button onClick={handleOpenModalClick} className="apply"><p>{jobApply}</p></button>
        </div>
        {openModal && <MessageModal closeModal ={handleCloseModal} />}
    </div>
  )
}

export default JobSingleCard