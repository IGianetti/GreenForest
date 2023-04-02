import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import './CardProduct.css'



const CardProduct = ({ data }) => {
  
 
    return ( 
       
       <Card >
      <CardActionArea>
        <CardMedia
          component="img"          
          image={`${data.avatar_url}`}
          alt="image product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.login}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.html_url}
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>
  
      );
}

export default CardProduct







