import React from 'react'
import {Link} from "react-router-dom"
import '../style/Home.css'

const home = () => {
  return (
    <div className='notes-homepage'>
      <div className="home-main">
      <h1>My Notesapp
      </h1>
        <h2>home page</h2>
        <div className="home-both">
        <button className='home-but-1'>
            <Link to="/signup">signup</Link>
        </button>
        <button className='home-but-2'>
            <Link to="login">login</Link>
        </button>
        </div>
        
      </div>
    </div>
  )
}

export default home