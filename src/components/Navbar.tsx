import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import StylingWrapper from '../assets/css/NavBar'


const Navbar:FC = () => {
  return (
    <StylingWrapper>
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
    </StylingWrapper>
  )
}

export default Navbar
