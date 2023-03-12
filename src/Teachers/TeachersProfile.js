import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base'


export function TeachersProfile ({TeachersProfileData}){
  const history=useHistory();
  const {id}=useParams();
  const teachers=TeachersProfileData[id]

  useEffect(()=>{
    if(!localStorage.getItem("userdetails-name"))
    history.replace("//teacherslogin")
    },[])
  
  return (
   <Base
   heading="Teachers profile"
   description="individual teachers details"
   >
    <div className='profile-div'>
    <h2>Teachers-Profile</h2>
    <p>Mentors Name:{teachers.name}</p>
    <p>Batch:{teachers.batch} </p>
    <p>Gender:{teachers.gender}</p>
    <p>yearsOfExperience:{teachers.experiences}</p>
   </div>
   </Base>
  
  )
}

