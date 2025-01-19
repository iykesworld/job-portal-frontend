import React from 'react'
import './MessageModal.css'

const MessageModal = ({closeModal}) => {
  return (
    <div className='messagemodal-bg'>
        <div className="messagemodal-content">
        <i className="ri-close-circle-line"></i>
        <p>Oops...</p>
        <div className="message">
            <p>Applicant's Resume is required</p>
            <span>Please check your Dashboard</span>
        </div>
        <button onClick={closeModal} className='ok-btns'>OK</button>
        </div>
    </div>
  )
}

export default MessageModal