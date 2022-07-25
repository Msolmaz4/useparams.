import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'


const User = () => {

    const [user,setUser]= useState({})
    const {id } =useParams()

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>setUser(res.data))
    },[id])

   // link ilerki sayfaya gitme id string zapulir pares imit yapariyuseefecete id ekleriy
  return (
    <div>User
        <code>
        {JSON.stringify(user)}
        </code>
        <br />
        <br />
       
        <Link to={`/user/${parseInt(id)+1}`}>NEXT USER</Link>
        
    </div>
  )
}

export default User