import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/user/User";
import "./styles/global/global.css";
import Customer from "./components/customer/Customer";
import Sidebar from "./components/global/sidebar/Sidebar";
import Header from "./components/global/header/Header";
import Information from "./components/information/Information";
import Tarifa from "./components/pago/Tarifa";
import AssignTurn from "./components/asignarturno/AssignTurn";
import CustomerPage from "./components/customerMovil/CustomerPage";
import Claim from './components/claim/Claim'
import ParkingRequest from './components/ParkingRequest/ParkingRequest'
import Parking from "./components/Parking/Parking";
function App() {
  const aux=true;
  return (
    <BrowserRouter>
      {aux ? (
        <Sidebar>
          <Header>
            <Routes>
              <Route path="/usuarios" element={<User />} />
              <Route path="/customers" element={<Customer />} />
              <Route path="/informacion" element={<Information />} />
              <Route path="/tarifas" element={<Tarifa />} />
              <Route path="/asignar" element={<AssignTurn />} />
              <Route path="/reclamos" element={<Claim/>} />
              <Route path="/solicitud" element={<ParkingRequest/>} />
              <Route path="/parking" element={<Parking/>} />
            </Routes>
          </Header>
        </Sidebar>
      ) : (
        <Routes>
          <Route path="/customer-page" element={<CustomerPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
