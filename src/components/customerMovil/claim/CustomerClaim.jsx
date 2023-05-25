const CustomerClaim = () => {
  return (
    <div className="claim">
      <h5>Quejas y sugerencias</h5>
      <label htmlFor="claim">Mensaje</label>
      <textarea type="text" id="claim"> </textarea>
      <button className="btn-main btn-main__purple">Enviar</button>
    </div>
  )
}
export default CustomerClaim