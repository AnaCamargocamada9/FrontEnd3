import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';



function Home() {

  
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Simulación de llamada a una API para obtener información de los dentistas
    // Aquí deberías hacer la llamada a la API real
    const fetchData = async () => {


      try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'GET'
        });
  
        if (!response.ok) {
          throw new Error('Error al obtener la lista de categorías');
        }
       // console.log('response--->',response);
  
        const data = await response.json();
  
       // console.log('data--->',data);







      /* console.log('entre 1');
        // Hacer la llamada a la API y obtener los datos de los dentistas
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log('response ' + response );
        const data = await response.json();*/
        // Actualizar el estado con los datos de los dentistas
        setDentists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamar a la función para obtener los datos cuando el componente se monte

    // Limpiar la suscripción o realizar otras tareas cuando el componente se desmonte (opcional)
    return () => {
      // Código de limpieza aquí, si es necesario
    };
  }, []); // Este efecto se ejecuta solo cuando el componente se monta y no tiene dependencias

  return (
    <main>
      
      <h1>Home</h1>
  
      <div className='card-grid' >
        {/* Renderizar las tarjetas de los dentistas */}
        {dentists.map(dentist => (
        
        
        <Card  id={dentist.id} name={dentist.name} username={dentist.username}   />
      
      
          
        ))}
      </div>
    </main>
  );
}

export default Home;
