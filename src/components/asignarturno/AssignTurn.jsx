import { useState, useEffect } from "react";
import { APISERVICE } from "../../services/api.service";
import AssignTurnTable from "./AssignTurnTable";
import AssignTurnModal from "./AssignTurnModal";
import './styles/AssignTurn.css'

export default function AssignTurn() {
  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [pageInfo, setPageInfo] = useState(1);
  const [turn, setTurn] = useState([])

  const getUsers = async (page = 1) => {
    let url = "turno-usuario/get-user";
    let params = '';
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setUsers(response);
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
  const getTurno = async () => {
    let url = "turno-usuario/get-turn";
    let params = '';
    const response = await APISERVICE.get(url, params);
    if (response.status === 200) {
      setTurn(response);
    }
  };
  const assignTurn=async(user_id,turn_id)=>{
    let url = `turno-usuario/assign-turn?user_id=${user_id}&turn_id=${turn_id}`;
    let params = '';
    const response = await APISERVICE.get(url, params);

  }

  console.log(users);
  console.log(turn);
  useEffect(() => {
    getUsers();
    getTurno();
  }, []);

  return (
    <div className="container-user">
      <h1 className="color-main mt-4 mb-4">Asignar Turno</h1>
      <button className="btn-nuevo mb-4" onClick={()=>setModalShow(true)}>Nuevo Turno</button>
      <AssignTurnTable
        users={users}
        turn={turn}
        assignTurn={assignTurn}
        pageInfo={pageInfo}
        getUsers={getUsers}
      />
      <AssignTurnModal
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
