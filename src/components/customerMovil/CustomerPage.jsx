import { useEffect, useState } from "react";
import CustomerClaim from "./claim/CustomerClaim";
import Header from "./Header";
import HomeCustomer from "./home/Home";
import Reserve from "./reserve/Reserve";
import ReserveInfo from "./reserveInfo/ReserveInfo";
import "./customerPage.css";
import {APISERVICE} from '../../services/api.service'
export const navigationNames = {
  HOME: 'home',
  RESERVAR: 'reservar',
  INFORMACION: 'informacion',
  SUGERENCIAS: 'sugerencias'
}


const CustomerPage = () => {

  const [view, setView] = useState(navigationNames.HOME)
  const [information, setInformation] = useState({});
  const [tarifas, setTarifas] = useState([])
  useEffect(() => {
    getInformation()
    getTarifas();
  },[])

  const getInformation = async () => {
    const url = 'informacion/';
    const { success, information} = await APISERVICE.get(url);
    if(success){
      setInformation(information);
    }else{

    }
  }

  const getTarifas = async () => {
    const url = 'tarifa/get-tarifa-all';
    const { success, tarifas} = await APISERVICE.get(url);
    if(success){
      setTarifas(tarifas)
    }else{  

    }
  }

  return (
    <>
      <Header  setView={setView}/>
      <div className="contenedor">
      { view === navigationNames.HOME && <HomeCustomer information={information}/> }
      { view === navigationNames.RESERVAR && <Reserve tarifas={tarifas} information={information} /> }
      { view === navigationNames.INFORMACION && <ReserveInfo/> }
      { view === navigationNames.SUGERENCIAS && <CustomerClaim/> }
      </div>
    </>
  );
};
export default CustomerPage;
