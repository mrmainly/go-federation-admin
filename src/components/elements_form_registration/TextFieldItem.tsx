import React from 'react'
import { Box, MenuItem, Button } from '@mui/material'
import { styled } from '@mui/system'

import { Input, Form, MyText } from '..'

const Root = styled(Box)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
}))

const TextFieldItem = () => {
    return (
        <Root>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MyText>Текстовое поле</MyText>
                <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small">Удалить</Button>
            </Box>
            <Input label="Название" variant="outlined" sx={{ bgcolor: 'white' }} />
            <Input label="Описание" variant="outlined" sx={{ bgcolor: 'white' }} />
        </Root>
    )
}

export default TextFieldItem