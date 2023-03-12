import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Base from '../Base/Base'

export function AddStudent({employeesData,setEmployees}) {
   const history=useHistory();

   useEffect(()=>{
    if(!localStorage.getItem("user-"))
    history.replace("/login")
    },[])
  
   
    const [product_name, setProductName] = useState("");
    const [product_price, setProductPrice] = useState("");
    const [product_material, setProductMaterial] = useState("");
    const [product_color, setProductColor] = useState("");
   
   
    
    const addNewEmployee = async (event) => {
event.preventDefault();
      try {
        const newEmployee = {
          product_name,
          product_price,
          product_material,
          product_color,
        };
// after we create the new data use fetch function here
const response=await fetch("https://63ae58f1ceaabafcf177e2a6.mockapi.io/data",
{
  method:"POST",
  body:JSON.stringify(newEmployee),
  headers:{
  "Content-Type":"application/json"
},

});
const data = await response.json();
console.log(data);
 // using spread operator to divide each by each element
        setEmployees([...employeesData, data]);
        // after add function done  immediately it refresh the input field
       
        setProductName("");
        setProductPrice("");
        setProductMaterial("");
        setProductColor("");
        history.push("/user")
        
      } catch (error) {
        console.log("error occured")
      }
        
      };
  
    
  
  return (
<div>

   <Base>
  <h1 class='head'>you can add a student</h1>
     <div class="input-div">
     
           
  
        <TextField
         required
          id="outlined-required"
          label="Enter your "
          variant="outlined"
          onChange={(event) => setProductName(event.target.value)}
          value={product_name}
        />
        <TextField
         required
          id="outlined-basic"
          label="Enter your product_price"
          variant="outlined"
          onChange={(event) => setProductPrice(event.target.value)}
          value={product_price}
        />
        <TextField
          required="text"
          id="outlined-basic"
          label="Enter your product_material"
          variant="outlined"
          onChange={(event) => setProductMaterial(event.target.value)}
          value={product_material}
        />
        <TextField
        required={Number}
          id="outlined-basic"
          label="Enter your "
          variant="outlined"
          onChange={(event) => setProductColor(event.target.value)}
          value={product_color}
        />
      </div>
        <Button
            size="small"
            variant="contained"
            color="primary"
           onClick={addNewEmployee}
          >
            Add data
          </Button>
        </Base>
      </div>
  )
}

export default AddStudent