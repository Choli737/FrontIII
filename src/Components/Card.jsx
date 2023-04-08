import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ dentist }) => {

  const { name, username, id } = dentist
  
  const [state, dispatch] = useContext(ContextGlobal);

  const isFav = state.favs?.some(favorites => favorites?.id === id);

  const onFavButtonClick = () => {

    if (isFav) {
      dispatch({ type: "REMOVE_FAVORITES", payload: id });
    }
    else {
      dispatch({ type: "ADD_FAVORITES", payload: dentist });
    }

  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{username}</h3>
      <p>{id}</p>

      <Link to={`/detail/${id}`}>Details</Link>

      <button onClick={onFavButtonClick} className="favButton">{isFav ? "Remove Fav" : "Add Fav"}</button>
    </div>
  );
};

export default Card;