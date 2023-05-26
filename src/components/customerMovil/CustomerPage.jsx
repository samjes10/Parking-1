import { useEffect, useState } from "react";
import CustomerClaim from "./claim/CustomerClaim";
import Header from "./Header";
import HomeCustomer from "./home/Home";
import Reserve from "./reserve/Reserve";
import ReserveInfo from "./reserveInfo/ReserveInfo";
import "./customerPage.css";
import { APISERVICE } from "../../services/api.service";
import { Toaster, toast } from "react-hot-toast";
export const navigationNames = {
  HOME: "home",
  RESERVAR: "reservar",
  INFORMACION: "informacion",
  SUGERENCIAS: "sugerencias",
};

const CustomerPage = () => {
  const [view, setView] = useState(navigationNames.HOME);
  const [information, setInformation] = useState({});
  const [tarifas, setTarifas] = useState([]);
  const [placeNumber, setPlaceNumber] = useState();
  const [infoReserve, setInfoReserve] = useState({})


  useEffect(() => {
    getInformation();
    getTarifas();
    getInfoReserve();
  }, []);

  const getInfoReserve = async () => {
    const url = 'reserva/get-customer-reserve/?'
    const params = `idCustomer=${1}`
    const { success, infoReserve} = await APISERVICE.get(url, params);
    if(success){
      setInfoReserve(infoReserve);
      console.log(infoReserve)
    }

  }

  const getInformation = async () => {
    const url = "informacion/";
    const { success, information } = await APISERVICE.get(url);
    if (success) {
      setInformation(information);
    } else {
    }
  };

  const getTarifas = async () => {
    const url = "tarifa/get-tarifa-all";
    const { success, tarifas } = await APISERVICE.get(url);
    if (success) {
      setTarifas(tarifas);
    } else {
    }
  };

  const sendClaim = async (sms) => {
    const url = "sugerencia/create-claim/?";
    const params = `idCustomer=1`;
    const body = {
      cliente_id: 1,
      mensaje: sms,
    };
    const { success, message } = await APISERVICE.post(body, url, params);
    if (success) {
      messageToastSuccess(message);
      setView(navigationNames.HOME)
    }
  };

  const messageToastSuccess = (sms) => {
    toast.success(sms);
  }

  const reserve = async ( info, idTarifa) => {
    const url = "reserva/create?";
    
    const fd = new FormData();
    const body = {
      estado: 1,
      plaza_id: placeNumber.id,
      tarifa_id: idTarifa,
      cliente_id: 1,
    }
    console.log(body, info.comprobante)

    fd.append("data", JSON.stringify(body));
    fd.append("img", info.comprobante)
    const { success, reserve } = await APISERVICE.postWithImage(fd, url);
    if(success){
      getInfoReserve();
    }else{

    }
    console.log(body);
  };

  return (
    <>
      <Header setView={setView} />
      <div className="contenedor">
        {view === navigationNames.HOME && (
          <HomeCustomer
            information={information}
            setPlaceNumberGlobal={setPlaceNumber}
            setView={setView}
          />
        )}
        {view === navigationNames.RESERVAR && (
          <Reserve
            tarifas={tarifas}
            information={information}
            placeNumber={placeNumber}
            reserve={reserve}
            setView={setView}
          />
        )}
        {view === navigationNames.INFORMACION && <ReserveInfo infoReserve={infoReserve}/>}
        {view === navigationNames.SUGERENCIAS && (
          <CustomerClaim sendClaim={sendClaim} />
        )}
      </div>
      <Toaster/>
    </>
  );
};
export default CustomerPage;
