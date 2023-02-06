import React from 'react'
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
const MyApp = ({ Component, pageProps }) => {
    return (
        <Router>
            <Routes>
                <Route index element={<Sidebar/>}/>
            </Routes>
        </Router>
    )
}

export default MyApp