import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base'

export function EmployeesProfile ({employeesData}){
  // const history=useHistory();
  const {id}=useParams();
  const employee=employeesData[id]

  // useEffect(()=>{
  //   if(!localStorage.getItem("user-name"))
  //   history.replace("/login")
  //   },[])
  
  return (
   <Base
   heading="product profile"
   description="individual product details"
   >
    <div className='profile-div'>
    <h2>Employee-Profile</h2>
    <p>Employee Name:{employee.product_name}</p>
    <p>Batch:{employee.product_price} </p>
    <p>Gender:{employee.product_material}</p>
    <p>yearsOfExperience:{employee.product_color}</p>
   </div>
   </Base>
  
  )
}

export default EmployeesProfile;