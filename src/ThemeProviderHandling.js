import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const ThemeProviderHandling = () => {
    const theme = useTheme(); 
    console.log(theme); 
  return (
    <div>
        <Typography color="primary">Hello World</Typography>
    </div>
  )
}

export default ThemeProviderHandling