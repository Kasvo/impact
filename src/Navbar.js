import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
      <div>
        <NavLink exact activeClassName="activeclass" to="/">
          Reject
        </NavLink>
        <NavLink exact activeClassName="activeclass" to="/">
          Sortlisted
        </NavLink>
      </div>
    );
}

export default Navbar
