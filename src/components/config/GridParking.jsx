import { GiPathTile } from "react-icons/gi";
import "./styles/Config.css";

export default function GridParking({ plazas, parkins, setModalShow,setPlazaUpdate }) {
  const handleHabilitar = (card) => {
    setPlazaUpdate(card)
    setModalShow(true);
    console.log(card)
  
  };
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${parkins.nro_columnas}, 1fr)`, gridTemplateRows: `repeat(${parkins.nro_filas}, 1fr)` }}
      className="grid-container"
    >
      {plazas.map((card) => (
        <div key={card.id} className={card.habilitado?"card":""}>
          <button className="btn-card" onClick={() => handleHabilitar(card)}>
            {card.habilitado ? <h2 className="numero">{card.numero}</h2>:<GiPathTile className="icon-path"/>}
            
          </button>
        </div>
      ))}
    </div>
  );
}
