import { useEffect, useState } from "react";
import { InputGroup, Modal, Form } from "react-bootstrap"

const initialState = {
    nombre: '',
    costo: '',
    estado: '',
}

const PayModal = ({ show, onHide, createPay, updatePay, productToEdit, setProductToEdit}) =>  {
    const [ infoPay, setInfoPay ] = useState(initialState);

    useEffect(() => {
        if(productToEdit && Object.keys(productToEdit).length > 0){
            setInfoPay(productToEdit);
        }
    },[show])

    const handleAcept = () => {
        if(infoPay.id){
            updatePay(infoPay);
            onHide(false);
        }else{
            createPay(infoPay)
            onHide(false);
            setInfoPay(initialState);
        }
    }

    const handleOnChange = (e) => {
        setInfoPay({...infoPay, [e.target.name]: e.target.value});
    }
    
    const handleCancel = () => {    
        setInfoPay(initialState);
        setProductToEdit({});
        onHide(false);
    }

    return <Modal show={show} centered>
        <Modal.Header>
            {
                <h4>Crear nuevo pago</h4>
            }
        </Modal.Header>
        <Modal.Body className="mb-3">
            <InputGroup className="mb-3">
                <InputGroup.Text>Nombre</InputGroup.Text>
                <Form.Control
                    type='text'
                    placeholder='Nombre'
                    value={infoPay.nombre}
                    name='nombre'
                    onChange={handleOnChange}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Nombre</InputGroup.Text>
                <Form.Control
                    type='text'
                    placeholder='Precio'
                    value={infoPay.costo}
                    name="costo"
                    onChange={handleOnChange}
                />
            </InputGroup>

            <InputGroup>
                <Form.Select value={infoPay.estado} name='estado' onChange={handleOnChange}>
                    <option selected value=''>Seleccione un estado</option>
                    <option value="1">Activo</option>
                    <option value="0">inactivo</option>
                </Form.Select>
            </InputGroup>


        </Modal.Body>
        <Modal.Footer>
            <button className="btn-main btn-main__red" onClick={handleCancel}>Cancelar</button>
            <button className="btn-main btn-main__purple" onClick={handleAcept}>Aceptar</button>
        </Modal.Footer>
    </Modal>
}

export default PayModal;
