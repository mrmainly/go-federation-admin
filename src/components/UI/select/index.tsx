import React, { useState, forwardRef } from 'react'

import { TextField, MenuItem } from '@mui/material'
import { styled } from '@mui/system'

import { MySelectProps } from '../../../interface'

// const Option = styled('option')({
//     cursor: 'pointer',
//     padding: 10
// })

export default forwardRef<HTMLInputElement, MySelectProps>(function MySelect({ options, defaultValue, variant, title, ref, ...props }) {
    return (
        <TextField
            id="filled-select-currency-native"
            select
            label={title}
            fullWidth
            variant="outlined"
            margin="normal"
            defaultValue={defaultValue}
            inputRef={ref}
            {...props}
        >
            {options ? options.map((item: any, index: number) => (
                <MenuItem key={index} value={item}>{item}</MenuItem>
            )) : ''}
        </TextField>
    )
})