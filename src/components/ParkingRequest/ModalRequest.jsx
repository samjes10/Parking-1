import { Modal } from "react-bootstrap";
const APIULRIMG = "http://localhost:8080/upload/";
const ModalRequest = ({ show, payment, onHide }) => {

  return (
    <Modal show={show} centered>
      <Modal.Header>
        <h5>Informacion de Reserva</h5>
      </Modal.Header>
      <Modal.Body className="modal-body">
         <div style={{width: '300px', margin: '0 auto'}}>
          <img className="w-100" src={`${APIULRIMG}${payment.comprobante}`} alt="" />
         </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn-main btn-main__red"
          onClick={() => onHide(false)}
        >
          Volver
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalRequest;
