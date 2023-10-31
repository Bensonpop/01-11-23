import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
 const [Un,setUn]=useState('');
 const [Pwd,setPwd]=useState('');
 const [error,setError] =useState(false);
 const navigate=useNavigate();
 

const readusername = (event) => {
    event.preventDefault();  
   setUn(event.target.value);
}
 
const readpassword = (event) => {
    event.preventDefault();
    setPwd(event.target.value);

}

const readalldata = (event) => {
   event.preventDefault();
   if(Un.trim () =='' || Pwd.trim()=='')
   {
     setError(true);
     return;
   }
   else
   {
    setError(false);
    navigate('/Home')
   }
}

  return (
    <div>
      <h1>{props.a}</h1>
      <h1 className='seby'>SIGN-IN</h1>
      <form className='team'>
        USER NAME<input type='text' onChange={readusername}/><br /><br />
        PASSWORD <input type='password' onChange={readpassword}/><br /><br />
        <button className='button' type='submit' onClick={readalldata}>LOGIN</button>
       {error && 'Error occurs'}
      </form>
    </div>
  )
}

export default Login
