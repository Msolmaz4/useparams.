import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

const User = () => {

  const [user,setUser] = useState({})
  const { id } = useParams();

  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>setUser(res.data))

  })

   
  return (
    <div>
        <h2>deyatail</h2>

      
        {JSON.stringify(user)}
    
    </div>
  )
}

export default User