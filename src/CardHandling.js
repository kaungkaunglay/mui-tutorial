import React from 'react'
import { Card, CardContent, CardActionArea, Button, CardMedia, Typography, CardActions } from '@mui/material'
const CardHandling = () => {
  return (
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/cloud-network-hand-using-phone-technology-remix-galaxy_53876-104224.jpg?w=740&t=st=1710219507~exp=1710220107~hmac=d00b03284cb4413307f705dbd073658077a0819f00d8759475a1a5a54240558a"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardHandling