import React from 'react'
import './Header.css';
import logo from '../../assets/images/logo.png'
import {Navitem, NavitemDropDown ,SacandaryButton} from '../../components/index';
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
      <nav className="navbar navbar-expand-md  navbar-dark cyborg-nav">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt=""/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Navitem>
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </Navitem>
              <Navitem>
                <Link to="/Browse" className="nav-link" >Browse</Link>
              </Navitem>
              <NavitemDropDown>
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Details
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/" className="dropdown-item">forntnine</Link></li>
                  <li><Link to="/" className="dropdown-item">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                </ul>
              </NavitemDropDown>
              <Navitem>
                <Link to="/Stream" className="nav-link "  tabIndex="-1" aria-disabled="true">Stream</Link>
              </Navitem>
              <Navitem>
                <Link to="/Profile" className="nav-link "  tabIndex="-1" aria-disabled="true">Profile</Link>
              </Navitem>
            </ul>
            <form className="d-flex">
              <input className="form-control rounded-5 me-2" type="search" placeholder="Search" aria-label="Search"/>
              <SacandaryButton type="submit">Search</SacandaryButton>
            </form>
          </div>
        </div>
      </nav>
  )
}

export default Header