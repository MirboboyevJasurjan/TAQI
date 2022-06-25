import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../../templates/footer/FooterNav';
import Nav from '../../templates/navbar/Nav';
import ImgExritec from "./imges/events4.png";
import images from "./imges/ilmBino.png"
import "./ilmiyPage.css"
import Sidebar from '../../../Haqida/Umumiy/Sidebar/Sidebar';

export default function IlmiyPage() {
    return <div >
        <Nav />
        <div className='div_img3'>

        </div>

        <div>

            <div className='IlmiyPage'>
                <div className='haqida_father'>
                    <Sidebar />
                    <div className='haqida_reight'>

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>
                        <div className='row medCenter'>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>
                        <div className='row '>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card'>
                                    <img className="imgNews" src={ImgExritec} alt="my-img" />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <FooterNav />
    </div>;
}
