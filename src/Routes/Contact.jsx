import React, { useState } from 'react';
import Form from '../Components/Form';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Realizar validaciones y enviar el formulario
    if (!formData.fullName || !formData.email) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Enviar los datos del formulario al servidor (aquí es solo un ejemplo)
    fetch('url_del_servidor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del servidor si es necesario
      console.log('Respuesta del servidor:', data);
      // Aquí puedes realizar cualquier acción adicional después de enviar el formulario
    })
    .catch(error => {
      // Manejar errores de la solicitud
      console.error('Error al enviar los datos:', error);
    });
  };

  return (
    <div>
      <h2>Tienes una consulta ?</h2>
      <p>Envianos un mensaje y ptonto te contestaremos</p>
      <Form
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Contact;
