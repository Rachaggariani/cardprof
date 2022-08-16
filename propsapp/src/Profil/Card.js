import React from 'react'
import Paper from '@mui/material/Paper';
import Button  from '@mui/material/Button';
function Card({user }) {
    const handleName=()=>{ handleName(user);}
  return (<div>
    <Paper elevation={24}/>
    
    <h1>{user.fullName}</h1>
    <h1>{user.profession}</h1>
    <h1>{user.bio}</h1>
    <Button variant="contained" onClick={handleName}>My name</Button>
   <Paper />
   </div>
  )
}

export default Card