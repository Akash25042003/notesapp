import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <div className='note-nav'>
        <Link to ="/allnotes" className='note-home'>Home</Link>
        <Link to ="/Create" className='note-create'>Create Note</Link>
    </div>
  )
}

export default Nav