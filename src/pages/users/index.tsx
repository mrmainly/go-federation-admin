import React from 'react'
import { FormControlLabel, Checkbox } from '@mui/material'

import { UsersTable, SearchInput } from '../../components'

const Users = () => {
    return (
        <div>
            <SearchInput placeholder="Поиск" />
            <FormControlLabel control={<Checkbox />} label='Пользователи "с правами"' sx={{ mb: 2, mt: 2 }} />
            <UsersTable />
        </div>
    )
}

export default Users