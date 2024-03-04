import React, {useState} from 'react'
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material'

const MuiRadio = () => {
    const [option, setOption] = useState("others")
    const [error, setError] = useState(false)
    const [selected, setSelected] = useState("")

    const handleOptionChnages = (event) =>{
        setOption(event.target.value)
    }

    const handleOptionSelect = (event) =>{
        setSelected(event.target.value)
    }

    const handleAnswer = () =>{
        const result = selected === "Four" ? true: false 
        setError(result)
    }

  return (
    <div className='box-container'>
         <div className='box-border'>
        <FormControl>
            <FormLabel id="select-gender">Gender</FormLabel>
            <RadioGroup aria-labelledby="select-gender" 
             name="radio-buttons-group" 
             defaultValue="male">
                <FormControlLabel label="male" control={<Radio />} value="male" />
                <FormControlLabel label="female" control={<Radio/>}  value="female"/>
                <FormControlLabel label="others" control={<Radio />}  value="others"/>
            </RadioGroup>
        </FormControl>
        </div>
        <div className='box-border'>
        <FormControl>
            <FormLabel id="select-gender">Gender</FormLabel>
            <RadioGroup aria-labelledby="select-gender" 
             name="radio-buttons-group" 
             defaultValue="female"
             row>
                <FormControlLabel label="male" control={<Radio />} value="male" />
                <FormControlLabel label="female" control={<Radio/>}  value="female"/>
                <FormControlLabel label="others" control={<Radio />}  value="others"/>
            </RadioGroup>
        </FormControl>
        </div>
        <div className='box-border'>
        <FormControl>
            <FormLabel id="select-gender">Gender</FormLabel>
            <RadioGroup aria-labelledby="select-gender" 
             name="radio-buttons-group" 
             value={option}
             onChange={handleOptionChnages}
             row>
                <FormControlLabel label="male" control={<Radio color='success'/>} value="male" color='success'/>
                <FormControlLabel label="female" control={<Radio color='error'/>}  value="female" color='danger'/>
                <FormControlLabel label="others" control={<Radio />}  value="others"/>
            </RadioGroup>
            <p>selected: {option}</p>
        </FormControl>
        </div>
        <div className='box-border'>
            <FormControl>
                <FormLabel id="select-gender">Gender</FormLabel>
                <RadioGroup aria-labelledby="select-gender" 
                 name="radio-buttons-group" 
                 value={option}
                 onChange={handleOptionChnages}
                 row>
                    <FormControlLabel label="male" control={<Radio color='success'/>} value="male" color='success'/>
                    <FormControlLabel label="female" control={<Radio color='error'/>}  value="female" color='danger'/>
                    <FormControlLabel label="others" control={<Radio />}  value="others"/>
                </RadioGroup>
                <p>selected: {option}</p>
            </FormControl>
        </div>
        <div className='box-border'>
            <FormControl>
                <FormLabel id="select-gender">Gender</FormLabel>
                <RadioGroup aria-labelledby="select-gender" 
                 name="radio-buttons-group" 
                 value={option}
                 onChange={handleOptionChnages}
                 row>
                    <FormControlLabel label="male" control={<Radio color='success'/>} value="male" color='success'labelPlacement="top"/>
                    <FormControlLabel label="female" control={<Radio color='error'/>}  value="female" color='danger' labelPlacement="bottom"/>
                    <FormControlLabel label="others" control={<Radio />}  value="others" labelPlacement="start"/>
                </RadioGroup>
                <p>selected: {option}</p>
            </FormControl>
        </div>
        <div className='box-border'>
            <FormControl>
                <FormLabel id="select-option">2+2 = {selected} </FormLabel>
                <RadioGroup aria-labelledby="select-option" 
                 name="radio-buttons-group" 
                 value={selected}
                 onChange={handleOptionSelect}
                 row>
                    <FormControlLabel label="4" control={<Radio color='success'/>} value="Four" color='success'labelPlacement="top"/>
                    <FormControlLabel label="5" control={<Radio color='error'/>}  value="Five" color='danger' labelPlacement="bottom"/>
                </RadioGroup>
                {error === true?(<p>Correct Answer</p>):(<p>Wrong Answer</p>)}
                <button onClick={handleAnswer}>Check Answer</button>
            </FormControl>
        </div>
    </div>
  )
}

export default MuiRadio