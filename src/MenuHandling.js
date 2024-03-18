import React, {useState} from 'react'
import { Tabs, Tab, AppBar, Toolbar, Typography } from '@mui/material'
import {Menu, MenuItem, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const MenuHandling = () => {
    const [anchorEl, setAnchorEl] = useState(null); 
    const [open, setOpen] = useState(false); 
    const [value, setValue ]= useState(); 
    const handleClose = () =>{
        setAnchorEl(null);
        setOpen(false); 
    }
    const handleClick = (e) =>{
        setAnchorEl(e.currentTarget); 
        setOpen(true);
    }

  return (
   <div>
    <AppBar>
        <Toolbar>
            <Typography sx={{marginRight: '100px'}}>LOGO</Typography>
        <Tabs textColor='white' value={value} onChange={(e,value)=> {
        setValue(value); 
    }}>
      <Tab label="First"/>
      <Tab label="Second"/>
      <Tab label="Third"/>
    </Tabs>
  <MenuIcon sx={{marginLeft: "auto"}} onClick={handleClick}></MenuIcon>
    <Menu  anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
        </Toolbar>

    </AppBar>
   
   </div>
  )
}

export default MenuHandling