import { Box, Typography } from '@mui/material'
import React from 'react'
import UserImg from "../icons/546.jpg"

const Navbar = ({category}) => {
  return (
    <Box 
        className="navbar-container"
        sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            pt:'36px',
            position:'fixed',
            top:0,
            right:0,
            left:'255px',
        }}>
        <Typography variant='body1' sx={{fontSize:'24px',fontWeight:'700',color:'#252733',ml:'30px'}}>{category}</Typography>
        <Box className="navbar-right" sx={{display:'flex'}}>
            <Typography variant='body1' sx={{fontSize:'14px',fontWeight:'500'}}>Eray Aynacı</Typography>
            <img src={UserImg} width='20px'/>
        </Box>
    </Box>
  )
}

export default Navbar