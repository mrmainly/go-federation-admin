import React from 'react'
import { Box, MenuItem, Button, TextField } from '@mui/material'
import { styled } from '@mui/system'

import { Input, MyText } from '..'
import { userNameProps } from '../../interface'

const Root = styled(Box)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column'
}))

const MyInput = styled(TextField)(() => ({
    background: 'white',
    marginTop: 10
}))

const Elements_form_registration: React.FC<userNameProps> = ({ id, handleText, handleDelete, value, type, value2, handleText2 }) => {
    return (
        <Box>
            {type == 'user' ?
                <Root>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <MyText>Игрок</MyText>
                        <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
                    </Box>
                    <MyInput label="Название" variant="outlined" value={value} onChange={handleText(id)} />
                </Root>
                : type == 'textfield' ?
                    <Root>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <MyText>Текстовое поле</MyText>
                            <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
                        </Box>
                        <MyInput label="Название" variant="outlined" value={value} onChange={handleText(id)} />
                        <MyInput label="Название" variant="outlined" value={value2} onChange={handleText2(id)} />
                    </Root>
                    : ''}
        </Box>
    )
}

export default Elements_form_registration