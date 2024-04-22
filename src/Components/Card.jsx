import React from "react";
import { Link } from 'react-router-dom';
import {useAppContext} from "./utils/useAppContext.jsx";

const Card = ({ name, username, id }) => {
  const { state } = useAppContext();

  const addFav = () => {
    // Obtener el array de favoritos del localStorage o inicializarlo si no existe
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('name ' + name)

    // Verificar si la Card ya está en favoritos para evitar duplicados
    const isAlreadyFavorite = favorites.some(fav => fav.id === id);

    if (!isAlreadyFavorite) {
      // Agregar la Card al array de favoritos
      favorites.push({ id, name, username });

      // Actualizar el localStorage con el nuevo array de favoritos
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('¡Agregado a favoritos!');
    } else {
      alert('Esta Card ya está en favoritos.');
    }
  };

  return (

    
    
    <div className={`card ${state.theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      
      <Link to={`/dentist/${id}`}>

    <img src ="./images/doctor.jpg" alt="doctor" className="card-img" />

      
        <p> {id} -{name} - {username} </p>
        </Link>
    
        <button onClick={addFav} className="favButton"> <img src="./images/ico-fav.png" alt="corazon" className='fav'/></button>
        
    </div>
    
  );
};

export default Card;
