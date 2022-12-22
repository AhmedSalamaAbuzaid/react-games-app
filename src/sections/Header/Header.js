import React from 'react'
import './Header.css';
import logo from '../../assets/images/logo.png'
import {Navitem, NavitemDropDown ,SacandaryButton} from '../../components/index';


const Header = (props) => {
  return (
      <nav className="navbar navbar-expand-md  navbar-dark cyborg-nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logo} alt=""/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Navitem>
                <a className="nav-link active" aria-current="page" href="#/">Home</a>
              </Navitem>
              <Navitem>
                <a className="nav-link" href="/#">Browse</a>
              </Navitem>
              <NavitemDropDown>
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Details
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/#">forntnine</a></li>
                  <li><a className="dropdown-item" href="/#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/#">Something else here</a></li>
                </ul>
              </NavitemDropDown>
              <Navitem>
                <a className="nav-link " href="/#" tabIndex="-1" aria-disabled="true">Stream</a>
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