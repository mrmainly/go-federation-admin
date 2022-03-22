import React, { useEffect, useState, useContext } from 'react'
import { TextField, Autocomplete } from '@mui/material'

import { MyButton } from '../../components'
import api from '../../api'
import { DispatchContext } from '../../store'

const AccessScreen = () => {
    const [partners, setPartners] = useState([])
    const [owner, setOwner] = useState<string>('')
    const dispatch = useContext(DispatchContext)
    const tournamentId = localStorage.getItem('tournamentId')
    useEffect(() => {
        api.getPartner().then((res: any) => {
            const data = res.results.map((item: any) => (
                item.username
            ))
            setPartners(data)
        })
    }, [])
    console.log(owner)
    const sendTournamentStaff = () => {
        api.sendTournamentStaff(owner, tournamentId).then(res => {
            dispatch({ type: 'notification', payload: { text: 'Турнир добавлен', status: 'success', active: true } })
        }).catch(error => {
            dispatch({ type: 'notification', payload: { text: 'Турнир ne добавлен', status: 'error', active: true } })
        })
    }
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
            <MyButton sx={{ bgcolor: '#2dd117', mt: 3 }} onClick={() => sendTournamentStaff()}>Сохранить</MyButton>
        </div>
    )
}

export default AccessScreen