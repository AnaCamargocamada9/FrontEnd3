import React from 'react';

const Form = ({ formData, handleInputChange, handleSubmit }) => {
  const [mensajeEnviado, setMensajeEnviado] = React.useState(false);

  const mostrarMensaje = () => {
    setMensajeEnviado(true);
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 3000); // Muestra el mensaje por 3 segundos
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e); // Ejecuta la función handleSubmit proporcionada

    // Agrega la lógica para mostrar el mensaje
    mostrarMensaje();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Enviar</button>

      {/* Mensaje que se mostrará después de enviar el formulario */}
      {mensajeEnviado && <p style={{ textAlign: 'center' }}>
  Gracias {formData.fullName}, tu mensaje ha sido enviado. Pronto te contestaremos. <br />
  Verifica tu casilla de correo.
</p>}
    </form>
  );
};

export default Form;
