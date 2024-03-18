import React, {useState} from 'react';
import { Box, Divider, Drawer, Button, IconButton, List, ListItem,ListItemButton,  ListItemText, Toolbar } from '@mui/material';

const arrOptions = ["Profile", "Balance", "Logout"];

const DrawerHandling = () => {
    const [open, setOpen] = useState(false); 

  return (
    <div>
        <Button onClick={() => setOpen(true)}>Click Me</Button>
      <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
        <List>
          {arrOptions.map((element) => (
            <ListItemButton onClick={() => setOpen(false)} key={element}> {/* Add key prop to ListItem */}
              <ListItemText primary={element}/>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerHandling;
