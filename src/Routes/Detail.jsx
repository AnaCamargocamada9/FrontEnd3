import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Hacer una solicitud para obtener los detalles del dentista con el ID proporcionado
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setDentist(data);
      })
      .catch(error => {
        console.error('Error al obtener los detalles del dentista:', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Nombre: {dentist ? dentist.name : 'Cargando...'}</h1>
      {/* Mostrar detalle del dentista con el id proporcionado */}
      {dentist && (
        <>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio Web: {dentist.website}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
