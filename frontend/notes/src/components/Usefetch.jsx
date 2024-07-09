import { useEffect, useState } from 'react'


const Usefetch = (url) => {
    const[notes,setnotes]=useState(null)
    const[problem,setproblem]=useState(null)

    useEffect(()=>{
        fetch(url, {
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json', 
            },
        })
        .then(res=>{
            if(!res.ok){
                throw Error("fetching data is incorrect")
            }
            return res.json()
        })
        .then(data=>{
            setnotes(data)
            console.log("data fetched sucessful")
        })
        .catch(err=>{
            setproblem(err.message)
        })
    },[url])
  return {notes,problem}
}

export default Usefetch