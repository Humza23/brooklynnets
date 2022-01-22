import React from 'react';
import DataTable from 'react-data-table-component';

const PlayerStats = (props) => {

  const {teamStats} = props

    const totals = teamStats.map((stat) => {
      return (
      
          { name: `${stat.fn} ${stat.ln}`,
            pts: stat.avg.pts,
            reb: stat.avg.reb,
            ast: stat.avg.ast,
            stl: stat.avg.stl,
            blk: stat.avg.blk,
            to: stat.avg.tov,
            
          }
        
      )
    })


  const columns = [
    {
        name: 'Player Name',
        selector: row => row.name,
    },
    {
        name: 'PPG',
        selector: row => row.ppg,
    },
    {
        name: 'RPG',
        selector: row => row.rpg,
    },
    {
        name: 'APG',
        selector: row => row.apg,
    },
    {
        name: 'STL',
        selector: row => row.stl,
    },
    {
        name: 'BLK',
        selector: row => row.blk,
    },
    {
        name: 'TO',
        selector: row => row.to,
    },
];


const data = [
  {
    name: totals[0].name,
    ppg: totals[0].pts,
    rpg: totals[0].reb,
    apg: totals[0].ast,
    stl: totals[0].stl,
    blk: totals[0].blk,
    to: totals[0].to,
},
{
    name: totals[2].name,
    ppg: totals[2].pts,
    rpg: totals[2].reb,
    apg: totals[2].ast,
    stl: totals[2].stl,
    blk: totals[2].blk,
    to: totals[2].to,
},
{
    name: totals[3].name,
    ppg: totals[3].pts,
    rpg: totals[3].reb,
    apg: totals[3].ast,
    stl: totals[3].stl,
    blk: totals[3].blk,
    to: totals[3].to,
},
{
    name: totals[4].name,
    ppg: totals[4].pts,
    rpg: totals[4].reb,
    apg: totals[4].ast,
    stl: totals[4].stl,
    blk: totals[4].blk,
    to: totals[4].to,
},
{
    name: totals[5].name,
    ppg: totals[5].pts,
    rpg: totals[5].reb,
    apg: totals[5].ast,
    stl: totals[5].stl,
    blk: totals[5].blk,
    to: totals[5].to,
},
{
    name: totals[6].name,
    ppg: totals[6].pts,
    rpg: totals[6].reb,
    apg: totals[6].ast,
    stl: totals[6].stl,
    blk: totals[6].blk,
    to: totals[6].to,
},
{
    name: totals[7].name,
    ppg: totals[7].pts,
    rpg: totals[7].reb,
    apg: totals[7].ast,
    stl: totals[7].stl,
    blk: totals[7].blk,
    to: totals[7].to,
},
{
    name: totals[8].name,
    ppg: totals[8].pts,
    rpg: totals[8].reb,
    apg: totals[8].ast,
    stl: totals[8].stl,
    blk: totals[8].blk,
    to: totals[8].to,
},
{
    name: totals[9].name,
    ppg: totals[9].pts,
    rpg: totals[9].reb,
    apg: totals[9].ast,
    stl: totals[9].stl,
    blk: totals[9].blk,
    to: totals[9].to,
},
{
    name: totals[10].name,
    ppg: totals[10].pts,
    rpg: totals[10].reb,
    apg: totals[10].ast,
    stl: totals[10].stl,
    blk: totals[10].blk,
    to: totals[10].to,
},
{
    name: totals[11].name,
    ppg: totals[11].pts,
    rpg: totals[11].reb,
    apg: totals[11].ast,
    stl: totals[11].stl,
    blk: totals[11].blk,
    to: totals[11].to,
},
{
    name: totals[12].name,
    ppg: totals[12].pts,
    rpg: totals[12].reb,
    apg: totals[12].ast,
    stl: totals[12].stl,
    blk: totals[12].blk,
    to: totals[12].to,
},
{
    name: totals[13].name,
    ppg: totals[13].pts,
    rpg: totals[13].reb,
    apg: totals[13].ast,
    stl: totals[13].stl,
    blk: totals[13].blk,
    to: totals[13].to,
},
{
    name: totals[14].name,
    ppg: totals[14].pts,
    rpg: totals[14].reb,
    apg: totals[14].ast,
    stl: totals[14].stl,
    blk: totals[14].blk,
    to: totals[14].to,
},
{
    name: totals[15].name,
    ppg: totals[15].pts,
    rpg: totals[15].reb,
    apg: totals[15].ast,
    stl: totals[15].stl,
    blk: totals[15].blk,
    to: totals[15].to,
},
{
    name: totals[16].name,
    ppg: totals[16].pts,
    rpg: totals[16].reb,
    apg: totals[16].ast,
    stl: totals[16].stl,
    blk: totals[16].blk,
    to: totals[16].to,
},

]

  return(
      <div>

        <DataTable
            columns={columns}
            data={data}
        />

      </div>
      ); 
};

export default PlayerStats;
