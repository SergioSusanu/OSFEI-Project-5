import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import star from '../assets/images/star.svg'

const Navbar:FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
