import './reports.css'
import Seeker from './Seeker'
import { ReportsTable } from './ReportsTable'
import {APISERVICE} from '../../services/api.service'
import { useState } from 'react'
const Reports = () => {

    const [paymentsByDay, setPaymentsByDay] = useState([]);

    const getReports = async (body) => {
        const url = 'pago/get-payments-by-day/'
        const { success, payments } = await APISERVICE.post(body, url);
        if(success){
            setPaymentsByDay(payments);
        }
    }

  return (
    <div className='reports'>
        <h5>Reportes</h5>
        <Seeker getReports={getReports}/>
        <ReportsTable payments={paymentsByDay}/>
    </div>
  )
}
export default Reports