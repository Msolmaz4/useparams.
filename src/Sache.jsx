import React from 'react'
import { Link } from 'react-router-dom'

const Sache = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/search/1'>
                auto </Link>
                </li>
            <li>
            <Link to='/search/2'>  fenste
            </Link> </li>
            <li>
            <Link to='/search/3'> 
                handy</Link>
                </li>
            <li>
            <Link to='/search/4'>
            Glas</Link></li>
            <li>
            <Link to='/search/5'>geldbeutel</Link></li>
        </ul>

    </div>
  )
}

export default Sache