import React, { useState } from 'react'
import { AppBar, Box, Button, Link, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ApiIcon from '@mui/icons-material/Api';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '@emotion/react';
import DrawerComp from './DrawerComp';
import Google from '@mui/icons-material/Google';
const links = ['Products', 'Solution', 'Pricing', 'Enterprise']; 
const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  const [value, setValue ] = useState(0) ;
  const handleChange = (e, target) => {
      setValue(target);
  }
  console.log(isMatch);
  return (
    <div>
        <React.Fragment>
            <AppBar sx={{bgcolor: 'transparent', boxShadow: 0, position: 'sticky'}}>
                {
                  isMatch ? <Box display={'flex'}>  
                    <ApiIcon sx={{color: 'black', padding: 1}}/>
                    <Typography variant='h6' fontFamily={'fantasy'}>CodeDev</Typography>
                   <DrawerComp links={links}/>
                  </Box> : 
                      <Toolbar>
                      <Box sx={{display: 'flex', width: '100%', alignItems: 'center'}}>
                        <ApiIcon sx={{color: 'black', padding: 1}}/>
                        <Box >
                          <Tabs value={value} onChange={handleChange} component={Link} sx={{textDecoration: 'none'}}>
                              {
                                links.map((link, index) => (
                                  <Tab sx={{fontWeight: 'bold', textDecoration: 'none', ":hover": {
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '5px'
                                  }}} label={link} key={index} value={index}  />
                                ))
                              }
                          </Tabs>
                        </Box>
                        <Box display={'flex'} marginLeft={'auto'}>
                              <Button sx={{mr: 2}} variant='outlined'>Talk to us</Button>
                              <Button sx={{ml:2}} variant='contained'>Try for free </Button>
                        </Box>  
                    
                      </Box>
                    </Toolbar>
                }
            
                
                <Box width={'100%'} height={'100vh'}>
                      <video width={'100%'} height={'60%'} autoPlay loop muted playsInline src='video.mp4'></video>
                      <Box display={'flex'} width="100%">
                        <Typography fontSize={{lg: 30, md: 24, sm: 18, xs: 14}} color='black' textAlign={'center'} margin={'auto'} variant='h4'>Build Your Software with Rainbow Technology Company Limited</Typography>
                          
                </Box>
                <Box justifyContent={'center'} margin={'auto'} marginTop={5}  width='100%' display={'flex'}>
                      <Button endIcon={<EmailIcon/>} variant='outlined' sx={{mr: 3}}>Signup with Email</Button>
                      <Button color='error' endIcon={<GoogleIcon/>} variant='contained' sx={{ml: 3}}>Signup with Google</Button>
                </Box>
                </Box>

            </AppBar>
        </React.Fragment>
    </div>
  )
}

export default Header