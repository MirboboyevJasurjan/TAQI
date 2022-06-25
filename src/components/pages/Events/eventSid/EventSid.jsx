import React from 'react'
import { Link } from 'react-router-dom';


const EventSid = () => {
    function tops() {
        window.scrollTo(0, 0)
    }

    return (
        <div className='haqida_left'>
            <div className='umumiy'>
                <p> <b>  </b> </p>
                <p> <b><Link className='sidebar__link' activeClassName="active" onClick={tops} to="/tadbir1"> Institut Yangiliklari  </Link> </b> </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="#"> Rejalashtirilgan tadbirlar </Link> </p>
                <p> </p>
                <p> </p>
                <p> </p>
            </div>

        </div>




  )
}

export default  EventSid