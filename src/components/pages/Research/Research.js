import React from 'react'
import { Link } from 'react-router-dom';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import ImgExritec from "../pageRoutes/Scientific/imges/events4.png";
import images from "../pageRoutes/Scientific/imges/ilmBino.png"
import "./Research.css"

function Research() {
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
                                <p><b>Ilmiy-tadqiqot markazlari va laboratoriyalariTadqiqotchilar uchun</b> </p>
                                <p><a href='#'>Ilmiy-tadqiqot markazlari ro'yxati</a> </p>
                                <p> <a href='#'>Laboratoriyalar ro'yxati</a>  </p>
                                <p> <a href='#'> Markaziy Laboratoriya</a> </p>

                                <p> </p>

                                <p><b>Tadqiqotchilar uchun</b> </p>
                                <p><a href='#'>Tadqiqot @ TAQI</a> </p>
                                <p> <a href='#'>Homiylik loyihalari idorasi</a>  </p>
                                <p> <a href='#'>Texnologiyalar</a> </p>
                                <p> <a href='#'>Transferi Byurosi</a> </p>
                                <p> <a href='#'>TAQI tezislar to'plami qidiruv</a> </p>
                                <p> <a href='#'>TAQI tezislar to'plami qidiruv</a> </p>
                                
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

export default Research
