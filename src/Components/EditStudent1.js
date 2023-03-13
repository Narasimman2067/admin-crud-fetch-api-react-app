import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base';

export const EditStudent = ({employeesData,setEmployees}) => {
  const history=useHistory();
  const {id} =useParams();
  
  const [editId, setEditId] = useState("");
 
  const [product_name, setProductName] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_material, setProductMaterial] = useState("");
  const [product_color, setProductColor] = useState("");
  const employee=employeesData[id]

 useEffect(()=>{
setEditId(employee.id);

 setProductName(employee.product_name);
 setProductPrice(employee.product_price);
 setProductMaterial(employee.product_material);
 setProductColor(employee.product_color)

 },[])
  

  const updateEmployeesData = async (event) => {
    // select and find the employee
event.preventDefault();
try {
  const updatedEmployeeObj = {
    
    product_name,
    product_price,
    product_material,
    product_color,
  };
  const response=await fetch (`http://localhost:9000/students/${editId}`,
  {
    method:"PUT",
    body:JSON.stringify(updatedEmployeeObj),
    headers:{
      "Content-Type":"application.json"
    }
  })
  const data =await response.json();
  console.log(data)
 
  const editTeachersProfileIndex = TeachersProfileData.findIndex(
    (employee) => employee.id === editId
  );
  employeesData[editEmployeeIndex] =updatedEmployeeObj;

  // set the employee data
  setEmployees([...employeesData]);
 
  setProductName("");
  setProductPrice("");
  setProductMaterial("");
  setProductColor("");
  history.push("/user")
} catch (error) {
  console.log("error occured while update")
}
   
   
   
  };
 
    return (
  //  <div>EditStudent{id} and employeeid {employeeid}</div>
  // )
  <Base>
  <h1 className='edit-div'>Edit products Profile</h1>
     <div className="input-div">
   
           
  
        <TextField
         required
          id="outlined-required"
          label="Enter your productname"
          variant="outlined"
          onChange={(event) => setProductName(event.target.value)}
          value={product_name}
        />
        <TextField
         required
          id="outlined-basic"
          label="Enter your batch"
          variant="outlined"
          onChange={(event) => setBatch(event.target.value)}
          value={batch}
        />
        <TextField
          required="text"
          id="outlined-basic"
          label="Enter your gender"
          variant="outlined"
          onChange={(event) => setGender(event.target.value)}
          value={gender}
        />
        <TextField
        required={Number}
          id="outlined-basic"
          label="Enter your experiences"
          variant="outlined"
          onChange={(event) => setExperience(event.target.value)}
          value={experiences}
        />
      </div>
      <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={ updateTeachersProfileData}
          >
            update data
          </Button>
     

       
         
   </Base>
    )
}

export default EditTeachers;