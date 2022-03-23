import React, { useState } from 'react'
import { Box, Grid, Menu, MenuItem, Button } from '@mui/material'
import { styled } from '@mui/system'
import { useForm } from 'react-hook-form';

import { MyText, MyButton, Form, Input, Elements_form_registration } from '../../components'

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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [userField, setUserField] = useState<any>([])
    let [idUserField, setIdUserField] = useState(0)
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleText2 = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let text = [...userField]
        userField[id].description = e.target.value
        setUserField(
            text
        )
    }

    const handleText = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let text = [...userField]
        // userField[id].value2 = e.target.value
        userField[id].title = e.target.value
        setUserField(
            text
        )
    }

    const handleCheckbox = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let text = [...userField]
        // userField[id].value2 = e.target.value
        userField[id].required = e.target.checked
        console.log(userField[id].required)
        setUserField(
            text
        )
    }
    const adduserfield = async (type: string) => {
        setIdUserField(idUserField + 1)
        let newUserField
        switch (type) {
            case 'user':
                newUserField = userField.concat({
                    title: '',
                    type: type,
                    id: idUserField,
                })
                break;
            case 'textfield':
                newUserField = userField.concat({
                    title: '',
                    description: '',
                    type: type,
                    id: idUserField,
                    required: false
                })
                break;
            case 'datePicker':
                newUserField = userField.concat({
                    title: '',
                    description: '',
                    type: type,
                    id: idUserField,
                    required: false
                })
                break;
            case 'checkbox':
                newUserField = userField.concat({
                    title: '',
                    type: type,
                    id: idUserField,
                })
                break;
            case 'list':
                newUserField = userField.concat({
                    title: '',
                    description: '',
                    type: type,
                    id: idUserField,
                })
                break;
            default:
                break;
        }
        setUserField(newUserField)
    }
    const handleDelete = (i: any) => {
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
                    {/* <Form> */}
                    <Input label="Начало регистрации" variant="outlined" {...register('city')} />
                    <Input label="Окончание регистрации" variant="outlined" {...register('city')} />
                    <Box sx={{ display: 'flex', mt: 2 }}>
                        <MyButton sx={{ bgcolor: '#67c23a' }} onClick={() => console.log(userField)}>Сохранить</MyButton>
                        <MyButton sx={{ ml: 1 }}>Предосмотр</MyButton>
                    </Box>
                    {/* </Form> */}
                </GridInsideItem>
            </Grid>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                <GridInsideItem2>
                    {userField.map((item: any, index: number) => (
                        <Elements_form_registration
                            key={index}
                            id={item.id}
                            title={item.title}
                            handleText={handleText}
                            handleDelete={handleDelete}
                            type={item.type}
                            description={item.description}
                            handleText2={handleText2}
                            required={item.required}
                            handleCheckbox={handleCheckbox}
                        />
                    ))}
                    {/* <TextFieldItem /> */}
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant="contained"
                        sx={{ color: 'white' }}
                    >
                        Добавить поле
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => adduserfield("user")}>Игрок</MenuItem>
                        <MenuItem onClick={() => adduserfield("textfield")}>Текстовое поле</MenuItem>
                        <MenuItem onClick={() => adduserfield("datePicker")}>Дата</MenuItem>
                        <MenuItem onClick={() => adduserfield("list")}>Список</MenuItem>
                        <MenuItem onClick={() => adduserfield("checkbox")}>Чекбокс</MenuItem>
                    </Menu>
                </GridInsideItem2>
            </Grid>
        </Grid>
    )
}

export default RegistrationForm