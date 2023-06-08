import { useState } from "react"

const CustomerClaim = ({sendClaim}) => {
  
  const [sms, setSms] = useState('')

  const handleSendSms = () => {
    sendClaim(sms)
  }

  return (
    <div className="claim">
      <h5>Quejas y sugerencias</h5>
      <label htmlFor="claim">Mensaje</label>
      <textarea type="text" id="claim" value={sms} onChange={(e) => setSms(e.target.value)} name="sms"></textarea>
      <button className="btn-main btn-main__purple" onClick={handleSendSms}>Enviar</button>
    </div>
  )
}
export default CustomerClaim