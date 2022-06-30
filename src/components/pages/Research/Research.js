import React from 'react'
import { Link } from 'react-router-dom';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import ImgExritec from "../pageRoutes/Scientific/imges/events4.png";
import images from "../pageRoutes/Scientific/imges/ilmBino.png"
import "./Research.css"
import ResSid from './ResSid/ResSid';

function Research() {
    return (
        <div>
            <Nav />
            <div className='div_img1'>

            </div>
            <div>

                <div className='IlmiyPage'>
                    <div className='haqida_father'>
                        <ResSid/>
                       
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
