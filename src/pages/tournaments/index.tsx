import React, { useState } from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'

import { TournamentsTable, SearchInput, MyButton, MyText, MySelect } from '../../components'

const InputBox = styled(Box)(({ theme }) => ({
    width: 700,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: 30
    },
}))

const SearchBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
}))

const Tournaments = () => {
    const navigate = useNavigate()
    const arr = ['asd', 'asdd']

    return (
        <div>
            <MyText variant="h4">Список турниров</MyText>
            <SearchBox>
                <InputBox>
                    <SearchInput placeholder="Поиск" />
                </InputBox>
                <MyButton onClick={() => navigate('/create-tournaments')}>
                    Создать
                </MyButton>
            </SearchBox>
            <MySelect title="Все" defaultValue="asd" options={arr} sx={{ width: 100, mt: 2, mb: 2 }} />
            <TournamentsTable />
        </div>
    )
}

export default Tournaments