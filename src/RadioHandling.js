import React, { useState } from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography, colors, inputClasses} from '@mui/material'
import {Button} from '@mui/material'
export const Test = () => {
    const [inputs, setInputs ] = useState({
        name: "",
        email: "", 
        password: "",
        subscribe: false,
        gender: ""
    }); 
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
        <form style={{textAlign: 'center', maxWidth: '400px', border: '1px solid #ccc',padding: '20px',justifyContent: 'center'}} onSubmit={handleSubmit}>
            <div>  <TextField style={{margin: '10px'}} onChange={handleChange} name="name" value={inputs.name} type='text' sx={{marign: 3}} placeholder='Name' variant='outlined' /> </div>
            <div> <TextField onChange={handleChange} name="email" value={inputs.email} type='email' sx={{margin: 2}} placeholder='Email' variant='outlined' /></div>
            <div>       <TextField onChange={handleChange} name="password" value={inputs.password} type="password" placeholder='Password' variant='outlined' /> </div>
            <br />
            <FormGroup>
            <FormControlLabel control={<Checkbox onChange={(prev) => setInputs((prev) => ({
                ...prev, subscribe: !prev.subscribe
            }))}/>} label="Subscribe to New Letter"></FormControlLabel>
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup onChange={handleChange}  defaultValue="male" name="gender" aria-labelledby='demo-radio-buttons-group-label'>
                    <FormControlLabel value='female' control={<Radio/>} label="female"/>
                    <FormControlLabel value='male' control={<Radio/>} label='male'/>
                    <FormControlLabel value='other' control={<Radio/>} label='other'/>
                </RadioGroup>
            </FormControl>
            </FormGroup>
        <Button  variant='outlined' type='submit'>Submit</Button>
       
        <Typography>{inputs.name}</Typography>
        <Typography>{inputs.email}</Typography>
        <Typography>{inputs.password}</Typography>
      
    
        </form>
    </div>
    )
}

export default Test