import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import './CardProduct.css'



const CardProduct = ( { itemData }) => {
  
 
    return ( 
       
       <Card sx={{ maxWidth: 320, m: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"          
          image={itemData.img}
          alt="image product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemData.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {itemData.precio} | stock: {itemData.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
      );
}

export default CardProduct







