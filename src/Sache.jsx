import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Sache = () => {
  
   const [user,setUser] = useState([])

   useEffect(()=>{

    axios('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUser(res.data))

   },[])

  return (
    <div>
        <ul>
          {
            user.map((el,id)=>(
              <li key={el.id} >
                <Link to={`search/${el.id}`}>{el.name}
                </Link>
                </li>

            ))
          }
        </ul>
        

    </div>
  )
}

export default Sache