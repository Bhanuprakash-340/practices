import React, { useState } from 'react'
import {Stack,Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
  const[formats, setFormats] = useState(null|"")
   console.log(formats)

  const handleFormats = (event, formatChange) =>{
    setFormats(formatChange)
  }
  return (
    <Stack spacing={2}>
        <Stack spacing={4} direction='row'>
            <Button variant='text' href="https://www.google.co.in/" target='_blank'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={4} direction="row">
          <Button variant='contained' color='primary'>primary</Button>
          <Button variant='contained' color='secondary'>secondary</Button>
          <Button variant='contained' color='error'>error</Button>
          <Button variant='contained' color='info'>info</Button>
          <Button variant='contained' color='warning'>warning</Button>
          <Button variant='contained' color='success'>success</Button>
          <Button variant='contained' color='grey'>grey</Button>
        </Stack>
        <Stack direction='row' spacing={4}>
          <Button variant='contained' size='small'>small</Button>
          <Button variant='contained' size='medium'>medium</Button>
          <Button variant='contained' size='large'>large</Button>
          <Button variant='contained' size='large' startIcon={<SendIcon/>} disableRipple>send</Button>
          <Button variant='contained' size='large' endIcon={<SendIcon/>} disableElevation>send</Button>
          <IconButton color='success' size='medium' variant='contained' aria-label='send' onClick={() =>alert("Icons is clicked")}>
            <SendIcon/>
          </IconButton>
        </Stack>
        <Stack  direction="row">
          <ButtonGroup variant='text'>
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant='contained' color='success'>
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack  direction="row">
          <ButtonGroup variant='outlined' orientation='vertical' color='warning'>
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction='row'>
          <ToggleButtonGroup 
          aria-label='text-formatting' 
          value={formats} 
          onChange={handleFormats}
          size='medium'
          color='success'
          orientation='vertical'
          exclusive
          >
            <ToggleButton aria-label='bold' value='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton aria-label='italic' value='italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton aria-label='underline' value='underline'><FormatUnderlinedIcon/></ToggleButton>
          </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton