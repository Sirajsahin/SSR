import React, { useState,useEffect } from "react";
//component
//css
import Box from "@mui/material/Box";
// import './style.css'




const Banner=({doc})=>{

  
 

  return (
       <>
       <Box sx={{ padding:{xs:'0rem 0 2rem 0',sm:'1rem 4rem'}, marginTop:'2rem'}} >
     

        <Box className="doctor-part">
           {
            doc.map((value,id)=>{
                return  <Box className="doctor" key={id}>
                         <Box className="doctorCard">
                             <Box className="doctorProfile">
                              <img src={value.image} alt={value.img_alt} style={{borderRadius:'50%'}} />
                             </Box>
                             <h1 className="doctorName">{value.name}  </h1>
                             <p className="experiece">{value.exprence}</p>
                             <p className="experiece">{value.expert}</p>
                           </Box>
                          <Box sx={{marginTop:'1rem'}}> 
                          
                           </Box>
                        </Box>
            })
           }
           
        </Box>  
 
    </Box>
    </>
  );
}

export default Banner

// import React from 'react';
//  const Banner=({doc})=>{
//     return doc.map(value => (
//       <div className="col s12 m6 l6 xl4" key={value.title}>
//                 <div className="doctorCard">
//                    <div className="doctorProfile">
//                           <img src={value.image} alt={value.img_alt} />
//                              </div>
//                              <h4 className="doctorName">{value.name}  </h4>
//                              <p className="experiece">{value.exprence}</p>
//                              <p className="experiece">{value.expert}</p>
//                            </div>
//       </div>
//     ));
//   };

//   export default Banner



// import React from 'react';
// //component
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
// import PreloadImage from 'react-preload-image';
// //css
// import { Box} from "@mui/material";
// import './home.css'

// const Banner=({data,mobiledata})=>{
//   return (
//  <>
//  <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' },  }} >
//    <Carousel >
//      {
//        data.map((value,id)=>{
//            return <Carousel.Item interval={2000} sx={{ width: '5%!important' }} className="Bannercomponent"  key={id}>
//                    <PreloadImage
//                        className="banner-image"
//                        src={value.image}
//                        alt={value.img_alt}
//                        lazy
//                        />
                    
//                </Carousel.Item>
//           })
//         }
  
//    </Carousel>
//    </Box>
//    <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, margin: '0', }}>
//    <Carousel >
//      {
//        mobiledata.map((value,id)=>{
//            return <Carousel.Item interval={2000} sx={{ width: '5%!important' }} className="Bannercomponent"  key={id}>
//                       <PreloadImage
//                        className="banner-image"
//                        src={value.image}
//                        alt={value.img_alt}
//                        />
                   
//                </Carousel.Item>
//           })
//         }
  
//    </Carousel>
//    </Box>
//  </>
// )
// }

// export default Banner;


