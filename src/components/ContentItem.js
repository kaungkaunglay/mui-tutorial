import { Box, Typography } from '@mui/material'
import React from 'react'

const ContentItem = ({title, description, img, swap}) => {
  return (
    <Box bgcolor={!swap && "#fff"} display={'flex'} alignItems={'center'} padding={10} justifyContent={'space-between'}>
    {
        swap ? <>
         <Box>
        <Typography variant='h3' color={'#734950'} padding={3} textAlign="left">
            {title}
        </Typography>
        <Typography variant='body1' padding={3} color={'textSecondary'} textAlign="left">
            {description}
        </Typography>
    </Box>
    <img src={img} alt='title' loading='lazy' width={'50%'} style={{boxShadow: '10px 10px 20px #ccc', marginLeft: '10%', borderRadius: 20 }} height={'300px'}></img>
        </> : 
        <> 
          <img src={img} alt='title' loading='lazy' width={'50%'} style={{boxShadow: '10px 10px 20px #ccc', marginRight: '10%', borderRadius: 20 }} height={'300px'}></img>
         <Box>
        <Typography variant='h3' color={'#734950'} padding={3} textAlign="left">
            {title}
        </Typography>
        <Typography variant='body1' padding={3} color={'textSecondary'} textAlign="left">
            {description}
        </Typography>
    </Box>
  
        </>
    }
   
</Box>
  )
}

export default ContentItem