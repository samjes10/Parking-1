import { Table } from "react-bootstrap"

export const ReportsTable = ({payments}) => {
  return (
    <Table>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
            {
                payments && payments.length > 0 ? 
                payments.map( pay => <tr key={pay.id}><td>{pay.fecha}</td> <td>Bs. {pay.total}</td> </tr>):
                <tr>
                    <td style={{textAlign: 'center'}} colSpan={2}>No existen registros</td>
                </tr>
            }
        </tbody>
    </Table>
  )
}