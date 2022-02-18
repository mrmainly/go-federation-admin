import React from 'react'

import { OutlinedInput, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import { SearchInputProps } from '../../interface';

const SearchInput: React.FunctionComponent<SearchInputProps> = ({ placeholder }) => {
    return (
        <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            size="small"
            fullWidth
            placeholder={placeholder}
        />
    )
}

export default SearchInput