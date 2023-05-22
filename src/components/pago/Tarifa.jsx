import { useEffect, useState } from "react";
import { APISERVICE } from "../../services/api.service";
import PayTable from "./TarifaTable";
import PayModal from "./TarifaModal";
import './Tarifa.css'


const payments = [];
const Pago = () => {
  const [payments, setPayments] = useState([]);
  const [infoPage, setInfoPage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState({});

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = async (page=1) => {
    const url = "tarifa/?";
    const params = `page=${page}`
    const { success, pageInfo, payments } = await APISERVICE.get(url, params);
    if (success) {
      setPayments(payments);
      setInfoPage(pageInfo);
    }
  };

  const createPay = async (body) => {
    const url = "tarifa/create";
    const { success, pageInfo, payments } = await APISERVICE.post(body, url);
    if (success) {
      setPayments(payments);
      setInfoPage(pageInfo);
      getPayments();
    }
  };

  const disablePay = async ( id ) => {
    const url = "tarifa/disable-pay?";
    const params = `idPay=${id}`
    const { success } = await APISERVICE.get(url, params);
    if (success) {
      getPayments();
    }
  };

  const updatePay = async ( body ) => {
    const url = "tarifa/update/?";
    const params = `id=${body.id}`
    const { success } = await APISERVICE.post(body, url, params);
    if (success) {
      getPayments();
    }
  };

  return (
    <div className="container tarifa">
      <h3>Pago</h3>
      <button
        className="btn-main btn-main__purple"
        onClick={() => setShowModal(true)}
      >
        Nueva Tarija
      </button>
      <PayTable
        payments={payments}
        setProductToEdit={setProductToEdit}
        showModal={showModal}
        setShowModal={setShowModal}
        getPayments={getPayments}
        infoPage={infoPage}
        disablePay={disablePay}
      />
      <PayModal
        show={showModal}
        onHide={setShowModal}
        updatePay={updatePay}
        createPay={createPay}
        productToEdit={productToEdit}
        setProductToEdit={setProductToEdit}
      />
    </div>
  );
};

export default Pago;
