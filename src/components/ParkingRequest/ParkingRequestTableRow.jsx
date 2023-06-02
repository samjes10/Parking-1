import { AiFillEye } from "react-icons/ai"
import { BsFillTrashFill } from "react-icons/bs"
import { GiConfirmed } from "react-icons/gi"
import { MdEdit } from "react-icons/md"

const ParkingRequestTableRow = ({request, setRequestToReserve, setShowRequests, cancelRequest}) => {
  
  const handleShowRequest = () => {
    setRequestToReserve(request)
    setShowRequests(false);
  }

  const handleCancelRequest = () => {
    cancelRequest(request.id);
  }
  return (
    <tr>
      <td>{request.cliente.nombre_completo}</td>
      <td >{request.cliente.ci}</td>
      <td>{request.cliente.placa}</td>
      <td>{request.cliente.telefono}</td>
      <td> 
        {request.estado === 'pendiente' && <button className="btn-main btn-main__purple">{request.estado}</button>}
        {request.estado === 'cancelado' && <button className="btn-main btn-main__red">{request.estado}</button>}
        {request.estado === 'pagado' && <button className="btn-main btn-main__green">{request.estado}</button>}
      </td>
      <td>  
          <AiFillEye style={{width: '30px', height: '30px'}} color='orange 'onClick={handleShowRequest}/>
        {"  "}
          <BsFillTrashFill color="red" onClick={handleCancelRequest}/>
      </td>
    </tr>
  )
}
export default ParkingRequestTableRow