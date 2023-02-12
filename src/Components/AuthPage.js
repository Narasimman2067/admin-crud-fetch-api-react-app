import { Button,FormControl, FormLabel, Input, Typography } from '@mui/material'
import React, {useState}from 'react'
import {  useHistory } from 'react-router-dom'
import Base from '../Base/Base'
import { authdata } from '../Data/authdata'

const AuthPage = () => {
  const[auth, setAuth] = useState(authdata); 
  const [loginName, setLogiName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const history  = useHistory()

  const loginUser = () =>{
    if(loginName === auth[0].name 
      && password === auth[0].password) {
      localStorage.setItem("user-name", loginName);
      setError(false)
      history.push("/user")
    } else {
      setError(true)
    }

  }

  return (
    <div>
    <Base>
   
  <h2 className='login'>Students Login Page😍</h2>
 <div className = "login-page">
     


          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="name@gmail.com"
              onChange= {(event)=>setLogiName(event.target.value)}
              value = {loginName}
            />
          </FormControl> {" "}
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange ={(event)=>setPassword(event.target.value)}
              value = {password}
            />
          </FormControl>

          <Button className='login' 
           sx={{ mt: 1 }}
           onClick= {loginUser}
          
           variant="contained"
                color="primary"

           >Log in
           </Button>
     {error ?   
      <Typography>
        Incorrect emailid or password
      </Typography>
   : ""}


    
      
  </div>
 </Base>
 <div className='id-pwd'>
  <h4>Email id:students</h4>
  <h4>password:pass</h4>
  </div>
  </div>
 

  )
}

export default AuthPage;


