import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material'

const CategoriesMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const styles = {
      popUpBtn: {
        textDecoration: "none",
        color: 'antiquewhite',
        fontSize: '1.2rem',
        textTransform: "none"
        
      }
    }


    return (
        <div>
          <Button
            style={styles.popUpBtn}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Categorias
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
                <Link style={{textDecoration: "none", color: 'black'}} to='/categories/arneses'>
                    Arneses
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link style={{textDecoration: "none", color: 'black'}} to='/categories/bastones'>
                    Bastones
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link style={{textDecoration: "none", color: 'black'}} to='/categories/calzado'>
                    Calzado
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link style={{textDecoration: "none", color: 'black'}} to='/categories/carpas'>
                    Carpas
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link style={{textDecoration: "none", color: 'black'}} to='/categories/indumentaria'>
                    Indumentaria
                </Link>
            </MenuItem>
            
          </Menu>
        </div>
      );

}

export default CategoriesMenu