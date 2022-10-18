import React from 'react';
//component
// import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import PreloadImage from 'react-preload-image';
//css
import { Box} from "@mui/material";
// import './component.css'

const First=({})=>{
  return (
 <>
 <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' },  }} >
   <Carousel >
     {
       data.map((value,id)=>{
           return <Carousel.Item interval={2000} sx={{ width: '5%!important' }} className="Bannercomponent"  key={id}>
                   <img
                       className="banner-image"
                       src={value.image}
                       alt={value.img_alt}
                       lazy
                       />
                    
               </Carousel.Item>
          })
        }
  
   </Carousel>
   </Box>
   <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, margin: '0', }}>
   {/* <Carousel >
     {
       mobiledata.map((value,id)=>{
           return <Carousel.Item interval={2000} sx={{ width: '5%!important' }} className="Bannercomponent"  key={id}>
                      <PreloadImage
                       className="banner-image"
                       src={value.image}
                       alt={value.img_alt}
                       />
                   
               </Carousel.Item>
          })
        }
  
   </Carousel> */}
   </Box>
 </>
)
}

export default First;


const data=[
	{
		image:"https://vetic-img.s3.ap-south-1.amazonaws.com/website/Nearme/laptop_view/vetic_banner_nearme17.avif",
		img_alt:'one',
	},
	{
		image:'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/homebanner11.avif',
		img_alt:'two',
	},
	{
		image:"https://vetic-img.s3.ap-south-1.amazonaws.com/website/Nearme/laptop_view/vetic_banner_nearme14.avif",
		img_alt:'three',
	}
]