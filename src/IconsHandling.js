import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
// use icons button for icon side effect
import AddHomeIcon from '@mui/icons-material/AddHome';
const IconsHandling = () => {
  return (
   <Box>
    <AppBar>
        <Toolbar>
        <IconButton onClick={() => alert('Icon selected')}>
            <AccountCircleIcon color="secondary"/>
        </IconButton>
        <IconButton>
              <AddHomeIcon color="secondary"/>
        </IconButton>
        </Toolbar>
        
    </AppBar>
  
   </Box>
  )
}

export default IconsHandling