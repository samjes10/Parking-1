import { useEffect, useState } from "react";
import Seeker from "./Seeker";
import TableParking from "./TableParking";
import { APISERVICE } from "../../../services/api.service";
import PlaceGrilla from "./PlaceGrilla";

const HomeCustomer = ({ information, setPlaceNumberGlobal, setView, infoReserve, parkingInfo, places }) => {
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
      <h5>Parqueo</h5>
      <PlaceGrilla parkingInfo={parkingInfo} places={places}/>

      {Object.keys(infoReserve).length === 0 && searchPlaza}
    </section>
  );
};
export default HomeCustomer;
