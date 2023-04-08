import React, { useState, useEffect, useContext } from 'react';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextGlobal } from "./Components/utils/global.context";
import { Outlet } from 'react-router-dom';

function App() {
  
  const [state] = useContext(ContextGlobal);

  useEffect(() => { 
    localStorage.setItem("favs", JSON.stringify(state.favs))
   }, [state.favs]) 

  return (
    
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>

  );
};

export default App;

