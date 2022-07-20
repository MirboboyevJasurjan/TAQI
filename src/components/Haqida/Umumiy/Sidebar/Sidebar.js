import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { CgMenuGridO } from "react-icons/cg";

function Sidebar() {
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
            <p className="umumiy__child">{" "}<b>Umumiy</b></p>
            <p className="umumiy__child">{" "}<Link className="sidebar__link" activeClassName="active" onClick={tops} to="/about" >Institut tarixi</Link>{" "}</p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="/rahbariyat" >Institut rahbariyati{" "}</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="/tashkilot" >Tashkilot jadvali{" "}</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="/kengash" >Kengash qarorlari{" "}</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="/umumiy" >Umumiy ma'lumotlar{" "}</Link></p>
            <p className="umumiy__child"> </p>
          </div>

          <div className="Mamuriy">
            <p className="umumiy__child"><b>Ma'muriy birliklar</b></p>
            <p className="umumiy__child"><Link onClick={tops} to="/OTMnizom">OTM nizomi</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="/rahbariy">Rahbariyat</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="/markaz">{" "}Markaz va bo'limlar{" "}</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="/fakultetlar">Fakultetlar</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="/kafedralar">Kafedralar</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Jamoat tashkilotlari</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Ta’lim sifati</Link></p>
            <p className="umumiy__child"> </p>
          </div>
          <div className="Mamuriy">
            <p className="umumiy__child"><b>TAQIga bir nazar </b></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Xotira Daraxti</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">TAQI bosqichi</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">TAQI tasvirlar bilan</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">TAQIcam</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">TAQI bir qarashda</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
