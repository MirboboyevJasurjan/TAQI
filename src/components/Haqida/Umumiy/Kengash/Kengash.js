import React from 'react';
import { Link } from 'react-router-dom';
import './Kengash.css'
import logo from '../../../assets/images/about/images/logoTaqi.png'
import Nav from '../../../pages/templates/navbar/Nav';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import { FaAngleLeft } from 'react-icons/fa';
import { Row, Col, Card } from 'react-bootstrap'

function Kengash(props) {
    return (
        <>
            <Nav />
            <div className='div_img banner__qaror'>
            </div>
            <div>

                <div className='Sarlavha'>
                    <div className='haqida_father'>
                        <div className='haqida_left'>
                            <div className='umumiy'>
                                <p><b><Link to="about">Umumiy</Link></b> </p>
                                <p> <Link to="/kengash">Kengash qarorlari</Link></p>
                                <p> <Link to="/qarorlar" > Institut qarorlari </Link>  </p>
                                <br /><br /><br />
                                <p className='umumiy__ortga'> <Link to="about" className='umumiy__ortga'> <FaAngleLeft /> Ortga </Link> </p>
                            </div>
                        </div>

                        <div className='haqida_reight'>

                            <Row xs={1} md={4} className="g-4">
                                {Array.from({ length: 8 }).map((_, idx) => (
                                    <Col>
                                        <Card className='qarorlar__card'>
                                            <p className='card__index' >№ {idx + 1}</p>
                                            <Card.Img variant="top" src={logo} className='card__img' />
                                            <Card.Body className='card__body' >
                                                <p ><Link to="/qarorlar" className='card__down' > Yuklab Olish </Link></p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                        </div>
                    </div>
                </div>
            </div>
            <FooterNav />
        </>
    );
}

export default Kengash;