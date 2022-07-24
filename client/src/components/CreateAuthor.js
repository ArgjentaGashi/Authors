import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateAuthor = () => {
    const [name, setName] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post('http://localhost:8001/api/authors', {
            name
          })
          .then((res) => {
            navigate('/');
          })
          .catch((err) => { 
            if (err.response.data.errors.name.message == "Error, expected `name` to be unique. Value: `hpp`") {
                setErrors("Name should be unique");
            }
            else {
                setErrors(err.response.data.errors.name.message)
            }
        } );
    }

  return (
    <div>
        <h2>Favorite authors:</h2>
        <Link to={`/`} >Home</Link>
        <p>Add a new author:</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name</label>
            <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} ></input>
            <p>{errors && errors }</p>
            <input type='submit' />
        </form>
    </div>
  )
}

export default CreateAuthor