import React, { useEffect, useState } from 'react'
import { TextField, Autocomplete } from '@mui/material'

import { MyButton, MySelect } from '../../components'
import api from '../../api'

const AccessScreen = () => {
    const [partners, setPartners] = useState([])
    const [owner, setOwner] = useState<string>()
    useEffect(() => {
        api.getPartner().then((res: any) => {
            const data = res.results.map((item: any) => (
                item.username
            ))
            setPartners(data)
        })
    }, [])
    return (
        <div>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={partners}
                onInputChange={(event, newInputValue) => setOwner(newInputValue)}
                renderInput={(params) => (
                    <TextField  {...params} id="outlined-basic" label="Редакторы" variant="outlined" value={owner} onChange={(e) => setOwner(e.target.value)} />
                )}
            />
            <MyButton sx={{ bgcolor: '#2dd117', mt: 3 }}>Сохранить</MyButton>
        </div>
    )
}

export default AccessScreen