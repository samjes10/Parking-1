import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [ci, setCI] = useState('');
  const [email, setEmail] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer lo que necesites con los datos ingresados, como enviarlos a un servidor, almacenarlos en el estado global, etc.

    // Luego, puedes cerrar el modal
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Completa el formulario</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre completo:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label>
            CI:
            <input
              type="text"
              value={ci}
              onChange={(e) => setCI(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Número de placa:
            <input
              type="text"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
