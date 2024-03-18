import React, { useState } from 'react'
import { List,Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
const array = ['First', 'Second', 'Third'];
  
const ListHandling = () => {
    const [open, setOpen ] = useState(false);
  return (
    <Box>
        <List>
        <ListItem divider>
                   <ListItemButton onClick={() => {
                    setOpen(true)
                   }}>
                    <ListItemIcon>{">"}</ListItemIcon>
                        <ListItemText primary={"Expand List"}/>
                   </ListItemButton>
                </ListItem>
        </List>
        <Collapse in={open}>
        <List  sx={{marginLeft: 25}}>
          {
            array.map((listElm) => (
                <ListItem divider>
                   <ListItemButton onClick={() => setOpen(false)}>
                        <ListItemText primary={listElm}/>
                   </ListItemButton>
                </ListItem>
            ))
          }
        
        </List>
        </Collapse>
    </Box>
  )
}

export default ListHandling