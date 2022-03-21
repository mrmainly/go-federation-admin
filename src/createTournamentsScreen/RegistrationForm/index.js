import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { useForm } from 'react-hook-form';

import { MyText, MyButton, Form, Input, UserName, TextFieldItem } from '../../components'

const GridInsideItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },
}))

const GridInsideItem2 = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    [theme.breakpoints.down('md')]: {
        marginTop: 20,
        width: '100%'
    },
}))

const RegistrationForm = () => {
    const [userField, setUserField] = useState([])
    let [idUserField, setIdUserField] = useState(0)
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })
    const handleText = id => e => {
        let user = [...userField]
        userField[id].value = e.target.value
        setUserField(
            user
        )
    }
    const adduserfield = async (e) => {
        setIdUserField(idUserField + 1)
        let newUserField = userField.concat({
            value: '',
            id: idUserField,
        })
        setUserField(newUserField)
    }
    const handleDelete = i => {
        setIdUserField(idUserField - 1)
        let removableInput = [
            ...userField.slice(0, i),
            ...userField.slice(i + 1)
        ]
        setUserField(removableInput)
    }
    return (
        <Grid container>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                <GridInsideItem>
                    <MyText>Элементы формы</MyText>
                    <Box sx={{ mt: 3 }}>
                        <MyText>Даты (включительно)</MyText>
                        <MyText>(можно не указывать)</MyText>
                    </Box>
                    <Form>
                        <Input label="Начало регистрации" variant="outlined" {...register('city')} />
                        <Input label="Окончание регистрации" variant="outlined" {...register('city')} />
                        <Box sx={{ display: 'flex' }}>
                            <MyButton sx={{ bgcolor: '#67c23a' }}>Сохранить</MyButton>
                            <MyButton sx={{ ml: 1 }}>Предосмотр</MyButton>
                        </Box>
                    </Form>
                </GridInsideItem>
            </Grid>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                <GridInsideItem2>
                    {userField.map((item, index) => (
                        <UserName key={index} id={item.id} value={item.value} handleText={handleText} handleDelete={handleDelete} />
                    ))}
                    {/* <TextFieldItem /> */}
                    <MyButton onClick={() => adduserfield()}>
                        Добавить поле
                    </MyButton>
                </GridInsideItem2>
            </Grid>
        </Grid>
    )
}

export default RegistrationForm