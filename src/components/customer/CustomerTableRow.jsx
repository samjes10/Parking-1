import './styles/Customer.css'
export default function CustomerTableRow({ customer, blockCustomer}) {
  const handleDeleteCustomer = () => {
    console.log(customer.id);
    blockCustomer(customer.id);
  };

  return (
    <tr>
      <td className='col-3'>{customer.nombre_completo}</td>
      <td>{customer.ci}</td>
      <td>{customer.email}</td>
      <td>{customer.placa}</td>
      <td className="col-2" style={{ textAlign: "center" }}>
        <button className={customer.estado?"btn-bloquear":"btn-activar"} onClick={() => handleDeleteCustomer()}>{customer.estado?"Bloquear":"Habilitar"}</button>
      </td>
    </tr>
  );
}
