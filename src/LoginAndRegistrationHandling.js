import { Box, Button, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';
const LoginAndRegistrationHandling = () => {
    const [isSignup, setSignup] = useState(false);
    const [input, setInput]  = useState({
        name:  "",
        email: "", 
        password: ""
    });
    const handleChange = (e) => {
        setInput((prevState) => (
            {
                ...prevState, [e.target.name] : e.target.value
            }
        ))
    } 
    const handleSubmit = (e) => {
        e.preventDefault() ; 
        console.log(input);
    }
    const resetSate = () => {
        setSignup(!isSignup);
        setInput({name: '', email : '', password: ''}); 
    }
    
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <Box display={"flex"} sx={{
                ":hover": {
                    boxShadow: " 10px 10px 20px #ccc"
                },
            }}  boxShadow={'5px 5px 10px #ccc'} borderRadius={5} margin={"auto"} padding={5} marginTop={5} alignItems={"center"} justifyContent={"center"} maxWidth={400} flexDirection={"column"}>
                   
                    <Typography variant='h3' padding={3} textAlign={"center"}>{
                        isSignup ? "Signup" : "Login"
                    }</Typography>
                   {
                    isSignup && <TextField value={input.name} onChange={handleChange} name="name"  margin='normal' type={'text'} variant='outlined' placeholder='Name'></TextField>
                   }
                  
                    <TextField value={input.email} onChange={handleChange} name="email" margin='normal' type={'email'} variant='outlined' placeholder='Email'></TextField>
                    <TextField value={input.password} onChange={handleChange} name="password" margin='normal' type={'password'} variant='outlined' placeholder='Password'></TextField>
                    <Button endIcon={isSignup ? <VpnKeyIcon/> : <LoginIcon/>} type="submit"  sx={{marginTop: 3, borderRadius: 3}} variant='contained' color='primary'>
                        {isSignup ? "Signup" : "Login"}
                    </Button>
                    <Button endIcon={isSignup ? <LoginIcon/> : <VpnKeyIcon/>} onClick={resetSate} sx={{marginTop: 3, borderRadius: 3}} color='primary'>
            
                        Change to {isSignup ? 'Login' : "Signup"}
                    </Button>
            </Box>
       </form>
    </div>
  )
}

export default LoginAndRegistrationHandling