import React, {useState} from 'react'
import { Tabs, Tab, AppBar, Toolbar, Typography } from '@mui/material'

const TabsHandling = () => {
    const [value, setValue ]= useState(); 
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
        </Toolbar>
    </AppBar>
   
   </div>
  )
}

export default TabsHandling