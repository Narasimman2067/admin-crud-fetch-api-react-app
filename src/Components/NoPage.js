import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base';


function NoPage () {
  const history =useHistory("")
  
  return (
  <div>
    <Base>
    <h1  className='head-div'>sorry you lost your way</h1> 
    <h3  className='description-div'>
      please click below link to  enter home page
   </h3>
    </Base>
   
     <Button
               size='large'
                variant="contained"
                color="primary"
                onClick={()=>history.push("/")}
              >
                Home
              </Button>
  </div>
    
  


   
  )
}

export default NoPage;
