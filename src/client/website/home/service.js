import React,{useState,useEffect} from 'react'
//component
//css
import { Typography } from '@mui/material'
import { Box} from '@mui/material'
import { styled } from '@mui/system';

export const Services = ({doc}) => {


  return (
    <>
      <div>
          <Box sx={{marginTop:{xs:'0rem',sm:'0rem'}, backgroundColor:'#00678a'}}>
             <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:{ sm:'row'}, flexWrap:'wrap',padding:{xs:'6px',sm:'0 2rem'}, gap:'1rem'}}>
               {doc.map((value,id)=>{
                  return  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', width:{xs:'45%',sm:'16%'},padding:{xs:'0.8rem',sm:'3rem'}}} key={id}>
                         <Box>
                         <img src={ value.image} className='imgBox' alt={value.img_alt}/>
                        </Box>
                        <Typography sx={{color:'white',fontSize: {xs:'18px',sm:'24px'}, fontWeight: '600',textAlign:'center',   padding:'3px 0px'}}>{value.title}</Typography>
                        <Typography sx={{color:'white', fontSize:{xs:'14px',sm:'18px'},  textAlign:'center'}}>{value.subTitle}</Typography>
                        </Box>
                      
                })}
            </Box>  
          </Box>
      </div>
    </>
  )
}

export default Services


