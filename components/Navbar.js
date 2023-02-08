import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import UserImg from "../icons/546.jpg"
import Image from 'next/image'
const Navbar = ({category}) => {
  useEffect(()=>{
    console.log("Navbar rendered");
  },[])
  return (
    <Box 
        className="navbar-container"
        sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
        }}>
        <Typography variant='body1' sx={{fontSize:'24px',fontWeight:'700',color:'#252733',ml:'30px'}}>{category}</Typography>
        <Box className="navbar-right" sx={{display:'flex',alignItems:'center'}}>
            <Typography variant='body1' sx={{fontSize:'14px',fontWeight:'500'}}>Eray Aynacı</Typography>
            <Image src={UserImg} alt="User profile" width={30} style={{borderRadius:'20px',marginLeft:'14px'}}/>
        </Box>
    </Box>
  )
}

export default Navbar