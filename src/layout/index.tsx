import React from 'react'

import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header, Notification } from '../components'

const Layout = () => {
    return (
        <Box>
            <Header />
            <Notification />
            <Container sx={{ mt: 3 }}>
                <Outlet />
            </Container>
        </Box>
    )
}

export default Layout