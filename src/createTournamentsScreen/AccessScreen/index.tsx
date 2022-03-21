import React from 'react'

import { MyButton, MySelect } from '../../components'

const AccessScreen = () => {
    const arr = ['EGS2016', 'hidden']
    return (
        <div>
            <MySelect title="Редакторы" options={arr} sx={{ width: '100%', mb: 2 }} defaultValue={'EGS2016'} />
            <MyButton sx={{ bgcolor: '#2dd117' }}>Сохранить</MyButton>
        </div>
    )
}

export default AccessScreen