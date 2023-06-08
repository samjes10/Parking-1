import Paginator from "../global/paginador/Paginator";
import AssignTurnTableRow from "./AssignTurnTableRow";
import { Table } from "react-bootstrap";
export default function AssignTurnTable({ 
  users,
  turn,
  assignTurn,
  pageInfo,
  getUsers
}) {
  return (
    <Table>
      <thead className="head-table">
        <tr>
          <th style={{borderTopLeftRadius: '10px'}}>Nombre</th>
          <th>Rol</th>
          <th>Turno</th>
          <th style={{textAlign: 'center', borderTopRightRadius: '10px'}}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 ? (
          users.map((us) => (
            <AssignTurnTableRow
              key={us.user.id}
              usuario={us}
              turn={turn}
              assignTurn={assignTurn}
              />
          ))
        ) : (
          <tr>
            <td colSpan={5}>No existen resultados!</td>
          </tr>
        )}
          <tr>
              <td colSpan={5}>
                <Paginator pageInfo={pageInfo} getData={getUsers} />
              </td>
          </tr>
      </tbody>
    </Table>
  );
}
