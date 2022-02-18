import React, { useState, useEffect } from 'react'

import { Box, Container, MenuItem, Drawer, IconButton } from '@mui/material'
import { styled } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

import { ROUTES } from '../../types'

const HeaderWrapper = styled(Box)(() => ({
    backgroundColor: 'rgba(245,245,245,255)',
    minHeight: 45,
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0px 5px 0px'
}))

const Img = styled('img')({
    height: 25
})

const MyContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
})

const LinkRouter = styled(Link)({
    textDecoration: 'none',
    color: 'black',
    marginLeft: 5
})

const Header = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const { mobileView, drawerOpen } = state;
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 550
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const Logo = () => {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Img src={'/img/rfg_logo_small.svg'} />
            </Box>
        )
    }
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <MyContainer>
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: '#1B1642' }}
                >
                    <MenuIcon />
                </IconButton>
                <Logo />
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <Box style={{
                        width: 200, padding: 15, display: 'flex', flexDirection: 'column',
                        height: '100%'
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <LinkRouter to={ROUTES.USERS}>
                                <MenuItem>
                                    Пользователи
                                </MenuItem>
                            </LinkRouter>
                            <LinkRouter to={ROUTES.TOURNAMENTS}>
                                <MenuItem>
                                    Турниры
                                </MenuItem>
                            </LinkRouter>
                            <MenuItem>
                                <LinkRouter to="/sd">На сайт</LinkRouter>
                            </MenuItem>
                        </Box>
                    </Box>
                </Drawer>
            </MyContainer>
        )
    }
    const Desktop = () => {
        return (
            <MyContainer>
                <Box sx={{ display: 'flex' }}>
                    <Logo />
                    <LinkRouter to={ROUTES.USERS}>
                        <MenuItem>
                            Пользователи
                        </MenuItem>
                    </LinkRouter>
                    <LinkRouter to={ROUTES.TOURNAMENTS}>
                        <MenuItem>
                            Турниры
                        </MenuItem>
                    </LinkRouter>
                </Box>
                <Box>
                    <MenuItem>
                        <LinkRouter to="/sd">На сайт</LinkRouter>
                    </MenuItem>
                </Box>
            </MyContainer>
        )
    }
    return (
        <HeaderWrapper>
            {mobileView ? Mobile() : Desktop()}
        </HeaderWrapper>
    )
}

export default Header