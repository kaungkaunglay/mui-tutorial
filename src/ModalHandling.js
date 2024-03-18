import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const ModalHandling = () => {
    const [open, setOpen] = useState(true); 
  return (
    <div>
        {/* Modal is starting from top right */}
        <Modal hideBackdrop open={open} onClose={() => {
            setOpen(false)
        }}>
            <Box position='absolute' top="50%" left="50%">
                <Typography>This is text</Typography>
                <Button variant='contained' onClick={() => {
                    setOpen(false);
                }}>Click Me</Button>
            </Box>
        </Modal>
    </div>
  )
}

export default ModalHandling