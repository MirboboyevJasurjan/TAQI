import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { CgMenuGridO } from "react-icons/cg";
import { FaAngleLeft } from 'react-icons/fa';

function Lsidebar() {
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
                <span>Sidebar</span>
            </div>
            <div className={isAcctive ? 'haqida_left' : 'haqida_leftMob'}>
                <div className="innerhaqidaMob">
                    <div className="umumiy">
                        <p><b><Link to="about">Umumiy</Link></b> </p>
                        <p> <Link to="/kengash">Kengash qarorlari</Link></p>
                        <p> <Link to="/qarorlar" > Institut qarorlari </Link>  </p>
                        <br /><br /><br />
                        <p className='umumiy__ortga'> <Link to="about" className='umumiy__ortga'> <FaAngleLeft /> Ortga </Link> </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Lsidebar;
