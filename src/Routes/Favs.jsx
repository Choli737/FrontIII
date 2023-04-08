import React, { useState, useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const [state] = useContext(ContextGlobal);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length > 0 && state.favs.map((fav) => (
          <Card key={fav.id} dentist={fav} />
        ))}
      </div>
    </>
  );
};

export default Favs;

