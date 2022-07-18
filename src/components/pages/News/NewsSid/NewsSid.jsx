import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NewsSid.css'
import { CgMenuGridO } from "react-icons/cg";
import '../../../Haqida/Umumiy/Sidebar/Sidebar.css';
import '../../../Haqida/Umumiy/Sidebar/Lsidebar.css';

function NewsSid() {
    function tops() {
        window.scrollTo(0, 0)
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
                    <div className='umumiy'>
                        <p> <b>  </b> </p>
                        <p> <b><Link className='sidebar__link' activeClassName="active" onClick={tops} to="/news"> Habarlar </Link> </b> </p>
                        <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/news"> Yangiliklar </Link> </p>
                        <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/elonlar" > E'lonlar </Link> </p>
                        <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/ommaviy"> Ommaviy tadbirlar </Link> </p>
                        <p> </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsSid