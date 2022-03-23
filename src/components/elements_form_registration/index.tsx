import React from 'react'
import { Box, MenuItem, Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
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

const Elements_form_registration: React.FC<userNameProps> = ({ id, handleText, handleDelete, title, type, description, handleText2, required, handleCheckbox }) => {
    return (
        <Box>
            {type == 'user' ?
                <Root>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <MyText>Игрок</MyText>
                        <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
                    </Box>
                    <MyInput label="Название" variant="outlined" value={title} onChange={handleText(id)} />
                </Root>
                : type == 'textfield' ?
                    <Root>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <MyText>Текстовое поле</MyText>
                            <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
                        </Box>
                        <MyInput label="Название" variant="outlined" value={title} onChange={handleText(id)} />
                        <MyInput label="Описание" variant="outlined" value={description} onChange={handleText2(id)} />
                    </Root>
                    : type == 'datePicker' ?
                        <Root>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <MyText>Дата</MyText>
                                <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
                            </Box>
                            <MyInput type="date" label="Дата" variant="outlined" value={title} onChange={handleText(id)} id={"outlined-basic"} InputLabelProps={{ shrink: true }} />
                            <MyInput label="Название" variant="outlined" value={description} onChange={handleText2(id)} />
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={required} onChange={handleCheckbox(id)} />} label="Обязательное поле" />
                            </FormGroup>
                        </Root>
                        : type == 'checkbox' ?
                            <Root >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <MyText>Чекбокс</MyText>
                                    <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
                                </Box>
                                <MyInput label="Название" variant="outlined" value={description} onChange={handleText2(id)} />
                            </Root>
                            : type == 'list' ?
                                <Root >
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <MyText>Список</MyText>
                                        <Button sx={{ bgcolor: 'red', color: 'white' }} variant="contained" size="small" onClick={() => handleDelete(id)}>Удалить</Button>
                                    </Box>
                                    <MyInput label="Название" variant="outlined" value={title} onChange={handleText(id)} />
                                    <MyInput label="Варианты" variant="outlined" value={description} onChange={handleText2(id)} />
                                </Root>
                                : ''}
        </Box >
    )
}

export default Elements_form_registration