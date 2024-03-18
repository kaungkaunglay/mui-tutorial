import React from 'react'
import { CircularProgress, LinearProgress } from '@mui/material'
const ProgressBarHandling = () => {
  return (
    <div>
      <CircularProgress color='secondary' variant='determinate' value={50} />
      <LinearProgress color='inherit' variant='determinate' value={50}/>
    </div>
  )
}

export default ProgressBarHandling