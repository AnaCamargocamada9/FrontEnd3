import React, { useEffect, useState } from 'react';
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Favs() {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    // Obtener la información de los dentistas favoritos del localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteDentists(favorites);
  }, []);

  return (
    <>
      <h1>Mis Favoritos</h1>
      <div className="card-grid">
        {/* Renderizar una Card por cada dentista favorito */}
        {favoriteDentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
