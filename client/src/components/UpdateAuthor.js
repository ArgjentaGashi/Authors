import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateAuthor = () => {
    const {id} = useParams();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
          .get(`http://localhost:8001/api/authors/${id}`)
          .then((res) => {
            setName(res.data.name);
          })
          .catch((err) => console.log('GET MOVIE BY ID ERROR', err));
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:8001/api/authors/${id}`, {
            name
          })
          .then((res) => {
            navigate('/');
          })
          .catch((err) => setErrors(err.response.data.error.message.split(':')[2]));
      };

      const handleCancel = (e) => {
        e.preventDefault();
        setName("");
      }

  return (
    <div>

    <h2>Favorite authors:</h2>
        <Link to={`/`} >Home</Link>
        <p>Edit this author:</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name</label>
            <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} ></input>
            <p>{errors && errors}</p>
            <input type='submit' value='Cancel' onChange={handleCancel} />
            <input type='submit'/>
        </form>

    </div>
  )
}

export default UpdateAuthor