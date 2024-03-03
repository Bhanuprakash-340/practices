import React, { useState } from 'react'
import { Stack, TextField, InputAdornment} from '@mui/material'

const MuiTextFields = () => {
    const [value, setValue] = useState("")

    const handleChange = (event) =>{
        setValue(event.target.value)
    }
  return (
   <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined' color='primary'  />
            <TextField label='Name' variant='filled' color='warning'  />
            <TextField label='Name' variant='standard' color='success'/>
            <TextField label='Name' variant='outlined' color='success' size='small'/>
        </Stack>
        <Stack spacing={4} direction='row' flexWrap='wrap' margin='5px'>
            <TextField label='Hello world' required />
            <TextField label='form input' disabled />
            <TextField label='password' type='password' />
            <TextField label='Number'  type='number'/>
            <TextField label='Search' type='search' />
            <TextField label='Read only' InputProps={{readOnly:true}} />
            <TextField label='form input' helperText="Do not share password to anyone" />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Amount' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}}/>
            <TextField label='Weight'  InputProps={{endAdornment:<InputAdornment position='end'>Kgs</InputAdornment>}}/>
            <TextField label="form input" required value={value} error={!value} onChange={handleChange} helperText={!value?"Required":"do not share your password"}/>
        </Stack>
   </Stack>
  )
}

export default MuiTextFields