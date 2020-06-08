import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
  const { currentUser } = props;
  return(
    <nav>
       < NavLink to='/'>Home </NavLink> |
       <NavLink to='/auctions'>Auctions </NavLink>|
       <NavLink to='/auctions/new'>New Auctions </NavLink>|
     
      { !currentUser && <NavLink to='/sign_in'>Sign In</NavLink> }
      { currentUser && <span>>>>> {currentUser.first_name} {currentUser.last_name}</span>}
    </nav>
  )
}

export default Navbar