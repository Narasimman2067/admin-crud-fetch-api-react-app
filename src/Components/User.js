import React, { useEffect} from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

export function EmployeeDetails({ employeesData, setEmployees }) {
  // implement of the data
  const history = useHistory();
  // this is the url where we went to sign in only
  // if the password and login name correct otherwise
  // it replace to register
  useEffect(() => {
    if (!localStorage.getItem("user-name")) history.replace("/login");
  }, []);



  const deleteEmployeesData = async (employeeID) => {
    try {
      const response = await fetch(
        `https://backend-demo-in-class.vercel.app/students/${employeeID}`,
        { method: "Delete" }
        // for this there is no need of headers and body fot Delete and GEt method
      );
      const data = await response.json();
      console.log(data);
      const removedEmployee = employeesData.filter(
        (employee) => employee.id !== employeeID
      );
      setEmployees(removedEmployee);
    } catch (error) {
      console.log("Error occured");
    }
  };



  return (
    <div>
      <Base>
        <div className="adddata">
          <Button
            onClick={() => history.push("/addstudents")}
            variant="contained"
            color="secondary"
          >
            Add Data
          </Button>
        </div>
        <h1 className="head-div">All students Details</h1>
        

        <div className="main-card">
          {employeesData.map((employee, id) => (
            <div className="card-div">
              <Card key={employee.id}>
                <CardContent className="content-div">
                  <Typography gutterBottom variant="h5" component="div">
                    Name:{employee.product_name}
                  </Typography>
                  
                </CardContent>
                <CardActions className="btn-div">
                 

                  <Button
                    onClick={() => history.push(`/edit/${id}`)}
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
                    onClick={() => history.push(`/employee/${id}`)}
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
          <footer className="footer-div">
            <p>😍Thank you to visit this page😍</p>
          </footer>
        </div>
      </Base>
    </div>
  );
}
