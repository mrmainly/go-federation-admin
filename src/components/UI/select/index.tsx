import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material'

import { MySelectProps } from '../../../interface'

const MySelect: React.FunctionComponent<MySelectProps> = ({ options, variant, title, ...props }) => {
    return (
        <TextField
            id="filled-select-currency-native"
            select
            label={title}
            fullWidth
            variant="outlined"
            margin="normal"
            {...props}
        >
            {options ? options.map((item: any, index: number) => (
                <option key={index} value={item.value}> {item.label}</option>
            )) : ''}
        </TextField>
    )
}

export default MySelect