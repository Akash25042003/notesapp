import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
    <div>
        <form onSubmit={handlesubmit}>
            <div className="signup-email">
                <label htmlFor="email" className='s-email'>email</label>
                <input type="email" name="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
            </div>
            <div className="signup-password">
                <label htmlFor="password" className='s-password'>password</label>
                <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)} value={password} />
            </div>
            <button>signup</button>

        </form>
    </div>
  )
}

export default signup