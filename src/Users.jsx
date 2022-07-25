import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Users = () => {
// burada yuklerken bekliyoruy
  const [loading ,setLoading] =useState(true)
  
   const [users ,setUsers] = useState([])

   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUsers(res.data))
    //biurde sonlabnidyoryu
    .finally(()=>setLoading(false))
   })


  return (
    <div>
      {loading && <div>...loading</div>}
      <h1>user</h1>
    <ul>
    {
       users.map((us ,id)=>(
        <li key={id}>
          <Link to={`/user/${id}`}>{us.name}</Link>
        </li>

        
       ))
      }
      
    </ul>
      
        

    </div>
  )
}

export default Users