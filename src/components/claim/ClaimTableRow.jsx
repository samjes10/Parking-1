const ClaimTableRow = ({claim}) => {
  return (
    <tr>
        <td>{claim.nombre_completo}</td>
        <td>{claim.mensaje}</td>
    </tr>
  )
}
export default ClaimTableRow