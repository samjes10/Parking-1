const ReserveInfo = ({infoReserve}) => {
 
  const notExistReserve = <>
         <h5>Informacion de reserva de Parqueo</h5>
      <p>No existe ninguna reserva aun!</p>
      <button className="btn-main btn-main__purple">Reservar</button>
  </>

  return (
    <div>
        {
           infoReserve && Object.keys(infoReserve).length > 0 ? 
           <div>
            <h5>Informacion de reserva de parqueo</h5>
            <p>Numero de parqueo asignado: </p>
            <p>Estado del parqueo: </p>
            <p>Fecha de inicio: {infoReserve.fecha_inicio}</p>
            <p>Fecha de Finalizacion: {infoReserve.fecha_fin}</p>
           </div>
            :
            <p>Reserva</p>
        }
    </div>
  )
}
export default ReserveInfo