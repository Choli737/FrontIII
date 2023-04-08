import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {

  const [state, dispatch] = useContext(ContextGlobal);

  const handleChangeTheme = () => {
  const themeUpdated = state.theme === 'light' ? 'dark' : 'light';
  dispatch ({type: "CHANGE_THEME", payload: themeUpdated})
  };

  return (
    <nav className={state.theme}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favs">Favorites</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className='theme' onClick={handleChangeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;