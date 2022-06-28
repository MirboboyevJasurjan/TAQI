import React from 'react';
import './Umumiymalumotlar.css'
import { Link } from 'react-router-dom';
import images4 from '../../Rasmlar/unsplash_gMes5dNykus.jpg';
import Nav from '../../../pages/templates/navbar/Nav';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import Sidebar from '../Sidebar/Sidebar';



function UmumiyMalumot(props) {
    return (
        <>
        <Nav />
        <img className="igm_taqi4" src={images4} alt="my-img" />

        <div>

            <div className='Sarlavha'>
                <div className='haqida_father'>
                    <Sidebar />
                    <div className='.haqida_reight'>
                        <h5>
                            Lorem
                            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
                        </h5>
                    </div>
                </div>
            </div>
        </div>

        <FooterNav />
    </>
    );
}

export default UmumiyMalumot;