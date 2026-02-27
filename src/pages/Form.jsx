import React, { useState } from 'react'
import Preview from '../Components/Preview'
import Steps from '../Components/Steps'




function Form() {

  const [userInput,setUserInput]=useState({
    personalDetails:{
      name:"",
      jobTitle:"",
      location:"",
      email:"",
      phone:"",
      gitHub:"",
      linkedIn:"",
      portfolio:""


    },
    educationDetails:{
      course:"",
      college:"",
      university:"",
      year:""
    },
    experience:{
      job:"",
      company:"",
      jobLocation:"",
      duration:""
    },
    skills:[],
    summary:""
  })

  const[resumeId,setResumeId]=useState()
  
  return (
    <div>
      <div className="row p-5" >
        <div className="row">
          <div  className="col-7 p-5 border border-2 ">
            
              <Steps userInput={userInput} setUserInput={setUserInput}/>
            
          </div>
          <div className="col-5">
            <Preview userInput={userInput} />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row p-5">

          <div className="col-6"></div>
        </div>
      </div>

    </div>
  )
}

export default Form