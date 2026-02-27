import { Box, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'


function History() {

  // const getHistory=async()=>{



    
  // }

  // const handleDelete=async(id)=>{
  //   try{
  //     const result=await deleteDownloadHistoryAPI(id)
  //     console.log(result);
  //     getHistory()
      
  //   }
  //   catch(err){
  //     console.log(err);
      
  //   }
  // }
  // useEffect(()=>{
  //   getHistory()
  // },[])
  // console.log(history);
  
  // }
  // return (
  //   <div>
  //     <div>
  //       <h1 className="text-center mt-5">Downloaded Resume History</h1>

  //       <Link to={'/'} style={{ marginTop: '-50px' }} className="float-end me-5">
  //         BACK
  //       </Link>

  //       <Box component="section" className="container-fluid">
  //         <div className='row'>
  //          {history?.length>0?history.map((item,index)=>( <div className='col-md-4'>
  //             <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
  //               <div className='d-flex align-items-center justify-content-evenly'>
  //                 <h6>
  //                   Review At: <br /> timeStamp
  //                 </h6>

  //                 <button onClick={()=>handleDelete(item.id)} className='btn text-danger fs-4 ms-5'>
  //                   <MdDelete />
  //                 </button>
  //               </div>

  //               <div className='border rounded p-3'>
  //                 <img className='img-fluid' src='' alt='resume' />
  //               </div>
  //             </Paper>


  //           </div>)):<p>Nothing to display</p>}
  //         </div>
  //       </Box>
  //     </div>
  //   </div>
  // )
}

export default History