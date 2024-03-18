import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from '@mui/material'
import React, { useState } from 'react'

const DialogHandling = () => {
    const [open, setOpen] = useState(true);
    const [secondopen, setSecondOpen] = useState(false); 
  return (
    <div>
        <Dialog open={open} onClose={() => {
            setOpen(false)
        }}>
        <DialogTitle>This is my Dialog</DialogTitle>
        <DialogContent>
            <DialogContentText>
               Do u have money?
            </DialogContentText>
            <DialogActions>
            <Button>
                NO
            </Button>
            <Button onClick={() => {
                setOpen(false);
                setSecondOpen(true); 
            
            }}>
                YES
            </Button>
            </DialogActions>
        </DialogContent>
        
        </Dialog>
        
        <Dialog open={secondopen} onClose={() => {
            setOpen(false)
            setSecondOpen(false)
            
        }}>
        <DialogTitle>This is my Dialog</DialogTitle>
        <DialogContent>
            <DialogContentText>
                I love you
            </DialogContentText>
           
        </DialogContent>
        
        </Dialog>
        
    </div>
  )
}

export default DialogHandling