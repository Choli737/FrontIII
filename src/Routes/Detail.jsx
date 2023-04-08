import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Detail = () => {

  const [dentist, setDentist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>Detail Dentist {id}</h1>
      <div className='card-details'>
      <h2>Name: {dentist.name}</h2>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
      </div>
    </div>
  )
}

export default Detail;