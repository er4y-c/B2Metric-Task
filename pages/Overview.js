import { Box } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Overview = () => {
  const [category, setCategory] = useState("Overview")
  return (
    <Box>
        <Sidebar category={category} setCategory={setCategory}/>
        Overview
    </Box>
  )
}

export default Overview