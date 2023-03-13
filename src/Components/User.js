    import React, { useEffect, useState } from "react";

    import {
    Button,
    Card,
    CardActions,
    CardContent,
   
    Typography,
    } from "@mui/material";
    import Base from "../Base/Base";
    import { useHistory } from "react-router-dom";


    export function EmployeeDetails({employeesData,setEmployees}) {
    // implement of the data
    const history=useHistory();
    // this is the url where we went to sign in only 
    // if the password and login name correct otherwise 
    // it replace to register
    useEffect(()=>{
    if(!localStorage.getItem("user-name"))
    history.replace("/login")
    },[])

    // const [editId, setEditId] = useState("");
    // const [id, setId] = useState("");
    // const [Name, setName] = useState("");
    // const [Batch, setBatch] = useState("");
    // const [Gender, setGender] = useState("");
    // const [Experiences, setExperience] = useState("");

    // const [showAdd, setShowAdd] = useState(true);
    // const [showUpdate, setShowUpdate] = useState(false);

    // const addNewEmployee = () => {
    //   const newEmployee = {
    //     id,
    //     Name,
    //     Batch,
    //     Gender,
    //     yearsOfExperience: Experiences,
    //   };
    //   // using spread operator to divide each by each element
    //   setEmployees([...employeesData, newEmployee]);
    //   // after add function done  immediately it refresh the input field
    //   setId("");
    //   setName("");
    //   setBatch("");
    //   setGender("");
    //   setExperience("");
    // };

    // delete a data

    const deleteEmployeesData = async (employeeID) => {


    try {
    const response=await fetch(`https://backend-demo-in-class.vercel.app/students/${employeeID}`
    ,{method:"Delete",}
    // for this there is no need of headers and body fot Delete and GEt method
    )
    const data =await response.json();
    console.log(data);
    const removedEmployee = employeesData.filter(
    (employee) => employee.id !== employeeID
    );
    setEmployees(removedEmployee);

    } catch (error) {
    console.log("Error occured");
    }



    };

    // update the form

    // const editandSelectEmployee = (employeeID) => {

    //   setShowAdd(false);
    //   setShowUpdate(true)

    //   setEditId(employeeID);
    //   const selectedData = employeesData.find(
    //     (employee) => employee.id === employeeID
    //   );
    //   setId(selectedData.id);
    //   setName(selectedData.Name);
    //   setBatch(selectedData.Batch);
    //   setGender(selectedData.Gender);
    //   setExperience(selectedData.yearsOfExperience);
    // };

    // const updateEmployeesData = () => {
    //   // select and find the employee

    //   const editEmployeeindex = employeesData.findIndex(
    //     (employee) => employee.id === editId
    //   );
    //   // we need the updated object

    //   const updatedEmployeeObj = {
    //     id,
    //     Name,
    //     Batch,
    //     Gender,
    //     yearsOfExperience: Experiences,
    //   };

    //   // change the selected specific array of data
    //   employeesData[editEmployeeindex] = updatedEmployeeObj;

    //   // set the employee data
    //   setEmployees([...employeesData]);
    //   setId("");
    //   setName("");
    //   setBatch("");
    //   setGender("");
    //   setExperience("");
    //   setShowAdd(true);
    //   setShowUpdate(false)
    // };

    return (
    <div>
    <Base>
    <div className="adddata">
    <Button 
    onClick={()=>history.push("/addstudents")} 
    variant="contained"
    color="secondary"
    >Add Data</Button>
    </div>
    <h1 className="head-div">
    All students Details</h1>
    {/* <Base
    heading="batch Details"
    description="all user details"
    ></Base> */}
    {/* <div className="input-div">
    <TextField
    required
    id="outlined-basic"
    label="Enter your id"
    variant="outlined"
    onChange={(event) => setId(event.target.value)}
    value={id}
    />


    <TextField
    required
    id="outlined-required"
    label="Enter your name"
    variant="outlined"
    onChange={(event) => setName(event.target.value)}
    value={Name}
    />
    <TextField
    required
    id="outlined-basic"
    label="Enter your batch"
    variant="outlined"
    onChange={(event) => setBatch(event.target.value)}
    value={Batch}
    />
    <TextField
    required="text"
    id="outlined-basic"
    label="Enter your gender"
    variant="outlined"
    onChange={(event) => setGender(event.target.value)}
    value={Gender}
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

    <div className="btn">
    {showAdd ? 
    <Button
    size="small"
    variant="contained"
    color="primary"
    onClick={addNewEmployee}
    >
    Add data
    </Button>
    : "" }

    { showUpdate ?
    <Button
    size="small"
    variant="contained"
    color="secondary"
    onClick={updateEmployeesData}
    >
    update data
    </Button>
    :""}
    </div> */}

    <div className="main-card">
    {employeesData.map((employee, id) => (
    <div className="card-div" >
    <Card 
    key={employee.id}>
    <CardContent className="content-div">
    <Typography gutterBottom variant="h5" component="div">
    Name:{employee.product_name}
    </Typography>
    {/* <Typography variant="body2" color="text.secondary">
    batch :{employee.Batch}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    gender:{employee.Gender}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    experience:{employee.yearsOfExperience}
    </Typography> */}
    </CardContent>
    <CardActions className="btn-div">

    {/*               
    <Button
    onClick={() =>history.push(`/edit/${id}/${employee.id}`)}
    size="small"
    variant="contained"
    color="primary"
    >
    edit
    </Button> */}


    <Button
    onClick={() =>history.push(`/edit/${id}`)}
    size="small"
    variant="contained"
    color="primary"
    >
    edit
    </Button> 




    <Button

    onClick={() => deleteEmployeesData(employee.id)}
    size="small"
    variant="contained"
    color="error"
    >
    delete
    </Button>
    <Button

    onClick={() =>history.push(`/employee/${id}`)}
    size="small"
    variant="contained"
    color="secondary"
    >
    viewoptions
    </Button>

    </CardActions>
    </Card>
    </div>
    ))}
    </div>
    <div>
    <footer className='footer-div'>
    <p>
    😍Thank you to visit this page😍

    </p>

    </footer>
    </div>
    </Base>
    </div>
    );
    }
