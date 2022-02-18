import React, { useState } from 'react'

import { FormControl, Select, InputLabel, MenuItem, Box } from '@mui/material'
import { styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'

import { TourneyTable, SearchInput, MyButton, MyText } from '../../components'

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

const Tourney = () => {
    const [select, setSelect] = useState('')
    const navigate = useNavigate()
    const arr = [
        {
            label: 'EGS2016',
            value: 1
        },
        {
            label: 'hidden',
            value: 2
        },
    ]

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
            <FormControl sx={{ width: 100, mb: 3, mt: 1 }}>
                <InputLabel id="demo-simple-select-label">Все</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    onChange={(e) => {
                        setSelect(e.target.value)
                    }}
                    size="small"
                    variant="standard"
                    style={{ color: 'black' }}
                >
                    {arr.map(({ label, value }) => (
                        <MenuItem key={label} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TourneyTable />
        </div>
    )
}

export default Tourney