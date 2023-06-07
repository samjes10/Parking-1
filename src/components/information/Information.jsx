import { InputGroup, Form } from "react-bootstrap";
import "./information.css";
import { useEffect, useState } from "react";
import { APISERVICE } from "../../services/api.service";
import { Toaster, toast } from "react-hot-toast";

const initialState = {
  convocatoria: "",
  qr: "",
  foto: "",
  fecha_pub_conv: "",
  fecha_limite_reserva: "",
  fecha_inicio_reserva: "",
  atencion: "",
  mensaje_mora: "",
  fecha_fin_reserva: '',
};

const Information = () => {
  const [information, setInformation] = useState(initialState);
  
     useEffect (() => {
        getInformation();
    },[])

    const getInformation =  async () =>{
        const url = 'informacion/'
        const { success, information, dates } = await APISERVICE.get(url);
        if(success){
            const informationFull = {...information, ...dates}
            setInformation({...information,... informationFull})
        }
    }


  const handleOnChangeFile = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.files[0] });
  };

  const handleOnChange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    let sms = isValid();
    if (sms === true) {
      const {foto, qr, convocatoria, fecha_inicio_reserva, fecha_limite_reserva, fecha_pub_conv, mensaje_mora, atencion, fecha_fin_reserva} = information;
      const url = "informacion/update-information";
      const body = new FormData();

      const data = {  
        fecha_inicio_reserva,
        fecha_limite_reserva,
        fecha_pub_conv,
        mensaje_mora, 
        atencion,
        fecha_fin_reserva
      }

      body.append("data", JSON.stringify(data));
      body.append("imgQr", qr);
      body.append("imgConvocatoria", convocatoria);
      body.append("imgParking", foto);
      const {success, message} = await APISERVICE.postWithImage(body, url);
      if(success){
        messageToastSuccess(message);
      }else{
        messageToastError(message)
      }
    }else{
       messageToastError(sms)
    }
  };

  const isValid = () => {
    const {fecha_inicio_reserva, fecha_limite_reserva, fecha_pub_conv,fecha_fin_reserva, qr} = information;
    const date = new Date();
    const month = date.getMonth() + 1 > 9 ?  date.getMonth() + 1: '0'+(date.getMonth() + 1);
    const day  = date.getDate() > 9 ?  date.getDate() : "0" + date.getDate() 
    const dateCurrently = `${date.getFullYear()}-${month}-${day}`
    if(qr === ""){
      return 'Foto Qr no debe estar en blanco' 
    }
    if(fecha_fin_reserva === ''){
      return 'Fecha fin reserve no debe estar en blanco' 
    }
    if(fecha_inicio_reserva === ''){
      return 'Fecha inicio reserve no debe estar en blanco' 
    }
    if(fecha_limite_reserva === ''){
      return 'Fecha limite reserve no debe estar en blanco' 
    }
    if(fecha_pub_conv === ''){
      return 'Fecha Inicio de pagos no debe estar en blanco' 
    }
    if(fecha_pub_conv < dateCurrently ||  fecha_pub_conv > fecha_limite_reserva || fecha_pub_conv > fecha_inicio_reserva || fecha_pub_conv > fecha_fin_reserva){
      return 'Revise las fechas'
    }
    if(fecha_limite_reserva < dateCurrently ||  fecha_limite_reserva < fecha_pub_conv  || fecha_limite_reserva > fecha_inicio_reserva || fecha_limite_reserva > fecha_fin_reserva){
      return 'Revise las fechas'
    }
    if(fecha_inicio_reserva < dateCurrently || fecha_inicio_reserva < fecha_pub_conv || fecha_inicio_reserva < fecha_limite_reserva || fecha_inicio_reserva > fecha_fin_reserva){
      return 'Revise las fechas'
    }
    if(fecha_fin_reserva < dateCurrently || fecha_fin_reserva < fecha_pub_conv || fecha_fin_reserva < fecha_limite_reserva || fecha_fin_reserva < fecha_inicio_reserva){
      return 'Revise las fechas'
    }
    return true;
  }

  const messageToastSuccess = (sms) => {
    toast.success(sms);
  }

  const messageToastError = (sms) => {
    toast.error(sms);
  }

  return (
    <section className="information">
      <h3>Informacion</h3>
      <div className="information__form">
        <InputGroup>
          <label className="information__form-label" htmlFor="convocatoria">
            Convocatoria
          </label>
          <Form.Control
            type="file"
            id="convocatoria"
            onChange={handleOnChangeFile}
            /* value={information.convocatoria} */
            name="convocatoria"
          />
        </InputGroup>

        <InputGroup>
          <label className="information__form-label" htmlFor="qr">
            Foto Qr
          </label>
          <Form.Control
            type="file"
            id="qr"
            /* value={information.qr} */
            onChange={handleOnChangeFile}
            name="qr"
          />
        </InputGroup>
{/* 
        <InputGroup>
          <label className="information__form-label" htmlFor="foto">
            Foto de parqueo
          </label>
          <Form.Control
            type="file"
            id="foto"
          
            onChange={handleOnChangeFile}
            name="foto"
          />
        </InputGroup> */}

        <InputGroup>
          <label className="information__form-label" htmlFor="fecha_pub_conv">
            Fecha Inicio de Pagos
          </label>
          <Form.Control
            type="date"
            id="fecha_pub_conv"
            value={information.fecha_pub_conv}
            onChange={handleOnChange}
            name="fecha_pub_conv"
          />
        </InputGroup>

        <InputGroup>
          <label className="information__form-label" htmlFor="fecha_limite_reserva">
            Fecha Limite de Pago
          </label>
          <Form.Control
            type="date"
            id="fecha_limite_reserva"
            value={information.fecha_limite_reserva}
            onChange={handleOnChange}
            name="fecha_limite_reserva"
          />
        </InputGroup>

        <InputGroup>
          <label
            className="information__form-label"
            htmlFor="fecha_inicio_reserva"
          >
            Fecha Inicio Reserva
          </label>
          <Form.Control
            type="date"
            id="fecha_inicio_reserva"
            value={information.fecha_inicio_reserva}
            onChange={handleOnChange}
            name="fecha_inicio_reserva"
          />
        </InputGroup>

        <InputGroup>
          <label
            className="information__form-label"
            htmlFor="fecha_fin_reserva"
          >
            Fecha Fin Reserva
          </label>
          <Form.Control
            type="date"
            id="fecha_fin_reserva"
            value={information.fecha_fin_reserva}
            onChange={handleOnChange}
            name="fecha_fin_reserva"
          />
        </InputGroup>

        <InputGroup>
          <label className="information__form-label" htmlFor="atencion">
            Horario de Atencion
          </label>
          <Form.Control
            type="text"
            id="atencion"
            name="atencion"
            value={information.atencion}
            onChange={handleOnChange}
          />
        </InputGroup>

        <InputGroup>
          <label className="information__form-label" htmlFor="mensaje_mora">
            Mensaje de Mora
          </label>
          <Form.Control
            type="text"
            id="mensaje_mora"
            value={information.mensaje_mora}
            name="mensaje_mora"
            onChange={handleOnChange}
          />
        </InputGroup>
      </div>

      <button className="btn-main btn-main__purple" onClick={handleUpdate}>
        Guardar
      </button>
      <Toaster position="top-right"/>
    </section>
  );
};
export default Information;
