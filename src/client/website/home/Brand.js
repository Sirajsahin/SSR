import React from 'react'
//component
import { Box } from "@mui/material";
import { Typography } from '@mui/material'
//css


  const Brand = ({brand}) => {

   return (
    <>
     
    <Box className="BrandArea" >
       <Box  flexDirection='column' textAlign='center'>
         <h1 className='brandTag'>{brand.heading}</h1>
         <Typography color='whiteSmoke'variant='body2' sx={{  marginTop:'-8px',padding:{xs:'0 10px',sm:'0 0%'}, fontSize:{xs:'14px'}}}> {brand.headingspan}</Typography>

       </Box>
    </Box>
  </>
  )
}
export default Brand
