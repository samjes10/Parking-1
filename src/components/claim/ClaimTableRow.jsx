const ClaimTableRow = ({claim}) => {
  return (
    <tr>
        <td>{claim.nombre}</td>
        <td>{claim.mensaje}</td>
    </tr>
  )
}
export default ClaimTableRow