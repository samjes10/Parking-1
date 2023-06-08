import React, { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import "./styles/AssignTurn.css";

export default function AssignTurnModal({ show, onHide, createTurn, turnUpdate, setTurnUpdate, updateTurn }) {
  const initialValues = {
    nombre: "",
    hora_inicio: "",
    hora_fin: "",
  };
  console.log(turnUpdate.id);
  const [value, setValue] = useState(initialValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (turnUpdate.id) {
      updateTurn(value);
      onHide();
    } else {
      createTurn(value);
      onHide();
    }
    setTurnUpdate({});
  };

  const handleCancel = () => {
    setTurnUpdate({});
    onHide();
  };
  useEffect(() => {
    if (Object.keys(turnUpdate).length !== 0) {
      setValue(turnUpdate);
    } else {
      setValue(initialValues);
    }
  }, [show]);

  return (
    <>
      <Modal show={show} size="lg-sm" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Crear Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ms-3 me-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nombre">Nombre</Form.Label>
              <Form.Control type="text" id="nombre" name="nombre" value={value.nombre} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora Inicio</Form.Label>
              <Form.Control type="time" id="hora_inicio" name="hora_inicio" value={value.hora_inicio} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora Fin</Form.Label>
              <Form.Control type="time" id="hora_fin" name="hora_fin" value={value.hora_fin} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-evenly">
              <button className="btn-global bg-color-red  tc-white" onClick={handleCancel}>
                Cancelar
              </button>
              <button className="btn-main btn-main__purple" onClick={handleSubmit}>
                Confirmar
              </button>
            </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
}
