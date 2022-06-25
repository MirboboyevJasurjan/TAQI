import React from 'react'
import { Link } from 'react-router-dom';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import ImgExritec from "../pageRoutes/Scientific/imges/events4.png";
import images from "../pageRoutes/Scientific/imges/ilmBino.png"
import "./Acceptance.css"

function Acceptance() {
    return (
        <div>
            <Nav />
            <div className='div_img1'>

            </div>
            <div>

                <div className='IlmiyPage'>
                    <div className='haqida_father'>

                        <div className='haqida_left'>
                            <div className='umumiy'>
                                
                                <p> <a href='#'>Bakalavr </a> </p>
                                <p> <a href='#'>Magistratura </a>  </p>
                                <p> <a href='#'>Tayanch doktarantura (PhD)</a> </p>
                                <p> <a href='#'>Doktarantura (DsC)</a> </p>
                                <p> <a href='#'>Sirtqi bo’lim</a> </p>
                                <p> </p>
                                
                            </div>
                        </div>
                        <div className='haqida_reight'>


                        </div>
                    </div>
                </div>
            </div>
            <FooterNav />
        </div>
    )
}

export default Acceptance
