import { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap"
const APIURLIMG = import.meta.env.VITE_REACT_APP_API_URL_IMG;

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
  idCustomer: 0,
  fechaInicio: '',
  fechaFin: ''
};

export const payTypes = {
  EFECTIVO: "efectivo",
  QR: "qr",
};

let dateEnd = '';

const date = new Date().toLocaleDateString();
//let hour = new Date().toLocaleTimeString();
const ModalNewReserve = ({show, onHide, tarifas, information, customers, dates, reserve}) => {
  const [reserveInfo, setReserveInfo] = useState(initialState);
  const [fullDate, setFullDate] = useState({'hour': '', 'date': ''})

  useEffect(() => {
    const e = setInterval(() => {
      const hour = new Date().toLocaleTimeString();
      setFullDate({'hour': hour, 'date': date})
    },1000)
  
    return () => {
      clearInterval(e)
    }
  }, [])
  
/*   useEffect( () => {
    calculateDateEnd();
  }, [reserveInfo]) */

  const handleOnChangeFile = (e) => {
    setReserveInfo({ ...reserveInfo, [e.target.name]: e.target.files[0] });
  };
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
  };

  const handleReserve = () => {
    let total = reserveInfo.meses * (reserveInfo.tarifa / 12).toFixed(0);
    let totalPaid = total === 0 ? reserveInfo.tarifa : total
    reserve({ ...reserveInfo, total: totalPaid, fechaFin: dateEnd });
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
/* Caluclar la feche de finalizacion segun el tipo de tarifa */
  const calculateDateEnd = () => {
    const dateCurrently = new Date();
    const day = dateCurrently.getDate(); 
    const month = dateCurrently.getMonth(); 
    const year = dateCurrently.getFullYear(); 
    const minute = dateCurrently.getMinutes();
    const hour = dateCurrently.getHours();
    const seconds = dateCurrently.getSeconds();
    let newHour = 0;
    let newDate = `${year}-${month + 1}-${day}`
    let newDay = 0;
    let newMonth = 0;
    if(reserveInfo.feeName === 'hora'){
      newHour = hour + Number(reserveInfo.cantidad);
      if(newHour > 23){
        newHour = hour + Number(reserveInfo.cantidad) - 24;
        newDate = `${year}-${month + 1}-${day+ 1}`
      }
      dateEnd =  `${newDate} ${newHour}:${minute}:${seconds}`
    }
    if(reserveInfo.feeName === 'dia'){
      newDay = day + Number(reserveInfo.cantidad - 1);
      if(newDay> 31){
        newDay = day + Number(reserveInfo.cantidad - 1) - 31;
      }
      dateEnd =  `${year}-${month+ 1}-${newDay} 22:00:00`
    }
    if(reserveInfo.feeName === 'mes'){
      newMonth = month + 1 + Number(reserveInfo.cantidad);
      if(newMonth > 12){
        newMonth = month + 1 + Number(reserveInfo.cantidad) - 12;
      }
      dateEnd =  `${year}-${newMonth}-${day} 22:00:00`
    }
    if(reserveInfo.feeName === 'año'){
      dateEnd = dates.fecha_fin_reserva;
    }
  /*   setReserveInfo({
      ...reserveInfo,
      'fechaFin': dateEnd,
    }); */
    return dateEnd;
  }

  const handleOnChangeSample = (e) => {
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.value,
    });
  }

  const handleOnChangeCouta = (e) => {
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChangeRadius = (e) => {
    if (e.target.id === "qr") {
      setReserveInfo({ ...reserveInfo, pago: payTypes.QR });
    } else {
      setReserveInfo({ ...reserveInfo, pago: payTypes.EFECTIVO });
    }
  };

  const handleOnChangeInput = (e) => {
    setReserveInfo({
      ...reserveInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal show={show} centered>
      <Modal.Header>
      <h5>Reservar</h5>
      </Modal.Header>
      <Modal.Body>
      <div className="reserve-header">
        <Form.Control
          type="number"
          value={reserveInfo.cantidad}
          name="cantidad"
          onChange={handleOnChangeQuantity}
          min={1}
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
  
      <div>
        <p>Fecha Inicio: {fullDate.date} {fullDate.hour}</p>
        <p>Fecha Fin: {calculateDateEnd()}</p>
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

      <div>
        <h5>Cliente</h5>
        <Form.Select name="idCustomer" onChange={handleOnChangeSample}>
           <option value="">Selecione un cliente</option>
           {
            customers && customers.map(cus => <option key={cus.id} value={cus.id}>{cus.nombre_completo}</option>)
           }
        </Form.Select>
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

      <button className="btn-main btn-main__purple" onClick={handleReserve}>
        Reservar
      </button>{" "}
      <button
        className="btn-main btn-main__green"
        onClick={() => onHide(false)}
      >
        Cancelar
      </button>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}
export default ModalNewReserve