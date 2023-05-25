import { useState } from "react";
import { Form } from "react-bootstrap";
import ReserveInfo from "../reserveInfo/ReserveInfo";
const APIURLIMG = "http://localhost:8080/upload/";
export const payTypes = {
  EFECTIVO: "efectivo",
  QR: "qr",
};

const initialState = {
  tarifa: 0,
  tiempo: "",
  pago: "",
};

const Reserve = ({ tarifas, information }) => {
  const [reserveInfo, setReserveInfo] = useState(initialState);
  const handleOnChange = (e) => {
    let tarifa = tarifas.find((tar) => tar.nombre === e.target.value);
    console.log(tarifa);
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.value,
      tarifa: tarifa.costo,
    });
  };

  const handleChangeRadius = (e) => {
    if (e.target.id === "qr") {
      setReserveInfo({ ...reserveInfo, pago: payTypes.QR });
    } else {
      setReserveInfo({ ...reserveInfo, pago: payTypes.EFECTIVO });
    }
  };
  return (
    <section>
      <h5>Reservar</h5>
      <div className="reserve-header">
        <div>
          <label htmlFor="tiempo">Tiempo</label>
          <Form.Select
            value={reserveInfo.tiempo}
            name="tiempo"
            onChange={handleOnChange}
          >
            <option value="">Seleccione tarifa</option>
            {tarifas &&
              tarifas.length > 0 &&
              tarifas.map((tar) => <option key={tar.id}>{tar.nombre}</option>)}
          </Form.Select>
        </div>
        <div>
          <label htmlFor="tarifa">Tarifa</label>
          <Form.Control value={reserveInfo.tarifa} readOnly />
        </div>
      </div>

      <div className="reserve-body">
        <h5>Selecione un metodo de pago.</h5>
        <div className="reserve-body__types">
          <input
            type="radio"
            name="pago"
            id="efectivo"
            onChange={handleChangeRadius}
          />
          <label htmlFor="efectivo">Pago Efectivo</label>
          <input
            type="radio"
            name="pago"
            id="qr"
            onChange={handleChangeRadius}
          />
          <label htmlFor="qr">Pago Qr</label>
        </div>
        <div className="qr-img">
          {reserveInfo.pago === payTypes.QR && (
            <img src={`${APIURLIMG}${information.qr}`} alt="foto de qr" />
          )}
        </div>
      </div>
    </section>
  );
};
export default Reserve;
