import React from 'react'
import { Container } from '@mui/material'
const ContainerHandling = () => {
  return (
    <div>
 <Container sx={{background: 'green'}} maxWidth='xs'>
    Hello XS
   </Container>
   <br></br>
   <Container sx={{background: 'green'}} maxWidth='sm'>
    Hello SM
   </Container>
   <br></br>

   <Container sx={{background: 'green'}} maxWidth='md'>
    Hello MD
   </Container>
   <br></br>
   <Container sx={{background: 'green'}} maxWidth='lg'>
    Hello LG
   </Container>
   <br></br>
   <Container sx={{background: 'green'}} maxWidth='xl'>
    Hello XL
   </Container>
    </div>
  
   
  )
}

export default ContainerHandling