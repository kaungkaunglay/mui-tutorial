import React from 'react'
import { AppBar, Box, Button, Link, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ApiIcon from '@mui/icons-material/Api';
const links = ['Products', 'Solution', 'Pricing', 'Enterprise']; 
const Header = () => {
  return (
    <div>
        <React.Fragment>
            <AppBar sx={{bgcolor: 'transparent', boxShadow: 0, position: 'sticky'}}>
                <Toolbar>
                  <Box sx={{display: 'flex', width: '100%', alignItems: 'center'}}>
                    <ApiIcon sx={{color: 'black'}}/>
                    <Box >
                      <Tabs component={Link} sx={{textDecoration: 'none'}}>
                          {
                            links.map((link, index) => (
                              <Tab value={index} sx={{fontWeight: 'bold', textDecoration: 'none', ":hover": {
                                textDecoration: 'underline',
                                textUnderlineOffset: '5px'
                              }}} label={link} key={index}  />
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
                <Box width={'100%'} height={'100vh'}>
                      <video width={'100%'} height={'60%'} autoPlay loop muted playsInline src='video.mp4'></video>
                      <Box display={'flex'} width="100%">
                        <Typography color='black' textAlign={'center'} margin={'auto'} variant='h4'>Build Your Software with Rainbow Technology Company Limited</Typography>
                          
                </Box>
                <Box justifyContent={'center'} margin={'auto'} marginTop={5}  width='100%' display={'flex'}>
                      <Button variant='outlined' sx={{mr: 3}}>Signup with Email</Button>
                      <Button variant='contained' sx={{ml: 3}}>Signup with Google</Button>
                </Box>
                </Box>

            </AppBar>
        </React.Fragment>
    </div>
  )
}

export default Header