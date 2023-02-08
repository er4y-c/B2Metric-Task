import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import UserList from './features/users/userList';

const Users = () => {
  const [category, setCategory] = useState("Users")
  return (
    <>
        <Sidebar category={category} setCategory={setCategory}/>
        <UserList/>
    </>
  )
}

export default Users