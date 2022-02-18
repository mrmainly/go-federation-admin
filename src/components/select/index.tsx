import React, { useState } from 'react'

import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'

import { MySelectProps } from '../../interface'

const MySelect: React.FunctionComponent<MySelectProps> = ({ options, variant, title, ...props }) => {
    const [select, setSelect] = useState('')
    return (
        <div>
            <FormControl {...props}>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    onChange={(e) => {
                        setSelect(e.target.value)
                    }}
                    size="medium"
                    variant="outlined"
                    style={{ color: 'black' }}
                >
                    {options ? options.map((item: any, index: number) => (
                        <MenuItem key={index} value={item.value}>
                            {item.label}
                        </MenuItem>
                    )) : ''}
                </Select>
            </FormControl>
        </div>
    )
}

export default MySelect