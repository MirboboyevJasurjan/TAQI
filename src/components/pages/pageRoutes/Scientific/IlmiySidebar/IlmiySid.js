import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../Haqida/Umumiy/Sidebar/Sidebar.css"
import { CgMenuGridO } from "react-icons/cg";

function IlmiySid() {
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
            <p className="umumiy__child"><b>Ilmiy faoliyat</b></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Fakultetlar (institutlar va maktablar) </Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Litsenziya dasturlari </Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Bitiruvchilar dasturlari</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Xalqaro qo'shma dasturlar</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Xorijiy grantlar va dasturlar</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Ilmiy taqvim</Link></p>
            <p className="umumiy__child"><Link className="sidebar__link" activeClassName="active" onClick={tops} to="#" >Ilmiy katalog </Link></p>
            <p className="umumiy__child"> </p>
          </div>

          <div className="Mamuriy">
            <p className="umumiy__child"><b>Akademik axborot </b></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Dastur malaka axborot paketi</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">TAQI sinf</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">TAQIga kirish</Link></p>
            <p className="umumiy__child"><Link onClick={tops} to="#">Sirtqi ta'lim</Link></p>
            <p className="umumiy__child"> </p>
          </div>
          <div className="Mamuriy">
            <p className="umumiy__child"><b>Talabalar uchun</b></p>
            <p className="umumiy__child"><a onClick={tops} href="#">Akademik qoidalar</a></p>
            <p className="umumiy__child"><a onClick={tops} href="#">Talabalar portali</a></p>
            <p className="umumiy__child"><a onClick={tops} href="#">Xorijiy talabalar</a></p>
            <p className="umumiy__child"><a onClick={tops} href="#">Xalqaro almashinuv dasturi</a></p>
            <p className="umumiy__child"><a onClick={tops} href="#">Talabalar vakillari kengashi</a></p>
          </div>
          <div className="Mamuriy">
            <p className="umumiy__child"><b>Uzluksiz ta'lim markazi </b></p>
            <p className="umumiy__child"><a onClick={tops} href="#">Talabalar uchun o’quv kurslari</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IlmiySid;

