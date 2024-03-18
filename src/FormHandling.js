import React, { useState } from 'react'
import {TextField, Typography, colors, inputClasses} from '@mui/material'
import {Button} from '@mui/material'

export const Test = () => {
    const [inputs, setInputs ] = useState({
        name: "",
        email: "", 
        password: ""
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
        <Button  variant='outlined' type='submit'>Submit</Button>
       
        <Typography>{inputs.name}</Typography>
        <Typography>{inputs.email}</Typography>
        <Typography>{inputs.password}</Typography>
      
        
        </form>
    </div>
    )
}

export default Test