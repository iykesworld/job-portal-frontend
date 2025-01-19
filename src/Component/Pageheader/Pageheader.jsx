import React from 'react'
import './Pageheader.css'

const Pageheader = ({title, details}) => {
  return (
    <div className="job-banner">
    <h2>{title}</h2>
    </div>
  )
}

export default Pageheader