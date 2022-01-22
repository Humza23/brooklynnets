import React from 'react';
import { Link } from 'react-router-dom'
// import Roster from './Roster';

const Navbar = () => {
  return(
    <div>

  <div id='navbar'>
    <li>
      <Link to="/brooklynnets">Home</Link>
    </li>
    <li>
      <Link to="/brooklynnets/roster">Roster</Link>
    </li>
    <li>
      <Link to="/brooklynnets/playerstats">Player Stats</Link>
    </li>

  </div>
    </div>
  );
};

export default Navbar;

