import React from 'react'
import { TextField, Box, FormControlLabel, Checkbox } from '@mui/material'
import { Editor } from "react-draft-wysiwyg";
import './editor.css'

import { MyText, Input, Form, MySelect, MyButton } from '../../components'

const EditorScreen = () => {
    const effect = 5
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
            <MyText variant="h6">Общее</MyText>
            <Form sx={{ display: 'flex', flexDirection: 'column' }}>
                <Input label="Название" variant="outlined" />
                <MySelect title="Категория" variant="outlined" options={arr} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <MyText variant="h6">Даты проведения</MyText>
                    <Box sx={{ display: 'flex' }}>
                        <Input label="Начало проведения" variant="outlined" type="date" id={"outlined-basic"} InputLabelProps={{
                            shrink: true,
                        }} sx={{ mr: 2 }} />
                        <Input label="Конец проведения" variant="outlined" type="date" id={"outlined-basic"} InputLabelProps={{
                            shrink: true,
                        }} sx={{ ml: 2 }} />
                    </Box>
                </Box>
                <Input label="Город" variant="outlined" />
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2, mt: 2 }}>
                    <MyText variant="body1">Описание</MyText>
                    <Editor
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                    />
                </Box>

                <MyText variant="h6">Оргкомитет</MyText>
                <Input label="Директор" variant="outlined" />
                <Input label="Телефон" variant="outlined" />
                <Input label="Электронная почта" variant="outlined" />

                <MyText variant="h6">Регламент</MyText>
                <Input label="Число турниров" variant="outlined" type="number" sx={{ width: 300 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MyText variant="body1">Расписание</MyText>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Добавить расписание" sx={{ ml: 0.1 }} />
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <MyText variant="body1" sx={{ mt: 3.5 }}>Контроль времени</MyText>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                        <Input label="Основное время в минутах" variant="outlined" type="number" sx={{ width: 300, }} />
                        <MySelect title="Контроль времени" variant="outlined" options={arr} sx={{ width: 300 }} />
                        <Box>
                            <Input label="Минут" variant="outlined" type="number" sx={{ width: 180, }} />
                            <Input label="Секунд на ход" variant="outlined" type="number" sx={{ width: 180, ml: 2 }} />
                            <Input label="Периода" variant="outlined" type="number" sx={{ width: 180, ml: 2 }} />
                        </Box>
                        <MyText variant="body1">Эффективное время <span style={{ fontWeight: 'bold' }}>{effect}</span> минут</MyText>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2, mt: 2 }}>
                    <MyText variant="body1">Регламент</MyText>
                    <Editor
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                    />
                </Box>
                <MySelect title="Тигр" variant="outlined" options={arr} placeholder="Выбрать" />
                <Box sx={{ display: 'flex' }}>
                    <MyButton sx={{ mt: 2, bgcolor: '#67c23a' }}>Сохранить</MyButton>
                    <MyButton sx={{ mt: 2, ml: 2, bgcolor: '#f56c6c' }}>Удалить</MyButton>
                </Box>
            </Form>
        </div>
    )
}

export default EditorScreen