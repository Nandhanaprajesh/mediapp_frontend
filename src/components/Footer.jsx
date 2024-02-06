import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';




function Footer() {
  return (
    <div>
       <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

      </section>

      <section className='foot'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='video player' className='me-3' />
                Video Player
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
              <Link to={'/'} style={{textDecoration:"none",color:'white'}} >
             <a style={{textDecoration:"none"}} href='' className='text-reset'>
                  Landing Page
                  
                </a>
                </Link>
              </p>
              <p>
              <Link to={'/home'} style={{textDecoration:"none",color:'white'}}>

                <a style={{textDecoration:"none"}} href='' className='text-reset'>
                  Home Page
                </a>
                </Link>
              </p>
              <p>
              <Link to={'/watchhistory'} style={{textDecoration:"none",color:'white'}}>

                <a style={{textDecoration:"none"}} href='' className='text-reset'>
                  Watch History
                </a>
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a style={{textDecoration:"none"}} href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a style={{textDecoration:"none"}} href='#!' className='text-reset'>
                React Bootstrap
                </a>
              </p>
              <p>
                <a style={{textDecoration:"none"}} href='#!' className='text-reset'>
                  Bootswatch
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>

              <div>
<div>
<MDBCol md='5' start>
       <MDBInput contrast type='email' label='Email address' className='mb-4' />
      </MDBCol>
<MDBCol size="auto">
        <MDBBtn style={{backgroundColor:"orange"}}  outline color='light' type='submit' className='mb-4'>
          Subscribe
        </MDBBtn>
      </MDBCol>
      </div>


      <a href='' className='me-4 text-reset'>
    <MDBIcon color='secondary' fab icon='instagram' />
  </a>

  <a href='' className='me-4 text-reset'>
    <MDBIcon color='secondary' fab icon='twitter' />
  </a>
  <a href='' className='me-4 text-reset'>
    <MDBIcon color='secondary' fab icon='linkedin' />
  </a>
  <a href='' className='me-4 text-reset'>
    <MDBIcon color='secondary' fab icon='facebook-f' />
  </a>

</div>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        Copyright © 2023 Media Player.  Built with React. 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer