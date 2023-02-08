import React, { useEffect } from 'react'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Typography, Paper } from '@mui/material'
import UserImg from "../../../icons/546.jpg"
import { updateUserList } from './usersSlice';

const UserList = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>dispatch(updateUserList(users)))
    
  },[])
  const userData = useSelector(state=>state.users);
  return (
    <Paper sx={{
        bgcolor:'white',
        width:'90%',
        m:'30px auto',
        border: '1px solid #DFE0EB',
        borderRadius:'8px',
      }}>
      <Typography
          sx={{color: '#252733',fontWeight: '700',fontSize: '19px'}}
          variant="h6"
        >
          All Users
        </Typography>
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell className='table-titles'>User Details</TableCell>
              <TableCell className='table-titles'>company</TableCell>
              <TableCell className='table-titles'>Email</TableCell>
              <TableCell className='table-titles'>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              userData.map((user)=>(
                <TableRow key={user.id} className="table-row">
                  <TableCell style={{display:'flex',alignItems:'center'}}>
                    <Image src={UserImg} width={44} style={{borderRadius:'20px',ml:'21px'}}/>  
                    <Typography>{user.name}</Typography>
                  </TableCell>
                  <TableCell><Typography>{user.company.name}</Typography></TableCell>
                  <TableCell><Typography>{user.email}</Typography></TableCell>
                  <TableCell><Typography>{user.phone}</Typography></TableCell>
                </TableRow>
              )) 
            }
            <TableCell></TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default UserList