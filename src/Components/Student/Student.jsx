import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Student.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Student = (props) => {
    var [inputs,setInputs]=useState(props.data)
    const navigate=useNavigate();

    const readinputs = (event) =>{
        const{name,value}=event.target
        setInputs((inputs) => ({...inputs,[name]:value}))
        console.log(inputs)
    }
    
    const saveData =() =>{

      console.log("clicked")
      console.log(inputs)
      if(props.method==="post")
      {
        axios.post("http://localhost:3005/new",inputs)
        .then(( response)=>{
          
          alert("Record Saved") 
          navigate('/studentview');
        })
        .catch(err=>console.log(err))
      }
      if(props.method ==="put")
      {
        axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
        .then(( response)=>{
          alert("Record updated") 
          window.location.reload(false)
        })
        .catch(err=>console.log(err))
      }
    
     }

    const viewdata =() =>{
      navigate('/Studentview')
    }


  return (
    <div className='body' >
        <div >
     <h1>Student Details</h1>
     </div>
     Admin no.<br /><br />
     <TextField id="outlined-basic" name="admno" value={inputs.admno} onChange={readinputs} /><br />    <br />
     Name <br /><br />
      <TextField id="outlined-basic" name="sname" value={inputs.sname} onChange={readinputs}  /><br /><br />
     Age<br /><br />
     <TextField id="outlined-basic" name="age" value={inputs.age} onChange={readinputs} /><br /><br /><br />
     <Button variant="contained" onClick={saveData}>Save</Button>    
      <Button variant="contained" onClick={viewdata}>View</Button>

    

    </div>
  )
}

export default Student
