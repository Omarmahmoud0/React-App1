import React from 'react';
import {
  MDBCard,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./Contect.css"
const Form = () => {
  return (
    <div >
      <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput className='message' wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />

      <MDBBtn type='submit' className='mb-4 MDBInput' block>
        Send Message
      </MDBBtn>
      </form>
    </div>
    
  );
}
export default function Contect() {
  return (
    <MDBCard background='dark' className='text-white'>
      <MDBCardImage style={{height:"600px"}} overlay src={require("./images/Chevrolet-Logo-3D.jpg")} alt='...' />
      <MDBCardOverlay>
        
        <MDBCardText >
          <Form/>
        </MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
}
