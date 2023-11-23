import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar/Navbar'
import Themeprovider from './Themeprovider'
import CssBaseline from '@mui/material/CssBaseline'
import CustomContext from './context/CustomContext'
import Home from './pages/Home'



export default function Router() {
    return (
        <Themeprovider>
            <CssBaseline />
            <CustomContext>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                       
                    </Routes>
                </BrowserRouter>
            </CustomContext>
        </Themeprovider>
    )
}


