import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Overview from './Overview'

const Home = () => {
  return (
    <>
      <Overview />
    </>
  )
}

export default Home