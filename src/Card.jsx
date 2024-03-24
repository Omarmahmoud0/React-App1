import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const  Card =() =>{
  return (
      <div className='Title card2'>
       <MDBCard className='card' >
      <MDBRow className='g-0'>
      <MDBCol md='6' className='text'>
          <MDBCardBody>
            <MDBCardTitle>Chevrolet Camaro ZL1</MDBCardTitle>
            <MDBCardText>
              <p><span>HIGHS</span> :Beautiful way to burn gasoline, street legal race car, plenty of performance for the money.</p>
                <p><span>LOWS</span> :Lacks outward visibility, 1LE suspension may require the use of a mouthguard, Chevy is killing one of its best ever.</p>
                <p><span>VERDICT</span> :The Camaro ZL-1 is an old-school muscle-car in a digital world, and it will be missed when it thunders into history at the end of this model year.</p>
              
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardImage className='card img' src={require("./images/maxresdefault.jpg")} alt='...' fluid />
        </MDBCol>
      </MDBRow>
      </MDBCard>
      </div>
   
  );
}
export default Card