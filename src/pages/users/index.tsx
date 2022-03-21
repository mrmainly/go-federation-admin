import React, { useEffect } from 'react'
import { FormControlLabel, Checkbox } from '@mui/material'

import { UsersTable, SearchInput } from '../../components'
import api from '../../api'

const Users = () => {
    useEffect(() => {
        api.getProfiles().then((profile: any) => {
            console.log('profile', profile)
        })
    }, [])
    return (
        <div>
            <SearchInput placeholder="Поиск" />
            <FormControlLabel control={<Checkbox />} label='Пользователи "с правами"' sx={{ mb: 2, mt: 2 }} />
            <UsersTable />
        </div>
    )
}

export default Users