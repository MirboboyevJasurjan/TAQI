import React from 'react';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import Nav from '../../../pages/templates/navbar/Nav';
import './tashkilot.css'
import Sidebar from '../Sidebar/Sidebar';
import imgtash from '../../../assets/images/main/bg/jadval.png'
import Image from 'react-bootstrap/Image'

function Tashkilot(props) {
    return (
        <>
            <Nav />
            <div className='div_imgt'></div>
            <div>

                <div className='Sarlavha'>
                    <div className='haqida_father'>
                        <Sidebar />

                        <div className='haqida_right'>
                            {/* <img className='tash' src={imgtash}></img> */}
                            <Image 
                            src={imgtash}
                            className="tash"
                            />
                        </div>
                    </div>
                </div>
            </div>






            <FooterNav />

        </>
    );
}

export default Tashkilot;