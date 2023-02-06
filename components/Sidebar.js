import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Box 
        className="sidebar-container"
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            position:'fixed',
            top:0,
            bottom:0,
            color:'#DDE2FF',
            bgcolor:'#363740',
            width:'255px',
        }}>
            <Box 
              className="logo-container" 
              sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                textAlign:'center',
                mt:'37px',
              }}>
              <div style={{
                width:'20px',
                height:'20px',
                backgroundColor:'blue',
                borderRadius:'30px',
                marginRight:'10px',
              }}></div>
              <Typography sx={{
                color:'#A4A6B3',
                fontWeight:'700',
              }}>B2Metric</Typography>
            </Box>
            <Link to="/">Deneme</Link>
    </Box>
  )
}

export default Sidebar