import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/AddStudent';
import AuthPage from './Components/AuthPage';
import DashBoard from './Components/DashBoard';
import EditStudent from './Components/EditStudent';
import EmployeesProfile from './Components/EmployeesProfile';
import NoPage from './Components/NoPage';
import { EmployeeDetails } from './Components/User';
import { WelcomePage } from './Components/WelcomePage';


import "./Style.css"
import AddTeachers from './Teachers/AddTeachers';
import AuthPageTeachers from './Teachers/AuthPageTeachers';
import EditTeachers from './Teachers/EditTeachers';
import { TeachersProfile } from './Teachers/TeachersProfile';
import UserDetails from './Teachers/UserDetails';


function App() {


  const [employeesData,setEmployees]=useState([]);                    
  const [TeachersProfileData,setTeachersProfile]=useState([])
   // mounting phase of useEffect 
   useEffect(()=>{
    const getEmployees = async ()=>{
      try{
        // initially the server connected with mock api
    // const response =await fetch("https://63ae58f1ceaabafcf177e2a6.mockapi.io/data",
    // now this server connected with backend mongo server
    const response =await fetch("http://localhost:9000/students",
    {
      method:"GET"
    });
    const data = await response.json();
    console.log(data)
    setEmployees(data)
  }catch (error){
    console.log("error occured")
  }

      
    }
    getEmployees();
      },[]);
       // mounting phase of useEffect 
   useEffect(()=>{
    const getTeachers = async ()=>{
      try{
    const response =await fetch("https://63ae58f1ceaabafcf177e2a6.mockapi.io/teacherdata",
    {
      method:"GET"
    });
    const ProfileData =await response.json();
    console.log(ProfileData)
    setTeachersProfile(ProfileData)
  }catch (error){
    console.log("error occured")
  }

      
    }
    getTeachers();
      },[]);
  return (
    <div className="App">
      

     
<Switch>
<Route exact path="/">
 
 <WelcomePage/>
 </Route>


 
 <Route path="/dashboard">
   <DashBoard/>
 
 </Route>

 {/* to view all student details */}


 <Route path="/user">
  
  <EmployeeDetails 
  employeesData={employeesData} 
  setEmployees={setEmployees}/>
 
 </Route>
  
 <Route path="/details">
  <Redirect to="/user"/>
  <EmployeeDetails/>
 
 </Route>
 <Route path="/login">
  <AuthPage/>
  
 
 </Route>

 <Route path="/addstudents">
  <AddStudent
   employeesData={employeesData} 
   setEmployees={setEmployees}
  />
 </Route>

 <Route path="/edit/:id/:employeeid">
  <EditStudent
   employeesData={employeesData} 
   setEmployees={setEmployees}
  />
 </Route>
 <Route path="/employee/:id">
  <EmployeesProfile employeesData= {employeesData}/>

 </Route>

 {/* to view teachers data */}

 <Route path="/teacherslogin">
 <AuthPageTeachers/>
 
 </Route>



 <Route path="/view">
  <UserDetails
  TeachersProfileData={TeachersProfileData} 
  setTeachersProfile={setTeachersProfile}
  />
</Route>

 <Route path="/updateteachers">
  <AddTeachers
  TeachersProfileData={TeachersProfileData} 
  setTeachersProfile={setTeachersProfile}
  />
 </Route>

 <Route path="/update/:id/:teachersid">
  <EditTeachers
 TeachersProfileData={TeachersProfileData} 
 setTeachersProfile={setTeachersProfile}
  />
 </Route>
 
 <Route path="/teachers/:id">
  <TeachersProfile TeachersProfileData= {TeachersProfileData}/>

 </Route>
 

{/* this is end page😍 */}

 <Route path="**">
  
   <NoPage/>
   
  </Route>
 

</Switch>

 </div>
  );
}

export default App;
