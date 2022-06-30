import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Haqida/Umumiy/Sidebar/Sidebar.css"
import { CgMenuGridO } from "react-icons/cg";

function ResSid() {
  function tops() {
    window.scrollTo(0, 0);
  }
  const [isAcctive, setAcctive] = useState(true);
  function onMenu() {
    setAcctive(!isAcctive);
  }
  return (
    <>
      <div className="menuGridTemp clear1" onClick={onMenu}>
        <CgMenuGridO className="MenuGrid" />
        <span>Ma'lumotlar</span>
      </div>
      <div className={isAcctive ? 'haqida_left' : 'haqida_leftMob'}>
        <div className="innerhaqidaMob">

          <div className="umumiy">
            <p className="umumiy__child"><b>Ilmiy-tadqiqot markazlari va laboratoriyalari</b></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Ilmiy-tadqiqot markazlari ro'yxati</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Laboratoriyalar ro'yxati </Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Markaziy Laboratoriya uchun  </Link></p>
            <p className="umumiy__child"> </p>
          </div>

          <div className="Mamuriy">
            <p className="umumiy__child"><b>Tadqiqotchilar uchun  </b></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Tadqiqot @ TAQI </Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Homiylik loyihalari idorasi </Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Texnologiyalar </Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Transferi Byurosi</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">TAQI tezislar to'plami qidiruv</Link></p>
            <p className="umumiy__child"> </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default ResSid;