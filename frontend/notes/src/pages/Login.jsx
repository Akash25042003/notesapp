import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = ({setisok}) => {

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("")

    const histroy=useHistory();
    const handleloginsubmit=(e)=>{
        e.preventDefault();
        const item={email,password}
        fetch("http://localhost:4000/users/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(item)
        })
        .then((res)=>{
            if(!res.ok){
                console.log("password is incorrect")
                return alert('password is incorrect');
            }
            else{
                histroy.push('/allnotes')
            }

        })
        .then(()=>{
            setisok(true)
        })
      }

  return (
    <div>
        <form onSubmit={handleloginsubmit}>
            <div className="login-email">
                <label htmlFor="email" className='s-email'>email</label>
                <input type="email" name="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
            </div>
            <div className="signup-password">
                <label htmlFor="password" className='s-password'>password</label>
                <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)} value={password} />
            </div>
            <button>login</button>

        </form>
    </div>
  )
}

export default Login