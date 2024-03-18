import React, { useState } from 'react'
import { Rating, Typography } from '@mui/material'
const RatingHandling = () => {
    const [value, setValue] = useState(); 
  return (
    <div>
        <Rating precision={0.1} size='large' defaultValue={1.6} value={value} onChange={(e, value) => setValue(value)}/>
        <Typography>Rated {value!== undefined ? value: 0} stars</Typography>
    </div>
  )
}

export default RatingHandling