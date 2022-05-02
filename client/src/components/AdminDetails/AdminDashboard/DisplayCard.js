import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import './DisplayCard.css'
import { Link } from 'react-router-dom';
export default function MultiActionAreaCard(title) {
   
  return (
    <Link to={{pathname: `/add${title.title.name}`}} style={{textDecoration: 'none'}}>  
    <Card sx={{ maxWidth: 345 }} className='cardRoot'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={title.title.image}
          alt="green iguana"
        />
        <CardContent style={{backgroundColor: '#1d1a27'}}>
          <Typography gutterBottom variant="h5" component="div" style={{color: 'white'}}>
            {title.title.name}
          </Typography>
         {}
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor: '#1d1a27'}}>
        <Link to={{pathname: `/add${title.title.name}`}}>  
        <button className='addButton'>
          Add
        </button>
        </Link>
      </CardActions>
    </Card>
    </Link>
  );
}
