import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/user/User";
import "./styles/global/global.css";
import Customer from "./components/customer/Customer";
import Sidebar from "./components/global/sidebar/Sidebar";
import Header from "./components/global/header/Header";
import Information from "./components/information/Information";
import Tarifa from "./components/pago/Tarifa"
import AssignTurn from "./components/asignarturno/AssignTurn";
import CustomerPage from "./components/customerMovil/CustomerPage";

function App() {
  const aux=true;
  return (
    <BrowserRouter>
    {aux?( <Sidebar>
        <Header>

          <Routes>
            <Route path="/usuarios" element={<User />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/informacion" element={<Information />} />
            <Route path="/tarifas" element={<Tarifa />} />
            <Route path="/asignar" element={<AssignTurn/>}/>
          </Routes>
        </Header>
      </Sidebar>):(<Routes>
        <Route path="/customer-page" element={<CustomerPage />} />
      </Routes>)}
     
    </BrowserRouter>
  );
}

export default App;
