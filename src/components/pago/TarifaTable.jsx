import { Table } from "react-bootstrap";
import PayTableRow from "./TarifaTableRow";
import Paginator from "../global/paginador/Paginator";
const PayTable = ({
  payments,
  setProductToEdit,
  showModal,
  setShowModal,
  getPayments,
  infoPage,
  disablePay,
}) => {
  return (
    <Table>
      <thead>
        <tr className="table-head">
          <td style={{ borderTopLeftRadius: "10px" }}>Nombre</td>
          <td>Costo</td>
          <td>Estado</td>
          <td style={{ borderTopRightRadius: "10px", textAlign: "center" }}>
            Acciones
          </td>
        </tr>
      </thead>
      <tbody>
        {payments && payments.length > 0 ? (
          payments.map((pay) => {
            return (
              <PayTableRow
                key={pay.id}
                pay={pay}
                setProductToEdit={setProductToEdit}
                setShowModal={setShowModal}
                disablePay={disablePay}
              />
            );
          })
        ) : (
          <tr>
            <td style={{ textAlign: "center" }} colSpan={4}>
              No existen tarifas
            </td>
          </tr>
        )}
        <tr>
          <td colSpan={5}>
            <Paginator pageInfo={infoPage} getData={getPayments} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PayTable;
