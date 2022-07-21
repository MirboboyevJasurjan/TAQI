import React from 'react'
import './FooterNav.css'
import microsoft from '../../../assets/images/main/Microsoft_icon.png'
import location from '../../../assets/images/main/locat.png'
import magento from '../../../assets/images/main/Magento.png'
import logo from '../../../assets/images/main/logoo.png'
import { ImTelegram } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom'





export default function FooterNav() {
    function ToTop(){
        window.scrollTo(0,0)
      }
    return (
        <div>

            <div className="bg_footer">

                <div className="linebggg">
                    <div className="line_black">

                        <button className='buttoncall'>   <LocalPhoneIcon />ALOQA UCHUN</button>
                        <button className='buttoncall'>MUROJAAT UCHUN</button>
                    </div>
                </div>


                <div className="footerbgg">
                    <div className="footer_contner">

                        <div className="footer_nav">
               
                            <div className="logo_sec_taqi" >
                              
                                <h2>TOSHKENT ARXITEKTURA - QURILISH INSTITUTI</h2>
                                <img src={logo} alt="photo" className="logo_taqi" />
                               
                            </div>


                            <div className="footer_informatsia" id="footerMalumot">
                                <h3>MA'LUMOT</h3>
                                <p> Toshkent arxitektura-qurilish instituti 4ta fakulteti mavjud :<span> <br/> Arxitektura fakulteti, <br/> Bino inshootlar qurilishi fakulteti, <br/> Qurilishni boshqarish fakulteti, <br/> Muxandislik qurilish infrastrukturasi fakulteti </span> </p>
                            </div>

            

                            <div className="footer_informatsia" id="footerSahifalar">
                                <h3>SAHIFALAR</h3>
                                <ul className="footer_ul" >
                                    <li><Link to="/about" className='footerLinks' onClick={ToTop}> Biz haqimizda</Link></li>
                                    <li><Link to="/fakultetlar" className='footerLinks' onClick={ToTop}> Fakultetlar</Link></li>
                                    <li><Link to="/kafedralar" className='footerLinks' onClick={ToTop}> Kafedralar</Link></li>
                                    <li><Link to="/tadbir1" className='footerLinks' onClick={ToTop}> Tadbirlar</Link></li>
                        
                                </ul>
                            </div>

                            <div className="footer_btn" >
                             
                                <button className="btn_footer_page"> <Link to="/ilmiy1" className='footerLinks' onClick={ToTop}>Ilmiy</Link></button>
                                <button className="btn_footer_page"> <Link to="/tadqiqot"className='footerLinks' onClick={ToTop}>Tadqiqot</Link></button>
                                <button className="btn_footer_page"> <Link to="/qabul" className='footerLinks' onClick={ToTop}>Qabul</Link></button>
                                <button className="btn_footer_page"> <Link to="/campus" className='footerLinks' onClick={ToTop}>Campus Life</Link></button>
                            </div>

                        </div>

                    </div>

                    <div className="footer_2">
                        <div className="footer_contner container222">

                            <div className="footer2_informatsia">
                                <h3>MANZIL / ALOQA UCHUN</h3>
                                <p>MANZIL: Toshkent shahar, Navoiy ko'chasi 13-uy,  Email:<span>Devon@taqi.uz</span> Telefon: +99871234-11-78   Ish vaqti: Du-Shan: 9.00 - 18.00</p>
                            </div>

                        </div>
                    </div>

                    <div className="brand_footer" >
                        <p>All rights reserved. QWERTY AL-FAJR | Tashkent, Uzbekistan. </p>
                    </div>

                </div>




            </div>


        </div>
    )
}



