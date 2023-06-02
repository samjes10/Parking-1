import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global/global.css";
import AuthGuar from "./guard/AuthGuard";
import Private from "./components/pages/private/Private";
import Login from "./components/pages/login/Login";
import Public from "./components/pages/public/Public";
import CustomerPage from "./components/customerMovil/CustomerPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthGuar/>}>
          <Route path="/*" element={<Private/>}/>
        </Route>
        <Route path="/client/*" element={<Public/>}/>
        <Route path="/customer-page" element={<CustomerPage />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
