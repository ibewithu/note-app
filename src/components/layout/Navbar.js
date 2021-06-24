import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
        return (
                <nav className='green nav-container'>
                        <div className="nav-wrapper custom-nav">
                                <Link to="/" className="brand-logo nav-button">My-notebook</Link>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                        <li><NavLink to="/favorites" className='fav-button'>favorites</NavLink></li>
                                </ul>
                        </div>
                </nav>
        )
}

export default Navbar
