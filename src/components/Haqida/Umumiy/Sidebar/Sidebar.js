import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Sidebar() {
    function tops() {
        window.scrollTo(0, 0)
    }

    return (
        <div className='haqida_left'>
            <div className='umumiy'>
                <p> <b>Umumiy</b></p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/about">Institut tarixi</Link> </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/rahbariyat" > Institut rahbariyati </Link>  </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/tashkilot"> Tashkilot jadvali </Link> </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/kengash" > Kengash qarorlari </Link>  </p>
                <p> <Link className='sidebar__link' activeClassName="active" onClick={tops} to="/umumiy">  Umumiy ma'lumotlar  </Link>  </p>
                <p> </p>
            </div>

            <div className='Mamuriy'>
                <p><b>Ma'muriy birliklar</b></p>
                <p><Link onClick={tops} to="/OTMnizom">OTM nizomi</Link></p>
                <p><Link onClick={tops} to="/rahbariy">Rahbariyat</Link></p>
                <p><Link onClick={tops} to="/markaz"> Markaz va bo'limlar </Link></p>
                <p><Link onClick={tops} to="/fakultetlar">Fakultetlar</Link></p>
                <p><Link onClick={tops} to="#">Kafedralar</Link></p>
                <p><Link onClick={tops} to="#">Jamoat tashkilotlari</Link></p>
                <p><Link onClick={tops} to="#">Ta’lim sifati</Link></p>
                <p> </p>



            </div>
            <div className='Mamuriy'>
                <p><b>TAQIga bir nazar </b></p>
                <p><a onClick={tops} href="#">Xotira Daraxti</a></p>
                <p><a onClick={tops} href="#">TAQI bosqichi</a></p>
                <p><a onClick={tops} href="#">TAQI tasvirlar bilan</a></p>
                <p><a onClick={tops} href="#">TAQIcam</a></p>
                <p><a onClick={tops} href="#">TAQI bir qarashda(image)</a></p>

            </div>
        </div>

    )
}

export default Sidebar
