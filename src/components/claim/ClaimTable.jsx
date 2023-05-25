import { Table } from "react-bootstrap"
import ClaimTableRow from "./ClaimTableRow"
import Paginator from "../global/paginador/Paginator"

const ClaimTable = ({claims, pageInfo, getClaims}) => {

  return (
    <Table>
        <thead>
            <tr>
                <th>Nombre Cliente</th>
                <th>Mensaje</th>
            </tr>
        </thead>
        <tbody>
            {
                claims && claims.length > 0 ?
                    claims.map( claim => {
                        return <ClaimTableRow claim={claim}/>
                    })
                :
                <tr>
                    <td style={{textAlign: 'center'}} colSpan={2}>No existen quejas/sugerencias.</td>
                </tr>
            }
             <tr>
              <td colSpan={5}>
                {claims && claims.length > 0 && <Paginator pageInfo={pageInfo} getData={getClaims}/>}
              </td>
          </tr>
        </tbody>
    </Table>
  )
}
export default ClaimTable