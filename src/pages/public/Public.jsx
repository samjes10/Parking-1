import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import CustomerPage from "../../customerMovil/CustomerPage"

export default function Public() {
  return (
    <Routes>
         <Route path="/customer-page" element={<CustomerPage />} />
    </Routes>
  )
}