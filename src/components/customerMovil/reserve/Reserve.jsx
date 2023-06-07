import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ReserveInfo from "../reserveInfo/ReserveInfo";
import { navigationNames } from "../CustomerPage";
const APIURLIMG = "http://localhost:8080/upload/";
export const payTypes = {
  EFECTIVO: "efectivo",
  QR: "qr",
};

const initialState = {
  tarifa: 0,
  tiempo: "",
  pago: "",
  comprobante: "",
  couta: false,
  meses: 0,
  cantidad: 0,
  allowFee: false,
  feeName: "",
};

const Reserve = ({ tarifas, information, placeNumber, reserve, setView }) => {
  const [reserveInfo, setReserveInfo] = useState(initialState);

  const handleOnChange = (e) => {
    let tarifa = tarifas.find((tar) => tar.id == e.target.value);
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.value,
      feeName: tarifa.nombre,
      tarifa: tarifa.costo,
      cantidad: 1,
      allowFee: tarifa.couta ? true : false,
    });
    console.log(reserveInfo);
  };

  const handleChangeRadius = (e) => {
    if (e.target.id === "qr") {
      setReserveInfo({ ...reserveInfo, pago: payTypes.QR });
    } else {
      setReserveInfo({ ...reserveInfo, pago: payTypes.EFECTIVO });
    }
  };

  const handleReserve = () => {
    let total = reserveInfo.meses * (reserveInfo.tarifa / 12).toFixed(0);
    let totalPaid = total === 0 ? reserveInfo.tarifa : total
    reserve({ ...reserveInfo, total: totalPaid });
  };

  const handleOnChangeFile = (e) => {
    setReserveInfo({ ...reserveInfo, [e.target.name]: e.target.files[0] });
  };

  const handleOnChangeCouta = (e) => {
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.checked,
    });
  };

  const handleOnChangeInput = (e) => {
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.value,
    });
  };
  /* Modificar la tarifa segun a la cantidad de tiempo */
  const handleOnChangeQuantity = (e) => {
    let tarifa = tarifas.find((tar) => tar.id == reserveInfo.tiempo);
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.value,
      tarifa: e.target.value * tarifa.costo,
    });
  };

  return (
    <section>
      <h5>Reservar</h5>
      <div className="reserve-header">
        <Form.Control
          type="number"
          value={reserveInfo.cantidad}
          name="cantidad"
          onChange={handleOnChangeQuantity}
        />

        <div>
          <label htmlFor="tiempo">Tiempo</label>
          <Form.Select
            style={{ minWidth: "200px" }}
            value={reserveInfo.tiempo}
            name="tiempo"
            onChange={handleOnChange}
          >
            <option value="">Seleccione tarifa</option>
            {tarifas &&
              tarifas.length > 0 &&
              tarifas.map((tar) => (
                <option key={tar.id} value={tar.id}>
                  {tar.nombre}-{tar.costo}Bs
                </option>
              ))}
          </Form.Select>
        </div>
        <div>
          <label htmlFor="tarifa">Tarifa</label>
          <Form.Control
            style={{ minWidth: "55px" }}
            value={reserveInfo.tarifa}
            readOnly
          />
        </div>
      </div>
      {reserveInfo.allowFee && (
        <div className="reserve-coutas">
          <div className="d-flex gap-2">
            <input
              id="coutas"
              type="checkbox"
              name="couta"
              onChange={handleOnChangeCouta}
              checked={reserveInfo.couta}
            />
            <label htmlFor="coutas">
              <span>Desea pagar en coutas?</span>
            </label>
          </div>
          {reserveInfo.couta && (
            <div className="reserve-coutas-detail">
              <p>
                Tiempo de un {reserveInfo.feeName}: coutas de Bs.{" "}
                {(reserveInfo.tarifa / 12).toFixed(1)}/mes
              </p>
              <p>Cuentos meses pagara?</p>
              <Form.Control
                type="number"
                placeholder="numero de meses (1-11)"
                name="meses"
                value={reserveInfo.meses}
                onChange={handleOnChangeInput}
              />
              <p>
                <span>
                  {" "}
                  Total:{" "}
                  {reserveInfo.meses * (reserveInfo.tarifa / 12).toFixed(0)}
                </span>
              </p>
            </div>
          )}
        </div>
      )}
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
            <>
              <img src={`${APIURLIMG}${information.qr}`} alt="foto de qr" />
              <Form.Control
                style={{ margin: "15px 0px" }}
                type="file"
                onChange={handleOnChangeFile}
                name="comprobante"
              />
            </>
          )}
        </div>
      </div>
      <p>Numero de plaza: {placeNumber.numero}</p>
      <button className="btn-main btn-main__purple" onClick={handleReserve}>
        Reservar
      </button>{" "}
      <button
        className="btn-main btn-main__green"
        onClick={() => setView(navigationNames.HOME)}
      >
        Volver
      </button>
    </section>
  );
};
export default Reserve;
