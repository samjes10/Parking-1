
import React, { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";

export default function UserModal({ show, onHide, createPlaza, plazaUpdate, setPlazaUpdate, updatePlaza }) {
  const initialValues = {
    numero: "",
    habilitado: "",
  };
  console.log(plazaUpdate.id);
  const [value, setValue] = useState(initialValues);

  const handleChange = (e) => {
    if(e.target.value==="camino"){
        setValue({
            ...value,
            [e.target.name]: false,
          });
    }else if(e.target.value === "plaza"){
        setValue({
            ...value,
            [e.target.name]: true,
          });
    }else{
        setValue({
            ...value,
            [e.target.name]: e.target.value,
          });
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (plazaUpdate.id) {
        updatePlaza(value);
      onHide();
    } else {
        createPlaza(value);
      onHide();
    }
    setPlazaUpdate({});
  };

  const handleCancel = () => {
    setPlazaUpdate({});
    onHide();
  };
  useEffect(() => {
    if (Object.keys(plazaUpdate).length !== 0) {
      setValue(plazaUpdate);
    } else {
      setValue(initialValues);
    }
  }, [show]);

  return (
    <>
      <Modal show={show} size="lg-sm" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Asignar Numero</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ms-3 me-3">
            <Form.Group className="mb-3">
              <Form.Label>Numero</Form.Label>
              <Form.Control type="text" id="numero" name="numero" value={value.numero} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>habilitado</Form.Label>
              <Form.Select id="habilitado" name="habilitado" onChange={handleChange}>
                <option >{plazaUpdate.habilitado?'Plaza':"Camino"}</option>
                <option value="plaza">Plaza</option>
                <option value="camino">Camino</option>
              </Form.Select>
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
