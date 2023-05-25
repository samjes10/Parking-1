import { Table } from "react-bootstrap";

export const placeState = {
  DISPONIBLE: "disponible",
  OCUPADO: "ocupado",
};

const TableParking = ({ placeInformation }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Numero</th>
          <th>Estado</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {placeInformation && placeInformation.length > 0 ? (
          placeInformation.map((place) => (
            <tr key={place.id}>
              <td>{place.numero}</td>
              <td>{place.estado}</td>
              <td>
                {place.estado === placeState.DISPONIBLE ? (
                  <button className="btn-main btn-main__green">Reservar</button>
                ) : (
                  <button className="btn-main btn-main__red">Resevado</button>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td style={{ textAlign: "center" }} colSpan={3}>
              No existe plaza
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
export default TableParking;
