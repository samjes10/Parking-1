import { Table } from 'react-bootstrap'
import './mora.css'
import { APISERVICE } from '../../services/api.service';
import { useEffect, useState } from 'react';
const Mora = () => {

    useEffect(() => {
        getDebtorCustomers()
    }, [])

    const [customers, setCustomers] = useState([])

    const getDebtorCustomers = async () => {
        const url = 'reserva/get-debtor-customers';
        const { success, customers} = await APISERVICE.get(url);
        if(success){
            setCustomers(customers);
        }
    }

  return (
    <div className='mora'>
        <h5>Clientes con mora</h5>
        <Table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.length > 0 ? 
                        customers.map( customer => <tr key={customer.id}>
                            <td>{customer.cliente.nombre_completo}</td>
                            <td>{customer.cliente.telefono}</td>
                            <td>{customer.cliente.email}</td>
                            </tr>)
                    :
                    <tr>
                        <td colSpan={3}  style={{textAlign: 'center'}}>No existen deudores</td>
                    </tr>
                }
            </tbody>
        </Table>
    </div>
  )
}
export default Mora