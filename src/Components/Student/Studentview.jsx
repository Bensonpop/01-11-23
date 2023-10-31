import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Student from './Student';

const Studentview = () => {
    var [students,setStudents] =useState([]);
    var [selected,setSelected]=useState()
    var [update,setUpdate]=useState(false)


    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then(response =>{
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
},[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.delete("http://localhost:3005/remove/"+id)
    .then((response)=>{
        alert("deleted")
        window.location.reload(false);
    })
}

const updatevalues =(value) =>{
    console.log("updated",value);
    setSelected(value);
    setUpdate(true);
}
var result=
<TableContainer>
<Table>
    <TableHead>
        <TableRow>
      
        <TableCell>Name</TableCell>
        <TableCell>Admission no</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Actions</TableCell>
        <TableCell>Actions</TableCell>
        </TableRow>
        
    </TableHead>
    <TableBody>
       {students.map((value,index)=>{
        return(
            <TableRow key={index}>
                <TableCell>{value.sname}</TableCell>
                <TableCell>{value.admno}</TableCell>
                <TableCell>{value.age}</TableCell>
                <TableCell><EditIcon onClick={()=>updatevalues(value)}/></TableCell>
                <TableCell><DeleteForeverIcon onClick={()=>deletevalues(value._id)}/></TableCell>
            </TableRow>
        )
       })}


    </TableBody>
</Table>
</TableContainer>

if(update)
  {
    console.log("djsdlf")
    result=<Student data={selected} method='put' />
  }

  return (result)  
    }

export default Studentview
