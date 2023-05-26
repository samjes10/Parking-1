import { useEffect, useState } from "react"
import ParkingRequestTable from "./ParkingRequestTable"
import { APISERVICE } from "../../services/api.service"
import './parkingRequest.css'
const ParkingRequest = () => {

  const [requests, setRequests] = useState([])
  const [pageInfo, setPageInfo] = useState([])
  useEffect(() => {
    getParkingRequest()
  }, [])

  const getParkingRequest = async (pageNumber=1) => {
    const url = 'reserva/?';
    const params = `page=${pageNumber}`
    const { success, requests, pageInfo } = await APISERVICE.get(url, params);
    if(success){
      setRequests(requests)
      setPageInfo(pageInfo)
    }else{

    }
  }

  return (
    <section className="parking-request">
        <h5>Solicitudes</h5>
        <ParkingRequestTable requests={requests} pageInfo={pageInfo} getParkingRequest={getParkingRequest} />
    </section>
  ) 
}
export default ParkingRequest