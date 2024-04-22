import React from 'react'
import {useAppContext} from "./utils/useAppContext.jsx";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useAppContext(); // Obtiene el estado y la función de despacho del contexto

  const toggleTheme = () => {
    document.body.className = state.theme === 'dark' ? 'dark-mode' : 'light-mode';
  
    dispatch({ type: 'TOGGLE_THEME' }); // Dispatch para cambiar el tema
    localStorage.setItem('tema', state.theme );
  };



  return (


    <nav className={state.theme === 'dark' ? 'dark-mode' : 'light-mode'}>


    <img src ="./images/logo.png" alt="logo" className="logo-container" />




      <ul className="miLista">
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/favs">Favoritos</a></li>
      </ul>
      




      
      <button className={`custom-button ${state.theme === 'dark' ? 'dark-mode' : ''}`} onClick={toggleTheme}>
      {state.theme === 'dark' ? 
      (
        <img src="./images/ico-oscuro.png" alt="Claro" className='oscuro'/>
      ) : (
        <img src="./images/ico-claro.png" alt="Oscuro" className='claro'/>
      )}
</button>

    </nav>
  )
}

export default Navbar;
/*  //<button onClick={handleLogout} className='logout'>Cerrar sesión</button>*/