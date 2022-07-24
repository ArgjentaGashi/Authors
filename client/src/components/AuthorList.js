import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';

// import './MovieList.css';
const AuthorList = () => {
    const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8001/api/authors')
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteAuthor = (authorId) => {
    axios
      .delete(`http://localhost:8001/api/authors/${authorId}`)
      .then((res) => {
        const newAuthors = authors.filter((author) => author._id !== authorId);
        setAuthors(newAuthors);
      })
      .catch((err) => console.log(err));
  };

  const editAuthor = (authorId) => {
    navigate(`/edit/${authorId}`)

  }

  return (
    <div className="container">
        <h2>Favorite Authors</h2>
        <Link to={`/new`} >Add an author</Link>
        <p>We have quotes by:</p>
          <table>
            <thead>

            <tr>
                <th>Author</th>
                <th>Authors available</th>
            </tr>
            </thead>
      {authors.map((author) => (
            <tbody key={author._id}>
            <tr>
                <td>{author.name}</td>
                <td> 
                    <button onClick={() => editAuthor(author._id)}>Edit</button>
                    <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                </td>
            </tr>
            </tbody>
        ))}
        </table>
    </div>
  );
};

export default AuthorList;