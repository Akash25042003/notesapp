import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min' 
import '../style/notes.css'

const Notes = ({notes}) => {
  return (
    <div className='notes-main'>
        { notes.map((notes)=>(
            <div className="card" key={notes._id}>
                <Link to ={`/Singlenote/${notes._id}`}  className="link-no-underline" >
                <h2>
                    Tittle:{notes.tittle}
                </h2>
                </Link>
            </div>
        ))}
    </div>
  )
}
export default Notes
