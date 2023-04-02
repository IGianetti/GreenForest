
import React from 'react'
import { Box, Button } from '@mui/material'
import './LoginButton.css'


const LoginButton = () => {
  return (
      <Box >
        <Button sx={{marginLeft:"auto", color: 'antiquewhite', textTransform: 'capitalize'}} variant="outlined">          
          <span>Ingresar</span>
        </Button>    
      </Box> 
  )
}

export default LoginButton