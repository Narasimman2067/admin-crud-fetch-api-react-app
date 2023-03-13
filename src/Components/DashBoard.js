import React from "react";

import { Button } from "@mui/material";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

function DashBoard() {
  const history = useHistory("");
  return (
    <Base
      heading="Welcome to the Dashboard"
      description=" please click below the link to the home"
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => history.push("/")}
      >
        Home
      </Button>
    </Base>
  );
}

export default DashBoard;
