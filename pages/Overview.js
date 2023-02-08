import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { cardValues, chartOptions, data } from "../utils/constants"
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
  useEffect(()=>{
    console.log("Overview rendered");
  },[])
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
        //flexDirection:{xs:'column',sm:'column', md:'row'},
        flexWrap:'wrap',
        justifyContent:'space-around',
        m:'auto',
        }}>
          {
            cardValues.map((cards)=>(
              <Card className="metric-card" key={cards.id} variant='outlined' sx={{width:'258px', textAlign:'center',mt:'58px',borderRadius:'8px'}}>
                <CardContent className="metric-card-text">
                    <Typography variant='body1' sx={{color:'#9FA2B4',fontSize:'19px',fontWeight:'700',}}>{cards.title}</Typography>
                    <Typography variant='body1' sx={{color:'#252733',fontSize:'40px',fontWeight:'700',}}>{cards.value}</Typography>
                </CardContent>
              </Card>
            ))
          } 
      </Box>
      <Box 
        className="overview-chart" 
        sx={{
          backgroundColor:'white', 
          width:'90%',
          m:' 40px auto',
          border: '1px solid #DFE0EB', 
          borderRadius: '8px',
        }}>
          <Line options={chartOptions} data={data}/>
      </Box>
    </>
  )
}

export default Overview