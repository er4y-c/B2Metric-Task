import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import PieChartIcon from '@mui/icons-material/PieChart'
import PersonIcon from '@mui/icons-material/Person'
import Navbar from './Navbar'

const Sidebar = ({ category, setCategory }) => {
  
  return (
    <>
    <Box 
        className="sidebar-container"
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            position:'fixed',
            top:0,
            bottom:0,
            left:0,
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
                color:'rgba(164, 166, 179, 0.7)',
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
              <Box className={category==="Overview"?"sidebar-btn active":"sidebar-btn"}>
                <PieChartIcon className='sidebar-icon'/>
                <Link href="/" className='sidebar-link' onClick={()=>setCategory("Overview")}>Overview</Link>
              </Box>
              <Box className={category==="Users"?"sidebar-btn active":"sidebar-btn"}>
                <PersonIcon className='sidebar-icon'/>
                <Link href="/Users" className='sidebar-link' onClick={()=>setCategory("Users")}>Users</Link>
              </Box>
            </Box>
    </Box>
    <Navbar category={category}/>
    </>
  )
}

export default Sidebar