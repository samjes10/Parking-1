import { useEffect, useState } from "react";
import Seeker from "./Seeker";
import TableParking from "./TableParking";
import { APISERVICE } from "../../../services/api.service";

const APIURLIMG = "http://localhost:8080/upload/";

const HomeCustomer = ({ information }) => {

  const [placeNumber , setPlaceNumber  ] = useState('')
  const [placeInformation, setPlaceInformation] = useState({})
  const getParkingSpace = async () => {
    const url = 'plaza/get-place?'
    const params = `placeNumber=${placeNumber}`
    const { success, placeInformation } = await APISERVICE.get(url, params);
    if(success){
      setPlaceInformation(placeInformation)
    }else{
      setPlaceInformation([])
    }
  }

  return (
    <section className="home">
      <h5>Imagen de Parqueo</h5>
      <div className="home-img">
        <img src={`${APIURLIMG}${information.foto}`} alt="foto parqueo" />
      </div>

      <div>
        <Seeker placeNumber={placeNumber}  setPlaceNumber={setPlaceNumber} getParkingSpace={getParkingSpace}/>
        <TableParking  placeInformation={placeInformation}/>
      </div>

    </section>
  );
};
export default HomeCustomer;
