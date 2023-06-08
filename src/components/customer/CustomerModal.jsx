import React, { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import "./styles/Customer.css";

export default function CustomerModal({ show, onHide, createCustomer, customerUpdate, setCustomerUpdate, updateCustomer }) {
  const initialValues = {
    nombre_completo: "",
    ci:"",
    email: "",
    placa:"",
    password: "",
    telefono:"",
    cargo:"",
    unidad:""
  };
  console.log(customerUpdate.id);
  const [value, setValue] = useState(initialValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (customerUpdate.id) {
      updateCustomer(value);
      onHide();
    } else {
      createCustomer(value);
      onHide();
    }
    setCustomerUpdate({});
  };

  const handleCancel = () => {
    setCustomerUpdate({});
    onHide();
  };
  useEffect(() => {
    if (Object.keys(customerUpdate).length !== 0) {
      setValue(customerUpdate);
    } else {
      setValue(initialValues);
    }
  }, [show]);

  return (
    <>
      <Modal show={show} size="lg-sm" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Crear Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ms-3 me-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nombre">Nombre Completo</Form.Label>
              <Form.Control type="text" id="nombre_completo" name="nombre_completo" value={value.nombre_completo} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CI</Form.Label>
              <Form.Control type="number" id="ci" name="ci" value={value.ci} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" id="email" name="email" value={value.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Placa</Form.Label>
              <Form.Control type="text" id="placa" name="placa" value={value.placa} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="number" id="telefono" name="telefono" value={value.telefono} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cargo</Form.Label>
              <Form.Control type="text" id="cargo" name="cargo" value={value.cargo} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Unidad</Form.Label>
              <Form.Control type="text" id="unidad" name="unidad" value={value.unidad} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" id="password" name="password" value={value.password ? value.password : ""} onChange={handleChange} />
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
