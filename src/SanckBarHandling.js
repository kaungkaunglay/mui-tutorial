import React, { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
const SanckBarHandling = () => {
    const [open, setOpen] = useState(true); 
  return (
    <div>
        <Snackbar
        autoHideDuration={2000}
        open={open}
        onClose={() => {
            setOpen(false); 
        }}>
            <Alert severity='success'>
                Your account is created!
            </Alert>
        </Snackbar>
    </div>
  )
}

export default SanckBarHandling