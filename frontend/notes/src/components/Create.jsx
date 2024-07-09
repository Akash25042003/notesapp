import React, { useState } from 'react'
import {useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../style/create.css'
const Create = () => {
    const[tittle,settittle]=useState("")
    const[description,setdescription]=useState("")
    const histroy=useHistory()
const handlecreate=(e)=>{
    e.preventDefault();
    const item={tittle,description}
    fetch("http://localhost:4000/api/notes/createnotes", {
        method: "POST",
        credentials: 'include', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
    })
    .then(()=>{
        histroy.push('/allnotes')
    })
}

  return (
    <div>
        <div className="create">
            <form onSubmit={handlecreate}>
            <div className="tittle-note">
                <label htmlFor="tittle">Tittle </label>
                <input type="text" name='tittle' value={tittle} onChange={(e)=>settittle(e.target.value)}  className='cre-tit-inp'/>
            </div>
            <div className="description-note">
                <label htmlFor="description">Description </label>
                <textarea type="box" name='description' value={description} onChange={(e)=>setdescription(e.target.value)} className='cre-des-inp'/>
            </div>
            <button>create</button>
            </form>
        </div>
    </div>
  )
}

export default Create