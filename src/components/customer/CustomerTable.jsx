import Paginator from "../global/paginador/Paginator";
import CustomerTableRow from "./CustomerTableRow";
import { Table } from "react-bootstrap";
export default function CustomerTable({ 
  customers,
  blockCustomer,
  pageInfo,
  getCustomers
}) {
  return (
    <Table>
      <thead className="head-table">
        <tr>
          <th style={{borderTopLeftRadius: '10px'}}>Nombre</th>
          <th>Carnet</th>
          <th>Email</th>
          <th>Placa</th>
          <th style={{textAlign: 'center', borderTopRightRadius: '10px'}}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {customers && customers.length > 0 ? (
          customers.map((cus) => (
            <CustomerTableRow
              key={cus.id}
              customer={cus}
              blockCustomer={blockCustomer}
              />
          ))
        ) : (
          <tr>
            <td colSpan={5}>No existen resultados!</td>
          </tr>
        )}
          <tr>
              <td colSpan={5}>
                <Paginator pageInfo={pageInfo} getData={getCustomers} />
              </td>
          </tr>
      </tbody>
    </Table>
  );
}
