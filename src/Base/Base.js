import { AppBar, Button, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import React from "react";


function Base({ heading, description, children }) {
  // to navigate the buttons use the use hstory method
  const history = useHistory();
  const logoutMethod =()=>{
    localStorage.removeItem("user-name")
    history.push("/")
  }
  return (
    <div>
    

      <AppBar position="static" className="toolbtn">
        <Toolbar variant="dense">

          <Button color="inherit" 
          onClick={() => history.push("/")}>
            <button className="btn-basic"><h1>🏠</h1></button>
            
            <span>Home</span>
          </Button>
          <Button color="inherit" 
          onClick={() => history.push("/dashboard")}>
            <button className="btn-basic"><h1>🕎</h1></button>
           
            <span>About</span>
          </Button>

          
        
          

          {/* this button for student */}

          <Button color="inherit" 
          onClick={() => history.push("/login")}>
            <button className="btn-basic"><h1>🔐</h1></button>
            
            <span>Login</span>
          </Button>

          <Button color="inherit" 
          onClick={() => history.push("/user")}>
           
            <button className="btn-basic"
            onClick={() => history.push("/user")}
            >
             <h1>😎</h1> 
              </button>
            <span> User</span>
          </Button>
 {/*add teachers data in this button  */}
 <Button color="inherit" 
          onClick={() => history.push("/view")}>
             <button className="btn-basic"><h1>🧑‍🏫</h1></button>
           
            <span> UserDetails</span>
            
          </Button>
         
          <Button color="inherit" 
          onClick={logoutMethod}>
            <button className="btn-basic"><h1>🔑</h1></button>
            
            <span>Log out</span>
          </Button>


          
        </Toolbar>
      </AppBar>

      <div className="main-cpmponent">

        <header className="head-div">
          <h1>{heading}</h1>
        </header>
        <main>
          <h2 className="description-div">{description}</h2>
          <div className="children-segment">{children}</div>
        </main>
      </div>
    </div>
  );
}
export default Base;