import React from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartWidget = () => {
  return (
    <IconButton 
        size="large" 
        aria-label="show 4 new mails" 
        color="inherit">
            <Badge badgeContent={4} color="error">
                <ShoppingCartCheckoutIcon/>
            </Badge>
    </IconButton>
  )
}

export default CartWidget