import React from 'react'
import Usefetch from './Usefetch'
import {useHistory, useParams,Link} from 'react-router-dom/cjs/react-router-dom.min';
import '../style/singlenote.css'


const Singlenote = () => {
  const { id } = useParams();
    const{notes,problem}=Usefetch('http://localhost:4000/api/notes/note/'+id)
    const histroy=useHistory();
    const handledelete=()=>{
        fetch("http://localhost:4000/api/notes/deletenotes/"+notes._id,{
            method:'DELETE', 
        })
        .then(()=>{
          histroy.push("/allnotes")
        })
    }

  return (
    <div className='note-singlenote-main'>
       <div className="single-note-main">
        {problem && <div className='problem'>{problem}</div>}
        {notes && (
        <div className="s-notes">
            <div className="singlenote-tittle">Tittle:{notes.tittle}</div>
            <div className="singlenote-description">description:{notes.description}</div>
            <button onClick={handledelete} className='single-but-del'>delete</button>
            <Link to={`/Update/${id}`}><button className='single-but-update'>update</button></Link>
        </div>

        )}
       </div>
    </div>
  )
}

export default Singlenote