import { Table } from "react-bootstrap"
import ParkingRequestTableRow from "./ParkingRequestTableRow"

const ParkingRequestTable = ({requests, pageInfo, getParkingRequest}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Carnet</th>
          <th>Placa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          requests && requests.length > 0 ? 
            requests.map( req =>  <ParkingRequestTableRow key={req.id} request={req}/>)
          :
          <tr>
            <td>No existen reservas</td>
          </tr>
        }
      </tbody>
    </Table>
  )
}
export default ParkingRequestTable