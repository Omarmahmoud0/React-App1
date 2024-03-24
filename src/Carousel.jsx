import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import "./Title.css"
export default function Carousel() {
  return (
    <div style={{textAlign:"center",paddingTop:"45px"}}>
      <h1 style={{color:"lightgray"}}>Models</h1>
       <MDBCarousel style={{ contain:"",margin:"20px",marginTop:"20px"}} showControls interval={3000}>
      <MDBCarouselItem itemId={1} interval={3000}>
        <img style={{height:"500px",objectFit:"cover",borderRadius:"25px"}} src={require("./images/2012_chevrolet_camaro_zl1_4_1600x1200.jpg")} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img style={{height:"500px",objectFit:"cover",borderRadius:"25px"}}  src={require("./images/2018-chevrolet-camaro-coupe-front-seats-carbuzz-339956-1600.jpg")} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img style={{height:"500px",objectFit:"cover",borderRadius:"25px"}}  src={require("./images/129357_camara-interior-fuatures1.jpg")} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
   
  );
}