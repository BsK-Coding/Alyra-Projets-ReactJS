import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to='/' className='nav-home' activeClassName="nav-active">
          <li>
            Home
          </li>
        </NavLink>
        <NavLink to='/project' className='nav-project' activeClassName='nav-active'>
          <li>
            Project
          </li>
        </NavLink>
        <NavLink to='/contact' className='nav-contact' activeClassName='nav-active'>
          <li>
            Contact
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
