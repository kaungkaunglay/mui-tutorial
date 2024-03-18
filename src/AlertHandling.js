import { Alert, Box } from '@mui/material'
import React, {useState} from 'react'

const AlertHandling = () => {
    const [show , setShow] = useState(true); 
  return (
    <Box>
        { show && 
    <Alert onClose={() => {
        setShow(false)
    }} severity='success'>
    This is success;
    </Alert>
        }
    
    
    </Box>
  )
}

export default AlertHandling