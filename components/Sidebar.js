import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import PieChartIcon from '@mui/icons-material/PieChart'
import PersonIcon from '@mui/icons-material/Person'

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
              <div
                className='logo-icon' 
                style={{
                  width:'32px',
                  height:'32px',
                  backgroundColor:'#3751FF',
                  borderRadius:'30px',
                  marginRight:'10px',
              }}></div>
              <Typography sx={{
                color:'#A4A6B3',
                fontWeight:'700',
                fontSize:'19px',
              }}>B2Metric</Typography>
            </Box>
            <Box 
              className="sidebar-btn-group" 
              sx={{
                display:'flex',
                flexDirection:'column',
                mt:'30px',
                width:'100%',
              }}>
              <Box className="sidebar-btn">
                <PieChartIcon className='sidebar-icon'/>
                <Link href="/" className='sidebar-link'>Overview</Link>
              </Box>
              <Box className="sidebar-btn">
                <PersonIcon className='sidebar-icon'/>
                <Link href="/Users" className='sidebar-link'>Users</Link>
              </Box>
            </Box>
    </Box>
  )
}

export default Sidebar