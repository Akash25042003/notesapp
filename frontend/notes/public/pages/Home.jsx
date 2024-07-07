import React from 'react'
import {Link} from "react-router-dom"

const home = () => {
  return (
    <div>
        <h2>home page</h2>
        <button>
            <Link to="/signup">signup</Link>
        </button>
        <button>
            <Link to="login">login</Link>
        </button>
        
    </div>
  )
}

export default home