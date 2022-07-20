import React from 'react'
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import "./Acceptance.css"
import QabulSid from './QabulSid/QabulSid';

function Acceptance() {
    return (
        <div>
            <Nav />
            <div className='div_img1'>

            </div>
            <div>

                <div className='IlmiyPage'>
                    <div className='haqida_father'>

                        <QabulSid/>
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
