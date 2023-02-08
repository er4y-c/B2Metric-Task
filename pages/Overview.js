import { Box, Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { cardValues, chartOptions, data, chartCards } from "../utils/constants"
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const Overview = () => {
  const [category, setCategory] = useState("Overview")

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  return (
    <>
      <Sidebar category={category} setCategory={setCategory}/>
      <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around',
        m:'auto',
        }}>
          {
            cardValues.map((cards)=>(
              <Card className="metric-card" key={cards.id} variant='outlined' sx={{minWidth:'258px', textAlign:'center',mt:'58px',borderRadius:'8px'}}>
                <CardContent>
                    <Typography className="metric-card-text" variant='body1' sx={{color:'#9FA2B4',fontSize:'19px',fontWeight:'700',}}>{cards.title}</Typography>
                    <Typography className="metric-card-text" variant='body1' sx={{color:'#252733',fontSize:'40px',fontWeight:'700',}}>{cards.value}</Typography>
                </CardContent>
              </Card>
            ))
          } 
      </Box>
      <Box 
        className="overview-chart" 
        sx={{
          display:'flex',
          backgroundColor:'white', 
          justifyContent:'space-between',
          width:'80%',
          height:'540px',
          m:' 40px auto',
          border: '1px solid #DFE0EB', 
          borderRadius: '8px',
          position:'relative',
          pr:'342px',
        }}>

          <Line options={chartOptions} data={data}/>
          <Box sx={{display:'flex',flexDirection:'column',bgcolor:'white',position:'absolute',right:0}}>
          {
            chartCards.map((cards)=>(
              <Card key={cards.id} variant='outlined' sx={{minWidth:'342px',textAlign:'center',borderTop:'none',height:'108px'}}>
                <CardContent>
                    <Typography variant='body1' sx={{color:'#9FA2B4',fontSize:'16px',fontWeight:'600',}}>{cards.title}</Typography>
                    <Typography variant='body1' sx={{color:'#252733',fontSize:'24px',fontWeight:'700',}}>{cards.value}</Typography>
                </CardContent>
              </Card>
            ))
          } 
          </Box>
      </Box>
    </>
  )
}

export default Overview