import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Button';
import './Markaz.css'
import images from '../../Rasmlar/rasm_1.jpg'
import Nav from '../../../pages/templates/navbar/Nav';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import Sidebar from '../../Umumiy/Sidebar/Sidebar';


function Markaz() {

    function tops() {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <Nav />
            <div className='div_img'>

            </div>

            <div>

                <div className='Sarlavha'>
                    <div className='haqida_father'>
                        <Sidebar />
                        <div className='haqida_reightM'>
                        <Alert  variant="danger" className='haqida__alert'>MARKAZ VA BO’LIMLAR</Alert>
                            <p> <br /> <br />
                            <ul className='markaz__ul'>
                                <li><p><Link onClick={tops} to="/uslubiy"> O’quv-uslubiy bo’lim</Link></p></li>
                                <li><p><Link onClick={tops} to="#"> Ilmiy bo’lim</Link></p></li>
                                <li><p><Link onClick={tops} to="#"> Yoshlar bilan ishlash, manaviyat va ma’rifat bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#"> Ta’lim sifati</Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Xalqaro aloqalar bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Xodimlar bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Reja - moliya bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Buyurtma portfelini shakillantirish bitiruvchilarni ishga taqsimlash va monitoring bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Buxgalteriya bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Devonxona va arxiv </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Axborot resurs markazi </Link></p></li>
                                <li><p><Link onClick={tops} to="#">  Monitoring  va ichki nazorat bo’limi </Link></p></li>
                                <li><p><Link onClick={tops} to="#"> Axborot texnologiyalari markazi </Link></p></li>
                                <li><p><Link onClick={tops} to="#"> Malaka oshirish markazi </Link></p></li>
                                <li><p><Link onClick={tops} to="#"> Qurilish sohasidagi menejerlarni qayta tayyorlash va ularning malakasini oshirish markazi </Link></p></li>
                                <li><p><Link onClick={tops} to="#"> Taxririy-nashriyot bo’limi </Link></p></li>
                            </ul>
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterNav />
        </>
    );
}

export default Markaz;