import { useEffect, useState } from "react";
import ParkingRequestTable from "./ParkingRequestTable";
import { APISERVICE } from "../../services/api.service";
//import "./parkingRequest.css";
import ModalRequest from "./ModalRequest";
import { Toaster, toast } from "react-hot-toast";
import TablePayments from "./TablePayments";

const ParkingRequest = () => {
  const [requests, setRequests] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);

  const [requestToReserve, setRequestToReserve] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showRequests, setShowRequests] = useState(true);
  const [payment, setPayment] = useState({})

  useEffect(() => {
    getParkingRequest();
  }, []);

  const getParkingRequest = async (pageNumber = 1) => {
    const url = "reserva/?";
    const params = `page=${pageNumber}`;
    const { success, requests, pageInfo } = await APISERVICE.get(url, params);
    if (success) {
      setRequests(requests);
      setPageInfo(pageInfo);
      console.log(requests);
    } else {
    }
  };

  const cancelRequest = async ($idRequest) => {
    const url = "reserva/cancel-request/?";
    const params = `idRequest=${$idRequest}`;
    const { success, message } = await APISERVICE.get(url, params);
    if (success) {
      messageToastSuccess(message);
      getParkingRequest();
    } else {
      messageToastError(message);
    }
  };

  const messageToastSuccess = (sms) => {
    toast.success(sms);
  };
  const messageToastError = (sms) => {
    toast.error(sms);
  };

  const confirmPayment = async (pay) => {
    const url = "pago/confirm-payment/?";
    const params = `idPayment=${pay.id}`;
    const { success, message } = await APISERVICE.get(url, params);
    if (success) {
      messageToastSuccess(message);
      getParkingRequest();
    } else {
      messageToastError(message);
    }
  }
  return (
    <div className="parking-request">
      {showRequests ? (
        <section>
          <h5>Reservas</h5>
          <ParkingRequestTable
            requests={requests}
            pageInfo={pageInfo}
            getParkingRequest={getParkingRequest}
            setRequestToReserve={setRequestToReserve}
            setShowRequests={setShowRequests}
            cancelRequest={cancelRequest}
          />
         
        </section>
      ) : (
        <TablePayments
          requestToReserve={requestToReserve}
          setShowModal={setShowModal}
          setPayment={setPayment}
          setShowRequests={setShowRequests}
          confirmPayment={confirmPayment}
        />
      )}
       <ModalRequest
            onHide={setShowModal}
            show={showModal}
            payment={payment}
          />
          <Toaster />

    </div>
  );
};
export default ParkingRequest;
