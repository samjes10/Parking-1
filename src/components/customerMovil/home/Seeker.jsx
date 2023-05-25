const Seeker = ( {setPlaceNumber, plateNumber, getParkingSpace} ) => {
  return (
    <div className="seeker">
        <input type="text" placeholder="numero de plaza" onChange={(e) => setPlaceNumber(e.target.value)}/>
        <button className="btn-main btn-main__purple" onClick={() => getParkingSpace()}>Buscar</button>   
        <button className="btn-main btn-main__red" onClick={() => setPlaceNumber('')}>Limpiar</button>   
    </div>
  )
}
export default Seeker