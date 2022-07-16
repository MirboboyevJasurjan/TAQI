import React from 'react'
import { Link } from 'react-router-dom';
import './NewsSid.css'

function NewsSid() {
    function tops() {
        window.scrollTo(0, 0)
    }

    return (
        <div className='haqida_left'>
            <div className='umumiy'>
                <p> <b>  </b> </p>
                <p> <b><Link className='sidebar__link' activeClassName="active" onClick={tops} to="/news"> Habarlar </Link> </b> </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/news"> Yangiliklar </Link> </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/elonlar" > E'lonlar </Link> </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/ommaviy"> Ommaviy tadbirlar </Link> </p>
                <p> </p>
            </div>

        </div>

    )
}

export default NewsSid
