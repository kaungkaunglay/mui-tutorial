import React, { useState } from 'react'
import { Drawer, List, IconButton, ListItemButton, ListItemIcon, ListItemText, colors } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp = ({links}) => {
    const [open, setOpen] = useState(true); 
  return ( 
    <>
    <Drawer PaperProps={{
        sx: {backgroundColor: "rgba(2,0,36,1)"}
    }} anchor='left' open={open} onClose={() => setOpen(false)}>
    <List>
        {links.map((link, index) => (
                <ListItemButton onClick={() => setOpen(false)} divider key={index}>
                <ListItemIcon>
                    <ListItemText sx={{color: "white"}}>
                        {link}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
        ))}
        
        </List>
    </Drawer>
  
    <IconButton sx={{marginLeft: 'auto', color: 'black'}} onClick={() => setOpen(!open)}>
        <MenuIcon sx={{color: 'black'}}/>
    </IconButton>
    </>
  )
}

export default DrawerComp