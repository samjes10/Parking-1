import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
const user = useSelector(state=>state.user)
  return (
    <>
      <div className="header-bg">
        <div className="contenedor header">
          <div className="header__logo">
            <img src={require("../../images/logoUmss.png")} alt="imagen" />
          </div>
          <nav className="header__navegacion">
            {user.username ? (<ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/administracion"}>
                  Administracion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/periodo"}>
                  Periodo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/habilitar-docente"}>
                  Habilitar Docente
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/reportes"}>
                  Reportes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-logout"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                  }
                </Link>
              </li>
            </ul>):''}
            
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
