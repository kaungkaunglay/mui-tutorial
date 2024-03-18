import { useTheme } from '@emotion/react'
import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { CustomizedTypography } from '../styles/style';

const ContentItem = ({title, description, img, swap}) => {
    const isMatch = useMediaQuery(useTheme().breakpoints.down("md")); 

    return (
    <Box bgcolor={!swap && "#fff"} display={'flex'} alignItems={'center'} padding={10} flexDirection={isMatch ? "column" : "row"} justifyContent={'space-between'}>
    {
        swap ? <>
         <Box>
        <CustomizedTypography fontWeight={"bold"} fontSize={{lg: 32, md: 28, sm: 24, xs: 20}} variant='h3' color={'#734950'} padding={3} textAlign="left">
            {title}
        </CustomizedTypography>
        <CustomizedTypography fontSize={{lg: 24, md: 20, sm: 16, xs: 14}} variant='body1' padding={3} color={'textSecondary'} textAlign="left">
            {description}
        </CustomizedTypography>
    </Box>
    <img src={img} alt='title' loading='lazy' width={isMatch ? "100%": "50%"} style={{boxShadow: '10px 10px 20px #ccc', marginLeft: '10%', borderRadius: 20 }} height={'300px'}></img>
        </> : 
        <> 
          <img src={img} alt='title' loading='lazy' width={isMatch ? "100%": "50%"} style={{boxShadow: '10px 10px 20px #ccc', marginRight: '10%', borderRadius: 20 }} height={'300px'}></img>
         <Box>
        <CustomizedTypography fontWeight={"bold"} fontSize={{lg: 32, md: 28, sm: 24, xs: 20}} variant='h3' color={'#734950'} padding={3} textAlign="left">
            {title}
        </CustomizedTypography>
        <CustomizedTypography  variant='body1' padding={3} color={'textSecondary'} textAlign="left">
            {description}
        </CustomizedTypography>
    </Box>
  
        </>
    }
   
</Box>
  )
}

export default ContentItem