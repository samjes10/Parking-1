import './styles/Customer.css'
import {FiEdit} from "react-icons/fi"
export default function CustomerTableRow({ customer, blockCustomer,setCustomerUpdate,setModalShow}) {
  const handleDeleteCustomer = () => {
    console.log(customer.id);
    blockCustomer(customer.id);
  };
  const handleEditCustomer = () => {
    setCustomerUpdate(customer);
    setModalShow(true);
    
  };
  return (
    <tr>
      <td className='col-2'>{customer.nombre_completo}</td>
      <td>{customer.ci}</td>
      <td>{customer.telefono}</td>
      <td>{customer.cargo}</td>
      <td>{customer.email}</td>
      <td>{customer.placa}</td>
      <td className="col-2" style={{ textAlign: "center" }}>
      <button className="btn-customer" onClick={() => handleEditCustomer()}><FiEdit className="icon me-3" /></button>
        <button className={customer.estado?"btn-bloquear":"btn-activar"} onClick={() => handleDeleteCustomer()}>{customer.estado?"Bloquear":"Habilitar"}</button>
      </td>
    </tr>
  );
}
