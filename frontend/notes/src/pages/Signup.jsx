import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "../style/login.css"
const signup = () => {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("")

  const histroy=useHistory()
  const handlesubmit=(e)=>{
    e.preventDefault();
    const item={email,password}
    fetch("http://localhost:4000/users/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(item),
        credentials:"include"
    })
    .then((res)=>{
      if(!res.ok){
          console.log("emailid already exist")
          return alert('emailid already exist ');
      }
      else{
          histroy.push('/login')
      }
    })
  }

  return (
    <div className='login-main'>
        <form onSubmit={handlesubmit} className='login-form'>
            <div className="login-email">
                <label htmlFor="email" className='s-email'>email</label>
                <input type="email" name="email" onChange={(e)=>setemail(e.target.value)} value={email} className='s-input'/>
            </div>
            <div className="signup-password">
                <label htmlFor="password" className='s-password'>password</label>
                <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)} value={password} className='s-input' />
            </div>
            <div className="login-for">
            <button className='login-button'>signup</button>
            </div>

        </form>
    </div>
  )
}

export default signup