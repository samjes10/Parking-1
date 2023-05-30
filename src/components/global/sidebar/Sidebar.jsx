import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { FaBars, FaMoneyBillAlt,FaParking } from "react-icons/fa";
import { MdDashboard, MdInsertInvitation } from "react-icons/md";
import { HiUsers,HiOutlineDocumentReport } from "react-icons/hi";
import { AiFillCustomerService } from "react-icons/ai";
import { BsInfoSquareFill,BsExclamationCircleFill } from "react-icons/bs";
import { GiDiscussion} from "react-icons/gi"
import {TbParking} from "react-icons/tb"
import { NavLink } from "react-router-dom";
import "./styles/Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/parqueo",
      name: "Parqueo",
      icon: <TbParking />,
    },
    {
      path: "/informacion",
      name: "Informacion",
      icon: <BsInfoSquareFill />,
    },
    {
      path: "/usuarios",
      name: "Usuarios",
      icon: <HiUsers />,
    },
    {
      path: "/solicitud",
      name: "Solicitudes",
      icon: <MdInsertInvitation />,
    },
    {
      path: "/tarifas",
      name: "Tarifas",
      icon: <FaMoneyBillAlt />,
    },
    {
        path: "/reclamos",
        name: "Reclamos",
        icon: <BsExclamationCircleFill />,
      },
      {
        path: "/plazas",
        name: "Plazas",
        icon: <FaParking />,
      },
    {
      path: "/customers",
      name: "Clientes",
      icon: <AiFillCustomerService />,
    },
    {
        path: "/asignar",
        name: "Asignar Turno",
        icon: <GiDiscussion />,
      },
      {
        path: "/reportes",
        name: "Reportes",
        icon: <HiOutlineDocumentReport />,
      },
  ];
  console.log(isOpen)
  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "260px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img style={{ height: "40px" }} src={logo} />
          </h1>
          <div className="container-bars">
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars ">
            <FaBars style={{ color: "#000000", }} onClick={toggle} />
          </div>
          </div>

        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeclassname="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
