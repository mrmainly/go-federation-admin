import React from 'react'
import { Box, MenuItem, Button, TextField } from '@mui/material'
import { styled } from '@mui/system'

import { Input, MyText } from '..'
import { userNameProps } from '../../interface'

const Root = styled(Box)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
}))

const UserName: React.FC<userNameProps> = ({ id, handleText, handleDelete, value }) => {
    console.log(id)
    return (
        <Root>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MyText>Игрок</MyText>
                <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
            </Box>
            <TextField label="Название" variant="outlined" sx={{ bgcolor: 'white' }} value={value} onChange={handleText(id)} />
        </Root>
    )
}

export default UserName