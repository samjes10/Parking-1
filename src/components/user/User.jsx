import { useState, useEffect } from "react";
import UserTable from "./UserTable";
import { APISERVICE } from "../../services/api.service";
import UserModal from "./UserModal";
import './styles/User.css'

export default function User() {
  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [pageInfo, setPageInfo] = useState(1);

  const getUsers = async (page = 1) => {
    let url = "usuario/?";
    let params = `page=${page}`;
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setUsers(response.pageInfo.users);
      setPageInfo(response.pageInfo)
      console.log(response);
    }
  };
  const createUser = async (user) => {
    let url = "usuario/create-user";
    const response = await APISERVICE.post(user, url);
    if (response.status === 201) {
      console.log("Usuario agregado exitosamente!");
    }
    getUsers();
  };
  const updateUser = async (user) => {
    let url = `usuario/update?`;
    let params = `idUser=${user.id}`;
    const response = await APISERVICE.post(user, url, params);
    if (response.status === 200) {
      console.log("Usuario Actualizado");
    }
    getUsers();
  };
  const deleteUser = async (id) => {
    let url = "usuario/delete?";
    let params = `idUser=${id}`;
    const response = await APISERVICE.delete(url, params);
    if (response.status === 200) {
      getUsers();
      console.log("Usuario eliminado con exito!");
    }

  };

  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="color-main mt-4 mb-4">Usuarios</h1>
      <button className="btn-nuevo mb-4" onClick={()=>setModalShow(true)}>Nuevo</button>
      <UserTable
        users={users}
        deleteUser={deleteUser}
        setUserUpdate={setUserUpdate}
        setModalShow={setModalShow}
        pageInfo={pageInfo}
        getUsers={getUsers}
      />
      <UserModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        createUser={createUser}
        userUpdate={userUpdate}
        setUserUpdate={setUserUpdate}
        updateUser={updateUser}
      />
    </div>
  );
}
