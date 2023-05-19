import edit from '../../assets/edit.png'
import borrar from '../../assets/borrar.png'
export default function UserTableRow({   
    user,
    deleteUser,
    setUserUpdate,
    setModalShow, }) {
  const handleEditUser = () => {
    setUserUpdate(user);
    setModalShow(true);
    
  };
  const handleDeleteCustomer = () => {
    console.log(user.id)
    deleteUser(user.id)
  };

  return (
    <tr>
      <td>{user.nombre}</td>
      <td>{user.email}</td>
      <td>{user.rol}</td>
      <td className="col-2" style={{ textAlign: "center" }}>
        <button className="btn-user" onClick={() => handleEditUser()}><img className='img-user' src={edit} alt='icon-edit'/></button>
        <button className="btn-user" onClick={() => handleDeleteCustomer()}><img className='img-user' src={borrar} alt='icon-delete'/></button>
      </td>
    </tr>
  );
}
