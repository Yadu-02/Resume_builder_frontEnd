import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaFileDownload, FaHistory } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Edit from './Edit';


function Preview(userInput ) {

  console.log(userInput);
  return (
    <div>
      {userInput.personalDetails.name!=""&&<div className="flex-column " style={{marginTop:'100px'}}>
        <div className='d-flex justify-content-end align-items-center'>
          {/* download */}
          <button className='btn fs-3 text-primary'><FaFileDownload/></button>
          {/* edit */}
          <div><Edit /></div>
          {/* history */ }
          <Link to= {'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
          {/* back */ }
          <Link to= {'/resume-generator'} className='btn text-primary'>Back</Link>
        </div>
        <Box>
          <Paper elevation={5} id='result' className='p-5 '>
            <Typography variant="h4" align='center' component="h2" >
              <h3 className='fw-bolder'>Name:{userInput.personalDetails.name}</h3>
            </Typography>
            <Typography variant="subtitle1" align='center' component="h2">
              <p>Job TItle:{userInput.personalDetails.jobTitle}</p>
            </Typography>
            <Typography variant="body2" align='center' component="h2">
              {userInput.personalDetails.location}|{userInput.personalDetails.email}|{userInput.personalDetails.phone}
            </Typography>
            <Typography variant="body2" align='center' component="h2">
              <Link href="{userInput.personalDetails.gitHub}" target="_blank">GitHub</Link>
              <Link href="{userInput.personalDetails.linkedIn}" target="_blank">LinkedIn</Link>
              <Link href="{userInput.personalDetails.portfolio}" target="_blank">Portfolio</Link>
            </Typography>
            <Divider>Summary</Divider>
            <div>
              <p>{userInput.summary}</p>
            </div>
            <Divider>Summary</Divider>
            <Typography variant="h5" align='center' component="h2">
              <h6 className='fw-bolder'>Experience</h6>
              <p><span>college</span></p>
            </Typography>
            <Divider>Education</Divider>
            <Typography variant="h5" align='center' component="h2"  >
              <p className='fs-6'><span>{userInput.educationalDetails.colleg}</span>||<span>{userInput.educatonalDetails.university}</span>||<p>{userInput.educationalDetails.course}</p></p>
            </Typography>
            <Divider>Professional Experience</Divider>
            <Typography variant="h5" align='center' component="h2">
              <p className='fs-6'><span>college</span></p>
            </Typography>
            <Divider>Skills</Divider>

            <Stack spacing={2} direction='row' sx={{flexWrap:'wrap',gap:'10px' ,padding:'10px'}}>
              {userInput.skills.map(skill=> <Button variant='contained'> {skill}</Button>)}
            </Stack>





          </Paper>
        </Box>

      </div>}
    </div>
  )
}

export default Preview