// import React, { lazy, Suspense } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { redirectUrl } from "./RedirectUrl";
// import COLORS from "./../../constants/colors";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
// const Map = lazy(() => import("./../../component/map"));

// const { DARK_BLUE } = COLORS;

const MobileView = styled("div")(({ theme, margintop }) => ({
  background: "#F5F7FB",
  padding: "2% 5%",
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    padding: "53px 10px 10px 10px",
    fontSize: "10px !important",
    paddingLeft: "0 !important",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: margintop || 0,
    padding: "2% 5%",
  },
}));

const BoxView = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    marginTop: 20,
  },
  [theme.breakpoints.up("sm")]: {
    margin: "20px 0px",
    justifyContent: "left",
  },
}));

const LinksView = styled(Typography)(({ theme, fontSize, links }) => ({

  fontSize: fontSize || 16,
  // color: "#030303",
  color:'white',
  [theme.breakpoints.down("sm")]: {
    fontWeight: links ? "normal" : "bold",
    fontSize: links ? 14 : 12,
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },
}));
const LinksViewS = styled(Typography)(({ theme, fontSize, links }) => ({
  fontFamily: "Work Sans, Bold",
  fontSize: fontSize || 16,
  color: "white",
  textAlign:'center',
  paddingTop:'1rem',
  // paddingBottom:'1rem',
  margin:'auto',
  opacity:'0.8',
  [theme.breakpoints.down("sm")]: {
    fontWeight: links ? "normal" : "bold",
    fontSize: links ? 14 : 12,
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },
}));

const HeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans, Medium",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 22,
    textAlign: "left",
  },
}));

const GridItemView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
  },
}));

const SubHeadingView = styled(Typography)(
  ({ theme, fontSize, opacity, margintop, footer }) => ({
    fontFamily: "Work Sans, Light",
    opacity: opacity && opacity,
    [theme.breakpoints.down("sm")]: {
      fontSize: footer ? 12 : 14,
      textAlign: "center",
      marginLeft:'1rem',
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: footer ? 14 : fontSize || 16,
      marginTop: margintop || 8,
    },
  })
);



const GridView = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const socialIcons = () => {
  return (
    <BoxView>
      <span>
        <a
          href="https://www.linkedin.com/company/veticin"
          target="_blank"
          rel="noreferrer"
        >
          <LazyLoadImage
            src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/icon_linkedin.webp'
            alt="linkedin"
            style={{ width: 24, height: 24 }}
          />
        </a>
      </span>
      <span>
        <a
          href="https://www.facebook.com/Vetic-104753575610805"
          target="_blank"
          rel="noreferrer"
        >
          <LazyLoadImage
            src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/icon_fb.webp'
            alt="facebook"
            marginLeft="12px"
            style={{ width: 24, height: 24, marginLeft: 12 }}
          />{" "}
        </a>
      </span>
      <span>
        <a
          href="https://www.youtube.com/channel/UCLtC83UXFX9_HZbBp6yeGtA"
          target="_blank"
          rel="noreferrer"
        >
          <LazyLoadImage
            src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/youtube-icon.webp'
            alt="youtube"
            marginLeft="12px"
            borderRadius="50%"
            style={{
              width: 24,
              height: 24,
              marginLeft: 10,
            }}
          />{" "}
        </a>
      </span>
      <a
        href="https://instagram.com/vetic.in?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <LazyLoadImage
            src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/icon_insta.webp    '
            alt="instagram"
            style={{ width: 24, height: 24, marginLeft: 12 }}
          />
        </span>{" "}
      </a>
    </BoxView>
  );
};

const Footer = ({ margintop }) => {
  const { pathname } = useLocation();
    const allpagePath = pathname==="/about-us"|| pathname ==="/online-veterinary-consultation"|pathname ==="/veterinary-clinic"|| pathname==="/our-services"|| pathname==="/preventive-care" || pathname==="/urgent-care" || pathname==="/privacy-policy" || pathname==="/terms-of-service" || pathname==="/page-not-found"|| pathname ==="/";
  
  const nearMe = [
    {
      name: "Veterinary Hospital Near Me",
      link: "/veterinary-hospital-near-me",
    },
    { name: "Pet Clinic Near Me", link: "/pet-clinic-near-me" },
    { name: "Vet Near Me", link: "/vet-near-me" },
    { name: "Vet Hospital Near Me", link: "/vet-hospital-near-me" },
    { name: "Pet Doctor Near Me", link: "/pet-doctor-near-me" },
    { name: "Dog Hospital Near Me", link: "/dog-hospital-near-me" },
    { name: "Dog Clinic Near Me", link: "/dog-clinic-near-me" },
    { name: "Veterinarian Near Me", link: "/veterinarian-near-me" },

  ];
   const nearMe2 = [
    { name: "Veterinary Clinic Near Me", link: "/veterinary-clinic-near-me" },
    { name: "Vet Doctor Near Me", link: "/vet-doctor-near-me" },
    { name: "Pet Hospital Near Me", link: "/pet-hospital-near-me" },
    { name: "Dog Food Near Me", link: "/dog-food-near-me" },
    { name: "Cat Food Near Me", link: "/cat-food-near-me" },
    { name: "Pet Food Near Me", link: "/pet-food-near-me" },
   ]

  const linksSecondSection = [
    { name: "Terms Of Service", link: "/terms-of-service" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Grooming", link: "/grooming" },
    { name: "Vaccination", link: "/vaccination" },
    { name: "Veterinary Consultation", link: "/veterinary-consultation" },
    { name: "Pet Surgery", link: "/pet-surgery" },
    { name: "Home Services", link: "/at-home-vet-services" },

   
  ];

  const linksFirstSection = [
    { name: "Home", link: "/" },
    { name: "Veterinary Clinic", link: "/veterinary-clinic" },
    { name: "Our Services", link: "/our-services" },
    { name: "Preventive Care", link: "/preventive-care" },
    { name: "Urgent Care", link: "/urgent-care" },
    {
      name: "Veterinary Consultation",
      link: "/online-veterinary-consultation",
    },
    { name: "About Us", link: "/about-us" }, 
    { name: "Careers", link: "/careers" },
   
  ];

  return (
    <>
    <MobileView margintop={margintop}>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={4}>
          {/* <HeadingView color={DARK_BLUE} sx={{ marginTop: "-1.3rem" }}> */}
          <HeadingView  sx={{ marginTop: "-1.3rem" }}>
            Join us
          </HeadingView>
          <SubHeadingView opacity=".6"  sx={{marginLeft:'0!important', textAlign:{xs:'center',sm:'left'}}}>
            Explore us on social media
          </SubHeadingView>
          {socialIcons()}
        </Grid>
       { allpagePath?<GridItemView item xs={12} sm={4}>
         {/* <HeadingView color={COLORS.DARK_BLUE} fontSize="30px"> */}
         <HeadingView  fontSize="30px">
            Address
          </HeadingView>
          <SubHeadingView opacity=".6">
          312 &amp; 313, Eros City Square, Rosewood City,
          </SubHeadingView>
          <SubHeadingView opacity=".6" margintop="0px">
          Sector 49, Gurgaon, 122001, Haryana.
          </SubHeadingView>
        <SubHeadingView fontSize="14px">+91 8929043121</SubHeadingView>
        <SubHeadingView opacity=".6">hello@vetic.in</SubHeadingView>
  </GridItemView>:
        <GridItemView item xs={12} sm={4}>
       
        {/* <HeadingView color={COLORS.DARK_BLUE} fontSize="30px"> */}
        <HeadingView  fontSize="30px">
            Address
          </HeadingView>
          <SubHeadingView opacity=".6">
            Plot No. 3507P, Block G, Near Boom Plaza,
          </SubHeadingView>
          <SubHeadingView opacity=".6" margintop="0px">
            Sector - 57, Gurugram, Haryana 122003.
          </SubHeadingView>
          <SubHeadingView opacity=".6" sx={{marginTop:'0.6rem'}}>
          1SP, Ground Floor, Golf Course Rd, Chakkarpur,
          </SubHeadingView>
          <SubHeadingView opacity=".6" margintop="0px">
          Sector 28, Gurugram, Haryana 122009.
          </SubHeadingView>
          
          <SubHeadingView fontSize="14px" sx={{marginTop:'0.6rem'}}>+91 8929009134</SubHeadingView>
          <SubHeadingView opacity=".6">hello@vetic.in</SubHeadingView>
        </GridItemView>
           }
        <GridItemView
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
        >
          <Suspense fallback={<div />}>
              {/* <Map />  */}
          </Suspense>
        </GridItemView>
      </Grid>
     
    
    </MobileView>
   <Box sx={{backgroundColor:'#013773', padding: {xs:'1rem',sm:'0 5rem'}}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Grid container>
            {[linksFirstSection, linksSecondSection, nearMe,nearMe2].map((links) => (
              <Grid item xs={6} sm={3} md={3}>
                {links.map(({ name, link }) => (
                  <div  key={link}>
                    {redirectUrl(
                      <LinksView links="true">
                        {" "}
                        <SubHeadingView opacity=".8" footer="true">
                          {name}
                        </SubHeadingView>
                      </LinksView>,
                      link,
                      true
                    )}
                  </div>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <GridView item xs={12} sm={12}>
          <LinksViewS fontSize="12px" >
            © 2022 - Petpai Technologies Pvt Ltd | All rights reserved
          </LinksViewS>
        </GridView>
      </Grid>
    </Box>
    </>
  );
};

export default Footer;
