import React from 'react';
import { Link } from 'react-router-dom'

const Roster = (props) => {
    const {rosterData} = props

  console.log('rs', rosterData);
  return(
    <div className='rosterGrid'>
        {rosterData.map((player) => (
            <div className='card bg-dark border-secondary mb 3' key={player.pid} >
                <Link to={`/roster/${player.pid}`}>

            <img className="rosterImg" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} alt={player.fn} style={{width:'12rem', height: '7rem'}}/>
               <p className='rosterGridName'>
                {player.fn} {player.ln}
                </p>   
                <p className='rosterGridNum'>
                #{player.num}
                </p>

                </Link>

            </div>
        ))
        }
        
    </div>
  );
};

export default Roster;