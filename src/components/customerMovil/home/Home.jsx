import { useEffect, useState } from "react";
import Seeker from "./Seeker";
import TableParking from "./TableParking";
import { APISERVICE } from "../../../services/api.service";

const APIURLIMG = import.meta.env.VITE_REACT_APP_API_URL_IMG;

const HomeCustomer = ({ information, setPlaceNumberGlobal, setView, infoReserve }) => {
  const [placeNumber, setPlaceNumber] = useState("");
  const [placeInformation, setPlaceInformation] = useState({});

  const getParkingSpace = async () => {
    const url = "plaza/get-place?";
    const params = `placeNumber=${placeNumber}`;
    const { success, placeInformation } = await APISERVICE.get(url, params);
    if (success) {
      setPlaceInformation(placeInformation);
    } else {
      setPlaceInformation([]);
    }
  };

  const searchPlaza =  <div>
  <Seeker
    placeNumber={placeNumber}
    setPlaceNumber={setPlaceNumber}
    getParkingSpace={getParkingSpace}
    setPlaceInformation={setPlaceInformation}
  />
  <TableParking
    setView={setView}
    placeInformation={placeInformation}
    setPlaceNumberGlobal={setPlaceNumberGlobal}
  />
</div>

  return (
    <section className="home">
      <h5>Imagen de Parqueo</h5>
      <div className="home-img">
        <img src={`${APIURLIMG}${information.foto}`} alt="foto parqueo" />
      </div>

      {Object.keys(infoReserve).length === 0 && searchPlaza}
    </section>
  );
};
export default HomeCustomer;
