import {useParams} from 'react-router-dom'

const User = () => {
    const { id } = useParams();
  return (
    <div>
        <h2>deyatail</h2>

        id:{id}
    </div>
  )
}

export default User