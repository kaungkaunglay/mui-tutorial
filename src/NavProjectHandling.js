import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material'
import React, {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material';

import DrawerComp from './components/DrawerComp';

const NavProjectHandling = ({links}) => {
  const theme = useTheme(); 
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  const [value, setValue] = useState();
  return (
    <>
        <AppBar sx={{backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);'}}>
            <Toolbar>
             { isMatch ? <>
              <Typography>
                  <ShoppingCartIcon/>
                  </Typography>
              <DrawerComp links={links}/>
             </> :
                 <Grid sx={{placeItems: 'center', }} container spacing={1}>
                 <Grid item xs={2}>
                  <Typography>
                  <ShoppingCartIcon/>
                  </Typography>
             
                 </Grid>
                 <Grid item xs={6}>
                  <Tabs indicatorColor='secondary' textColor="inherit" value={value} onChange={(e, value) => setValue(value)}>
                     {
                       links.map((link, index) => (
                         <Tab label={link} key={index} value={link}/>
                       ))
                     }
                  </Tabs>
                 </Grid>
                 <Grid item xs={1}></Grid>
                 <Grid item xs={3}>
                   <Box display={"flex"}>
                    <Button  sx={{marginLeft: 'auto', background: 'rgba(2,0,36,1)'}} variant='contained'>Login</Button>
                    <Button sx={{marginLeft:1, background: 'rgba(2,0,36,1)'}} variant='contained'>Signup</Button>
                   </Box>
                 </Grid>
               </Grid>
             }
           
            
            </Toolbar>
        </AppBar>
    </>
  )
}

export default NavProjectHandling