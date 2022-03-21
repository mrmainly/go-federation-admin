import React from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'
import { useForm } from 'react-hook-form';

import { MyText, MyButton, Form, Input } from '../../components'

const GridItem = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
})

const GridItem2 = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        marginTop: 20
    },
}))

const RegistrationForm = () => {
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })
    return (
        <Grid container>
            <GridItem item lg={6} xl={6} md={6} sm={12} xs={12}>
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
            </GridItem>
            <GridItem2 item lg={6} xl={6} md={6} sm={12} xs={12}>
                <MyButton >
                    Добавить поле
                </MyButton>
            </GridItem2>
        </Grid>
    )
}

export default RegistrationForm