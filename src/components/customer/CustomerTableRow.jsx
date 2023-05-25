import './styles/Customer.css'
import edit from '../../assets/edit.png'
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
      <td className='col-3'>{customer.nombre_completo}</td>
      <td>{customer.ci}</td>
      <td>{customer.email}</td>
      <td>{customer.placa}</td>
      <td className="col-2" style={{ textAlign: "center" }}>
      <button className="btn-customer" onClick={() => handleEditCustomer()}><img className='img-customer' src={edit} alt='icon-edit'/></button>
        <button className={customer.estado?"btn-bloquear":"btn-activar"} onClick={() => handleDeleteCustomer()}>{customer.estado?"Bloquear":"Habilitar"}</button>
      </td>
    </tr>
  );
}
