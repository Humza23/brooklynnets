import React from 'react';

const Roster = (props) => {
    const {rosterData} = props

  return(
    <div className='rosterGrid'>
        {rosterData.map((player, idx) => (
            <div className='card bg-dark border-secondary mb 3' key={idx} >
            <img className="rosterImg" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} alt={player.fn} style={{width:'12rem', height: '7rem'}}/>
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