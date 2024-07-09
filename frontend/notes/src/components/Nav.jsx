import React from 'react'
import {Link} from "react-router-dom"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import "../style/nav.css"
const Nav = ({setIsAuthenticated}) => {
  const histroy=useHistory()
  const handlelogout=()=>{
    fetch("http://localhost:4000/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include'
    })
    .then((res) => res.json())

      .then(data => {
        console.log(data)
        if (data.success) {
          console.log("logout sucessfully");
          setIsAuthenticated(false)
          histroy.push("/login");
        }
      })
  }


  return (
    <div className="nav-both">
      <div className='note-nav'>
        <Link to ="/allnotes" className='note-home'>Home</Link>
        <Link to ="/Create" className='note-create'>Create Note</Link>
    </div>
    <div>
      <button onClick={handlelogout} className="nav-logout">logout</button>
    </div>
    </div>
  )
}

export default Nav