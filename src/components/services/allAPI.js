const { commonAPI } = require("./commonAPI");
const { serverUrl } = require("./serverUrl");

//upload video

export const uploadVideo =async (reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json server return response to the add componrnt

    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}

//get all videos from json

export const getAllVideos =async ()=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the view componrnt

    return await commonAPI("GET",`${serverUrl}/videos`,"")
}

//get a video

export const getAVideo =async (id)=>{
    //make GET http request "http://localhost:4000/videos" to get all videos from the json server return response to the videocard componrnt

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

//delete a video

export const deleteVideo =async (id)=>{
    //make DELELTE http request "http://localhost:4000/videos" to delete  videos from the json server return response to the videocard componrnt

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}

//store watching video history to json server

export const addTohistory =async (videoDetails)=>{

    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
    // console.log("vid",);
}

export const getallhistory =async ()=>{

    return await commonAPI("GET",`${serverUrl}/history`,"")
}

// add to category
export const addToCategory = async (reqBody)=>{
    // make POST http request http://localhost:4000/category to store videos to 
    //the json server return response to the to the Category component
    return await commonAPI ("POST",`${serverUrl}/categories`,reqBody)
}

//get all  categories
export const getAllCategories=async()=>{
     // make GET http request http://localhost:4000/category to store videos to 
    //the json server return response to the to the Category component
    return await commonAPI ("GET",`${serverUrl}/categories`,"")
}
//delete all  categories
export const deleteCategories=async(id)=>{
    // make GET http request http://localhost:4000/category to delete videos to 
   //the json server return response to the to the Category component
   return await commonAPI ("DELETE",`${serverUrl}/categories/${id}`,{})
}

export const updateCategory =async (id,body)=>{
    //make DELELTE http request "http://localhost:4000/categories/id" to delete all videos from the 
    // json server return response to the category component

    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)

}

//delete all  Histories
export const deleteHistory=async(id)=>{
    // make GET http request http://localhost:4000/category to delete videos to 
   //the json server return response to the to the Category component
   return await commonAPI ("DELETE",`${serverUrl}/history/${id}`,{})
}
