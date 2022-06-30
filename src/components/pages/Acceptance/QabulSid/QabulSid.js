import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Haqida/Umumiy/Sidebar/Sidebar.css"
import { CgMenuGridO } from "react-icons/cg";

function QabulSid() {
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
            <p className="umumiy__child"><b>Qabul</b></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Bakalavr</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Magistratura </Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Tayanch doktarantura (PhD)</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Doktarantura (DsC)</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Xalqaro bo'lim</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Sirtqi bo'lim</Link></p>
            <p className="umumiy__child"> </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default QabulSid;
