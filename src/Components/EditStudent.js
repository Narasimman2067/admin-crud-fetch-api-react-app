import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base';

const EditStudent = ({employeesData,setEmployees}) => {
  const history=useHistory();
  
  const {id} = useParams();
  
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

 },[]);
  

  const updateEmployeesData = async () => {
    // select and find the employee
try {
   // we need the updated object

   const updatedEmployeeObj = {
    product_name,
    product_price,
    product_material,
    product_color,
    
  };

  const response=await fetch(`https://63ae58f1ceaabafcf177e2a6.mockapi.io/data/${editId}`,
{
  method:"PUT",
  body:JSON.stringify(updatedEmployeeObj),
  headers:{
    "content-type":"application.json",
  }

})
const data =await response.json()
console.log(data)
const editEmployeeindex = employeesData.findIndex(
  (employee) => employee.id === editId
);
// we need the updated object



// change the selected specific array of data
employeesData[editEmployeeindex] = updatedEmployeeObj;

// set the employee data
setEmployees([...employeesData]);

setProductName("");
setProductPrice("");
setProductMaterial("");
setProductColor("");
history.push("/user")

} catch (error) {
  console.log("error occured while rendering")
}



    
  };
 
    return (
  //  <div>EditStudent{id} and employeeid {employeeid}</div>
  // )
  <Base>
  <h1 classproduct_price='edit-div'>Edit and Update</h1>
     <div classproduct_price="input-div">
     
           
  
        <TextField
         required
          id="outlined-required"
          label="Enter your product_price"
          variant="outlined"
          onChange={(event) => setProductName(event.target.value)}
          value={product_price}
        />
        <TextField
         required
          id="outlined-basic"
          label="Enter your product_material"
          variant="outlined"
          onChange={(event) => setProductPrice(event.target.value)}
          value={product_price}
        />
        <TextField
          required="text"
          id="outlined-basic"
          label="Enter your ProductMaterial"
          variant="outlined"
          onChange={(event) => setProductMaterial(event.target.value)}
          value={product_material}
        />
        <TextField
        required={Number}
          id="outlined-basic"
          label="Enter your experiences"
          variant="outlined"
          onChange={(event) => setProductColor(event.target.value)}
          value={product_color}
        />
      </div>
      <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={updateEmployeesData}
          >
            update data
          </Button>
     

       
         
   </Base>
    )
}

export default EditStudent