import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../context/Themecontext';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header(props) {
  
  const Themedata = useContext(ThemeContext);

    return (
<div className='main-header'>
  <div id="topbar" className={`d-flex align-items-center fixed-top ${Themedata.theme}`}>
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope" /> <a href='mailto:contact@example.com'>cityhospital@example.com</a>
        <i className="bi bi-phone" /> +91 9988776655
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </div>
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <div className="logo">
        <a href="index.html">
          <h1 className="logo me-auto">City</h1><br />
          <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
        </a>
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><NavLink exact className="nav-link scrollto" to={"/H"}>Home</NavLink></li>
          <li><NavLink exact className="nav-link scrollto" to={"/d"}>Departments</NavLink></li>
          <li><NavLink exact className="nav-link scrollto" to={"/Doctor"}>Doctors</NavLink></li>
          <li><NavLink exact className="nav-link scrollto " to={"/About"}>About</NavLink></li>
          <li><NavLink exact className="nav-link scrollto" to={"/contact"}>Contact</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      <NavLink exact to={"/appoiment"} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
        Appointment</NavLink>
        <NavLink className="d-none d-md-inline appointment-btn scrollto" to={"/Login"}>Login/ Signup</NavLink>
        <button className='Theme_btn' onClick={()=>Themedata.Toogle_Theme(Themedata.theme)}>{
        Themedata.theme === 'light' ? <LightModeOutlinedIcon/> : <DarkModeOutlinedIcon/>
        }</button>
    </div>
  </header>
</div>

    );
}

export default Header;