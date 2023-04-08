import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import api from "../api";

const Home = () => {

  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await api.getDentists();
      setDentists(data);
    }
    fetchData();
  }, []);

  return (
    <main className="home" >
      <h1>Welcome</h1>
      <h2>Choose a doctor to see more details</h2>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  )
}

export default Home;