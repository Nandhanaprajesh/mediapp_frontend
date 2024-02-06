import React, { useEffect, useState } from 'react'
import { Button, Modal,Form, Row, Col } from 'react-bootstrap'
import { addToCategory, deleteCategories, getAVideo, getAllCategories, updateCategory } from './services/allAPI'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'





function Category() {
  const[categoryname,setCategoryname]=useState("")
  const[allCategories,setAllCategories]=useState("")

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleaddCategory= async()=>{

    if(categoryname){
      let body={categoryname,allVideos:[]}
    

    const response  = await addToCategory(body)
    console.log(response);
    if(response.status=200 && response.status<300){
      handleClose()

      setCategoryname()
    }else{
      toast.error('something went wrong')
    }
  }
    else{
toast.warning("provide category Name")
    }
  }
  const getCategories= async()=>{
    const {data} = await getAllCategories()
    setAllCategories(data);

  }
console.log(allCategories);
useEffect(()=>{
  getCategories()
},[])

const handleDelete=async(id)=>{
  await deleteCategories(id)
  getCategories()
}
const onDragOver=(e)=>{
  console.log("video drag over category");
  e.preventDefault()
 }
const videoDrop= async(e,categoryId)=>{
  console.log("video drop inside category id :"+categoryId);
  const videoId=e.dataTransfer.getData('videoid')
  console.log('video card id:',videoId);
//get video details
  const {data}=await getAVideo(videoId)
  console.log(data);
//get category details

const selectedcategory=allCategories?.find(items=>items.id===categoryId)
    selectedcategory.allVideos.push(data)
    console.log(selectedcategory);
  
  //make api call to get update category
  
  await updateCategory(categoryId,selectedcategory)
  getCategories()
  
  }

  return (
   <>

   <div className='d-grid ms-3'>
   <button type="button" class="btn btn-primary btn-sm" onClick={handleShow}>
            Add to Category
   </button>
   </div>
{
  allCategories?allCategories?.map(item=>(
    <div className='mt-5 mb-3 border rounded p-3' droppable onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
              <div className='d-flex justify-content-between align-items-center'>
              <h6>{item?.categoryName}</h6>
              <button className='btn' onClick={()=>handleDelete(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
              <Row>
      {
          item?.allVideos &&
          item?.allVideos.map(
            card=> (
              <Col sm={12}>
                <VideoCard displayData={card}/>
              </Col>
            )
          )
      }
</Row>

            </div>
          
          )):<p className='fw-bolder text-danger fs-5'>Nothing to Display</p>
  
}
   {/* modal */}

   <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>FILL THE FOLLOWING FIELDS</p>
          <Form>
            <Form.Label>Enter Video Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Video Name" onChange={(e)=>setCategoryname(e.target.value)} />
            <br />
           
         
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleaddCategory}>UPLOAD</Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default Category