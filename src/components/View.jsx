import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from './services/allAPI'


function View({uploadVideoServerResponse}) {

const [allvideos,setAllvideos] = useState([])


const[deleteVideo,setDeleteVideoStatus]=useState(false)
   const getAllUploadedVideos = async()=>{
      const {data} = await getAllVideos()
      console.log(data)
setAllvideos(data)
   }

   useEffect(()=>{
      getAllUploadedVideos()
      setDeleteVideoStatus(false)
   },[uploadVideoServerResponse,deleteVideo])

   console.log(allvideos)
  return (
    <>
    <Row>

      {  allvideos.length>0?

      allvideos.map((videos)=>(

         <Col sm={12} md={6} lg={4} xl={3} >
         <VideoCard displayData={videos} setDeleteVideoStatus={setDeleteVideoStatus} />
      </Col>

      )): <p className='fw-bolder0'>nothing to display </p>




      }


    </Row>


    </>
  )
}

export default View