import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
export default function MultiActionAreaCard(title) {
   
  return (
    <Link to={{pathname: `/${title.title.name}`}} style={{textDecoration: 'none'}}>
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
         
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor: '#1d1a27'}}>
        <button size="small"
         style={{
            color: '#13111a',
            padding: '5% 11%',
            border : '1px solid #13111a',
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: 'rgba(1045, 135, 100, 0.4) 0 8px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #935baf 0 -3px 0 inset',
         }}>
          View
        </button>
      </CardActions>
    </Card>
    </Link>
  );
}
