import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function LandingPage() {

const navigateByUrl=useNavigate()

  return (
<>
<Row className='mt-5 align-items-center justify-content-between w-100'>
  <Col></Col>
  <Col lg={5} style={{paddingTop:"50px"}}>
    <h1 style={{textAlign:'justify'}}>Welcome To <span className='text-warning'>Media Player</span> </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius natus, porro rem commodi ducimus odit unde, perferendis eaque facere praesentium vero cum quaerat nihil assumenda in. Quos, dolorum modi!</p>
    <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
  </Col>
  <Col lg={5}>
  <img src="https://i.gifer.com/origin/6d/6db3d77d8ff976feb206d7e7c64572a6_w200.gif" width={400} alt="" />
  </Col>
  <Col></Col>

  </Row>



    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
  <h3>Features</h3>

    <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/0b/1a/68/0b1a68bbaf8950968b193f3e00faf676.gif " />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-5 bg-info' style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://i.gifer.com/Up2T.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

</div>

<div className='container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100'>
  <div className='col-lg-5'>
    <h3 className='mb-3 text-warning'>Simple,Powerful & Fast</h3>
    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

  </div>

  <div className='video col-lg-5'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9uHWPY1ksNs?si=gqD-aaDGNXFkbyu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </div>

</div>

</>  ) 
}

export default LandingPage