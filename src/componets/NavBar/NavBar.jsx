import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
        <ul>
            <li> <Link to="/">Calc</Link></li>
            <li> <Link to="/Slide">Slide</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar