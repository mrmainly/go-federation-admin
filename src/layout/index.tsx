import React from 'react'

import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header } from '../components'

const Layout = () => {
    return (
        <Box>
            <Header />
            <Container sx={{ mt: 3 }}>
                <Outlet />
            </Container>
        </Box>
    )
}

export default Layout