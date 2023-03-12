import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Base from '../Base/Base'

export function AddStudent({employeesData,setEmployees}) {
   const history=useHistory();

   useEffect(()=>{
    if(!localStorage.getItem("user-name"))
    history.replace("/login")
    },[])
  
   
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [gender, setGender] = useState("");
    const [Experiences, setExperience] = useState("");
   
   
    
    const addNewEmployee = async (event) => {
event.preventDefault();
      try {
        const newEmployee = {
          name,
          batch,
          gender,
          yearsOfExperience: Experiences,
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
       
        setName("");
        setBatch("");
        setGender("");
        setExperience("");
        history.push("/user")
        
      } catch (error) {
        console.log("error occured")
      }
        
      };
  
    
  
  return (
<div>

   <Base>
  <h1 className='head'>you can add a student</h1>
     <div className="input-div">
     
           
  
        <TextField
         required
          id="outlined-required"
          label="Enter your name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          value={name}
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
          value={Experiences}
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