import { Box, Typography, Button } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
            <Typography  fontWeight={"bold"} fontSize={{lg: 30, md: 24, sm: 18, xs: 14}}  variant='h3' padding={10} textAlign={"center"}>
                Ready For Any Team Size
            </Typography>
            <Typography fontSize={{lg: 24, md: 20, sm: 16, md: 14}} variant='div' textAlign={"center"} padding={4}>
                    Optimized for any team size
            </Typography>
            <Box display={"flex"} margin="auto" justifyContent={"center"} padding={5}>
                <Button sx={{mr: 2, fontSize: {lg: 20, md: 17, sm: 12, xs: 8}}} variant='contained'>Try CodeEnv For Free</Button>
                <Button sx={{ml: 2, fontSize: {lg: 20, md: 17, sm: 12, xs: 8}}} variant='outlined'>Try to talk sales</Button>
            </Box>
        </Box>
  )
}

export default Footer