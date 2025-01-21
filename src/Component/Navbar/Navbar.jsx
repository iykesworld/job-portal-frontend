import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/JOBS-LOGO.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [header, setHeader] = useState(false);
    const menuRef = useRef()

    const handleOpenNav = ()=>{
        menuRef.current.style.right="0";
    }
    const handleCloseNav = ()=>{
        menuRef.current.style.right="-500px"
    }
    window.addEventListener("scroll", ()=>{
        if(window.scrollY>200){
            setHeader(true)
        }else{
            setHeader(false)
        }
    })
  return (
    <header className={header? "header" : ""}>
        <nav>
        <Link to="/" className='logo-link'>
        <img src={logo} alt="logo" />
        </Link>
            <ul ref={menuRef} className="nav-list">
                <li onClick={handleCloseNav} className="close-link"><i className="ri-close-line"></i></li>
                <li><Link className={header? "list-link-main list-link-scroll"  : "list-link-main"} to="/">Home</Link></li>
                <li><Link className={header? "list-link-main list-link-scroll"  : "list-link-main"} to="/job">Jobs</Link></li>
                <li><Link className={header? "list-link-main list-link-scroll" : "list-link-main"} to="/register">Register</Link></li>
                <li><Link className='list-link-signin' to="/login">Sign In</Link></li>
            </ul>
            <div onClick={handleOpenNav} className="hamburger-menu">
        <i className="ri-menu-line"></i>
        </div>
        </nav>
    </header>
  )
}

export default Navbar