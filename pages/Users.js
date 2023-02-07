import { Box } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

const Users = () => {
  const [category, setCategory] = useState("Users")
  return (
    <Box>
        <Sidebar category={category} setCategory={setCategory}/>
        Users
    </Box>
  )
}

export default Users