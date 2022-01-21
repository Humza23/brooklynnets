import React, {useState, useEffect} from 'react';

const Roster = (props) => {
    const {rosterData} = props

  return(
    <div className='rosterGrid'>
        {rosterData.map((player, idx) => (
            <div className='card border-dark mb 3' key={idx} >
            <img className="rosterImg" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} alt={player.fn} style={{width:'18rem', height: '10rem'}}/>
               <p className='rosterGridName'>
                {player.fn} {player.ln}
                </p>   
                <p className='rosterGridNum'>
                #{player.num}
                </p>
            </div>
        ))
        }
        
    </div>
  );
};

export default Roster;