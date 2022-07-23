import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Haqida/Umumiy/Sidebar/Sidebar.css"
import { CgMenuGridO } from "react-icons/cg";

const EventSid = () => {
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
                    <div className="umumiy">
                        <p> <b><Link className='sidebar__link' activeClassName="active" onClick={tops} to="/tadbir1"> Institut Yangiliklari  </Link> </b> </p>
                        <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="#"> Rejalashtirilgan tadbirlar </Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventSid
