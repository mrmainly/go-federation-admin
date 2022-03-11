import React from 'react'

import { MyButton, MySelect } from '../../components'

const AccessScreen = () => {
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
            <MySelect title="Редакторы" options={arr} sx={{ width: '100%', mb: 2 }} />
            <MyButton sx={{ bgcolor: '#2dd117' }}>Сохранить</MyButton>
        </div>
    )
}

export default AccessScreen