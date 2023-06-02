import { useEffect, useState } from "react";
import GridParking from "./GridParking";
import { APISERVICE } from "../../services/api.service";
import Modal from "./Modal";
import "./styles/Config.css";

export default function Config() {
  const [modalShow, setModalShow] = useState(false);
  const [plazaUpdate, setPlazaUpdate] = useState({});
  const [parkins, setParkins] = useState([]);
  const [pageInfo, setPageInfo] = useState(1);
  const [plazas, setPlazas] = useState([]);


  const getParkins = async (page = 1) => {
    let url = "parqueo/?";
    let params = `page=${page}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setParkins(response.pageInfo.parkins[0]);
      setPageInfo(response.pageInfo);
      console.log(response);
    }
  };
  const getPlazas = async (idParking) => {
    let url = "plaza/get-plaza";
    let params = "";
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setPlazas(response.plazas);
      console.log(response);
    }
  };
  const createPlaza = async (plaza) => {
    let url = "plaza/create-plaza";
    const response = await APISERVICE.post(plaza, url);
    if (response.status === 201) {
      console.log("Usuario agregado exitosamente!");
    }
    getPlazas();
  };
  const updatePlaza = async (plaza) => {
    let url = `plaza/update?`;
    let params = `id=${plaza.id}`;
    const response = await APISERVICE.post(plaza, url, params);
    if (response.status === 200) {
    }
    getPlazas();
  };

  console.log(plazaUpdate);
  useEffect(() => {
    getParkins();
    getPlazas();
  }, []);

  return (
    <div className="container-config">
      <h2 className="color-main mt-2 mb-4">Configuracion Parqueo</h2>
      <GridParking
       plazas={plazas}
       parkins={parkins}
       setModalShow={setModalShow}
       setPlazaUpdate={setPlazaUpdate}
       />
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        createPlaza={createPlaza}
        plazaUpdate={plazaUpdate}
        setPlazaUpdate={setPlazaUpdate}
        updatePlaza={updatePlaza}
      />
    </div>
  );
}
