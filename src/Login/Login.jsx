import React, { useEffect } from 'react'
import './Login.css'
import logo from '../assets/JOBS-LOGO.svg'
import Pageheader from '../Component/Pageheader/Pageheader'
import { Link } from 'react-router-dom'

const Login = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
  return (
    <>
    <Pageheader title="Login to your Account"/>
    <div className='login'>
        <div className="login-top">
            <div className="img-logo">
                <img src={logo} alt="" />
                <h2>Login</h2>
            </div>
        </div>
        <form className='login-form'>
            <label>Email</label>
            <input placeholder='Your Email' />
            <label>Password</label>
            <input placeholder='Password' />
            <div className="checkboxes">
                <div className="check">
                <input type="checkbox" name='remember' />
                <label>Remember me</label>
                </div>
                <div className="radio">
                    <input type="radio" name='forgotten' />
                    <label htmlFor="forgotten">Forgotten Password</label>
                </div>
            </div>
            <button className='login-btns'>Continue</button>
            <p className='below-btns-message'>Don't have an account? <Link className='below-btns-link' to="/register">Create Account</Link></p>
        </form>
    </div>
    </>
  )
}

export default Login