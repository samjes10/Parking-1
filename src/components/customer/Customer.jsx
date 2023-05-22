import { useState, useEffect } from "react";
import CustomerTable from "./CustomerTable";
import { APISERVICE } from "../../services/api.service";
import '../customer/styles/Customer.css'

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  const [pageInfo, setPageInfo] = useState(1);

  const getCustomers = async (page = 1) => {
    let url = "cliente/?";
    let params = `page=${page}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setCustomers(response.pageInfo.customers);
      setPageInfo(response.pageInfo)
      console.log(response);
    }
  };
  const blockCustomer = async (id) => {
    let url = `cliente/disable-client?`;
    let params = `id=${id}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      console.log("Cliente Actualizado");
    }
    getCustomers();

  };

  console.log(customers);
  useEffect(() => {
    getCustomers();
  }, []);
  
  return (
    <div className="container-customer">
      <h1 className="color-main mt-4 mb-4">Clientes</h1>
      <CustomerTable
        customers={customers}
        blockCustomer={blockCustomer}
        pageInfo={pageInfo}
        getCustomers={getCustomers}
      />
    </div>
  );
}
