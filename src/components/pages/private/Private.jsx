import { Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Sidebar from "../../global/sidebar/Sidebar";
import Header from "../../global/header/Header";
import Dashboard from "../Dashboard";
import User from "../../user/User";
import Customer from "../../customer/Customer";
import Information from "../../information/Information";
import Tarifa from "../../pago/Tarifa"
import AssignTurn from "../../asignarturno/AssignTurn";
import Claim from "../../claim/Claim";
import ParkingRequest from "../../ParkingRequest/ParkingRequest";
import Parking from "../../Parking/Parking";
import Config from "../../config/Config";
import Plazas from '../../../components/plaza/Plazas'
import Reports from "../../reports/Reports";
import Mora from "../../mora/Mora";
function Private() {
  return (
    <Sidebar>
      <Header>
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/usuarios" element={<User />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/informacion" element={<Information />} />
          <Route path="/tarifas" element={<Tarifa />} />
          <Route path="/asignar" element={<AssignTurn />} />
          <Route path="/reclamos" element={<Claim />} />
          <Route path="/solicitud" element={<ParkingRequest />} />
          <Route path="/parqueo" element={<Parking />} />
          <Route path="/config" element={<Config />} />     
          <Route path="/plazas" element={<Plazas/>} />     
          <Route path="/reportes" element={<Reports/>} />     
          <Route path="/mora" element={<Mora/>} />     

        </Routes>
      </Header>
    </Sidebar>
  );
}
export default Private;
