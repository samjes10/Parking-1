import { AiFillEye } from "react-icons/ai"
import { BsFillTrashFill } from "react-icons/bs"
import { GiConfirmed } from "react-icons/gi"
import { MdEdit } from "react-icons/md"

const ParkingRequestTableRow = ({request}) => {
  return (
    <tr>
      <td>{request.nombre_completo}</td>
      <td>{request.ci}</td>
      <td>{request.placa}</td>
      <td className="d-flex gap-3">  
          <AiFillEye color='black'/>
          <GiConfirmed color="green"/>
          <BsFillTrashFill color="red"/>
      </td>
    </tr>
  )
}
export default ParkingRequestTableRow