import { useState, useEffect } from "react";
import ParkingTable from "./ParkingTable";
import { APISERVICE } from "../../services/api.service";
import ParkingModal from "./ParkingModal";
import './styles/Parking.css'

export default function Parking() {
  const [parkins, setParkins] = useState([]);
  const [parkingUpdate, setParkingUpdate] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [pageInfo, setPageInfo] = useState(1);

  const getParkins = async (page = 1) => {
    let url = "parqueo/?";
    let params = `page=${page}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setParkins(response.pageInfo.parkins);
      setPageInfo(response.pageInfo)
      console.log(response);
    }
  };
  const createParking = async (parking) => {
    let url = "parqueo/create";
    const response = await APISERVICE.post(parking, url);
    if (response.status === 201) {
      console.log("Parqueo agregado exitosamente!");
    }
    getParkins();
  };
  const updateParking = async (parking) => {
    let url = `parqueo/update?`;
    let params = `id=${parking.id}`;
    const response = await APISERVICE.post(parking, url, params);
    if (response.status === 200) {
      console.log("Usuario Actualizado");
    }
    getParkins();
  };
  const deleteParking = async (id) => {
    let url = "parqueo/delete?";
    let params = `id=${id}`;
    const response = await APISERVICE.delete(url, params);
    if (response.status === 200) {
      getParkins();
      console.log("Parqueo eliminado con exito!");
    }

  };

  console.log(parkins);
  useEffect(() => {
    getParkins();
  }, []);

  return (
    <div className="container-user">
      <h1 className="color-main mt-4 mb-4">Parqueo</h1>
      <button className="btn-main btn-main__purple mb-3" onClick={()=>setModalShow(true)}>Nuevo</button>
      <ParkingTable
        parkins={parkins}
        deleteParking={deleteParking}
        setParkingUpdate={setParkingUpdate}
        setModalShow={setModalShow}
        pageInfo={pageInfo}
        getUsers={getParkins}
      />
      <ParkingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        createParking={createParking}
        parkingUpdate={parkingUpdate}
        setParkingUpdate={setParkingUpdate}
        updateParking={updateParking}
      />
    </div>
  );
}
