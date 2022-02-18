import React from 'react'

import { Box, Container, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'

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
    justifyContent: 'space-between'
})

const LinkRouter = styled(Link)({
    textDecoration: 'none',
    color: 'black',
})

const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderWrapper>
            <MyContainer>
                <Box sx={{ display: 'flex' }}>
                    <MenuItem sx={{ width: 'max-content' }} onClick={() => navigate(ROUTES.HOME)}>
                        <Img src={'/img/rfg_logo_small.svg'} />
                    </MenuItem>
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
        </HeaderWrapper>
    )
}

export default Header