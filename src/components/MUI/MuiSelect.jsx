import React, {useState} from 'react'
import { Box,TextField,MenuItem, Stack} from '@mui/material'

// const nameList = ["Bhanu", "Prakash", "Akash", "React", "Angular","Python"]

const MuiSelect = () => {
    const [num, setNum] = useState("")
    // const[names, setNames] = useState([])
    // console.log(names)

    // console.log({country})

    const handleNum = (event) =>{
        setNum(event.target.value)
    }

    // const handleNames = (event) =>{
    //    const value = event.target.value 
    //    setNames(typeof value === 'string' ? value.split(","):value)
    // }

  return (
    <Stack direction="row"   spacing={5} flexWrap='wrap' margin="10px">
        <Stack   spacing={5}>
            <Box width='250px'>
            <TextField label="Select Num" select value={num} fullWidth onChange={handleNum} helperText="with label">
                    <MenuItem value="1">ONE</MenuItem>
                    <MenuItem value="2">TWO</MenuItem>
                    <MenuItem value="3">THREE</MenuItem>
            </TextField>
            </Box>
        </Stack>
        <Stack   spacing={5}>
        <Box width='250px'>
            <TextField select value={num} fullWidth onChange={handleNum} helperText="without label" InputProps={{ 'aria-label': 'Without label'}}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">ONE</MenuItem>
                    <MenuItem value="2">TWO</MenuItem>
                    <MenuItem value="3">THREE</MenuItem>
            </TextField>
        </Box>
        </Stack>
        <Stack   spacing={5}>
        <Box width='250px'>
            <TextField select value={num} fullWidth onChange={handleNum} helperText="error-field" InputProps={{ 'aria-label': 'Without label'}} error={true}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">ONE</MenuItem>
                    <MenuItem value="2">TWO</MenuItem>
                    <MenuItem value="3">THREE</MenuItem>
            </TextField>
        </Box>
        </Stack>
        <Stack   spacing={5}>
        <Box width='250px'>
            <TextField select value={num} fullWidth onChange={handleNum} helperText="disabled" InputProps={{ 'aria-label': 'Without label'}} disabled>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">ONE</MenuItem>
                    <MenuItem value="2">TWO</MenuItem>
                    <MenuItem value="3">THREE</MenuItem>
            </TextField>
        </Box>
        </Stack>
        <Stack   spacing={5}>
        <Box width='250px'>
            <TextField select value={num} fullWidth onChange={handleNum} helperText="read-only" InputProps={{readOnly:true}}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">ONE</MenuItem>
                    <MenuItem value="2">TWO</MenuItem>
                    <MenuItem value="3">THREE</MenuItem>
            </TextField>
        </Box>
        </Stack>
    </Stack> 
  )
}

export default MuiSelect