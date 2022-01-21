import React from 'react';
import { Link } from 'react-router-dom'
// import Roster from './Roster';

const Navbar = () => {
  return(
    <div>

  <div id='navbar'>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/roster">Roster</Link>
    </li>
    <li>
      <Link to="/playerstats">Player Stats</Link>
    </li>
    <li>
      <Link to="/playerpages">Player Pages</Link>
    </li>
    <li>
      <Link to="/schedule">Schedule</Link>
    </li>

  </div>
    </div>
  );
};

export default Navbar;

