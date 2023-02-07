import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { userData } from '../utils/constants';
import UserImg from "../icons/546.jpg"

const Users = () => {
  const [category, setCategory] = useState("Users")
  return (
    <>
      <Sidebar category={category} setCategory={setCategory}/>
      <TableContainer sx={{
        bgcolor:'white',
        width:'90%',
        m:'30px auto',
        border: '1px solid #DFE0EB',
        borderRadius:'8px',
      }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Details</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Register Date</TableCell>
              <TableCell>Segment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              userData.map((user)=>(
                <TableRow key={user.name}>
                  <TableCell>
                    <Image src={UserImg} width={30} style={{borderRadius:'20px'}}/>
                    <Typography>{user.detail}</Typography>
                  </TableCell>
                  <TableCell><Typography>{user.name}</Typography></TableCell>
                  <TableCell><Typography>{user.date}</Typography></TableCell>
                  <TableCell><Typography>{user.segment}</Typography></TableCell>
                </TableRow>
              )) 
            }
            <TableCell></TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Users