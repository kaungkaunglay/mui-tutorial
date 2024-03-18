import React from 'react'
import { Box, Grid } from '@mui/material'

const GridHandling = () => {
  return (
    <Box>
        {/* Grid is 12 column layout by default */}
        <Grid container spacing={3}>
            <Grid sx={{background: 'yellow'}} item xs={12} md={4} lg={3} sm={6}>
                Item 1
            </Grid>
            <Grid sx={{background: 'blue'}} md={4} item xs={12} lg={3} sm={6}>
                Item 2
            </Grid>
            <Grid sx={{background: 'blue'}} md={4} item xs={12} lg={3} sm={6}>
                Item 3
            </Grid>
            <Grid sx={{background: 'blue'}} md={4} item xs={12} lg={3} sm={6}>
                Item 4
            </Grid>
        </Grid>
    </Box>
  )
}

export default GridHandling