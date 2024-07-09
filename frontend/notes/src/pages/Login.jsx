import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../style/login.css"

const Login = ({}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const item = { email, password };

    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
      credentials: 'include'
    })
      .then((res) => {
        if (!res.ok) {
          return alert('Password is incorrect');
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
        if (data.success) {
          history.push('/check-auth');
        } else {
          console.log("Invalid email or password. Please try again.");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

 
  return (
    <div className='login-main'>
        <form onSubmit={handleLoginSubmit} className='login-form'>
            <div className="login-email">
                <label htmlFor="email" className='s-email'>email</label>
                <input type="email" name="email" onChange={(e)=>setemail(e.target.value)} value={email} className='s-input'/>
            </div>
            <div className="signup-password">
                <label htmlFor="password" className='s-password'>password</label>
                <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)} value={password}  className='s-input' />
            </div>
            <div className="login-for">
            <button className='login-button'>login</button>
            </div>

        </form>
    </div>
  )
}
export default Login
