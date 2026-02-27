import { Button } from '@mui/material'
import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { LiaFileDownloadSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'



function Resume() {
  return (
    <div>
      <div className="row p-5 w-100 d-flex justify-content-center align-items-center gap-2">
        <h3 className=''>Create job winning resume in minutes</h3>
        <div className='col-4 border shadow p-5 text-center'>
          <FaFileAlt className='fs-1 my-3 text-primary'/>
          <h4>Add your information</h4>
          <p>Add prewritten examples to each section</p>
          <h5>step-1</h5>
        </div>
        <div className='col-4 border shadow p-5 text-center'>
          <LiaFileDownloadSolid className='fs-1 my-3 text-danger'/>
          <h4>Download your Resume</h4>
          <p>Download and start applying</p>
          <h5>step-2</h5>
        </div>
      </div>
      <Link to={'/form'}>
                    <Button variant="contained">Let's Start</Button>
      </Link>
    </div>
  )
}

export default Resume