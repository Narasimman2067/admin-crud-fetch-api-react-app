import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AddStudent from "./Components/AddStudent";
import AuthPage from "./Components/AuthPage";
import DashBoard from "./Components/DashBoard";
import EditStudent from "./Components/EditStudent";
import EmployeesProfile from "./Components/EmployeesProfile";
import NoPage from "./Components/NoPage";
import { EmployeeDetails } from "./Components/User";
import { WelcomePage } from "./Components/WelcomePage";
import "./Style.css";

function App() {
  const [employeesData, setEmployees] = useState([]);
  // mounting phase of useEffect
  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await fetch(
          "https://backend-demo-in-class.vercel.app/students",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);
        setEmployees(data.data);
      } catch (error) {
        console.log("error occured");
      }
    };
    getEmployees();
  }, []);
  // mounting phase of useEffect

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/dashboard">
          <DashBoard />
        </Route>

        {/* to view all student details */}

        <Route path="/user">
          <EmployeeDetails
            employeesData={employeesData}
            setEmployees={setEmployees}
          />
        </Route>

        <Route path="/details">
          <Redirect to="/user" />
          <EmployeeDetails />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>

        <Route path="/addstudents">
          <AddStudent
            employeesData={employeesData}
            setEmployees={setEmployees}
          />
        </Route>

        <Route path="/edit/:id">
          <EditStudent
            employeesData={employeesData}
            setEmployees={setEmployees}
          />
        </Route>
        <Route path="/employee/:id">
          <EmployeesProfile employeesData={employeesData} />
        </Route>

        {/* this is end page😍 */}

        <Route path="**">
          <NoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
