import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Button';
import images from '../../Rasmlar/rasm_1.jpg'
import Nav from '../../../pages/templates/navbar/Nav';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import Sidebar from '../../Umumiy/Sidebar/Sidebar';
import { Row, Col, Card } from 'react-bootstrap'
import './Uslubiy.css'
import logo from '../../../assets/images/about/images/logoTaqi.png'
import { BiArrowBack } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";

function Uslubiy() {

    function tops() {
        window.scrollTo(0, 0)
    }

    function createData(job, name, image) {
        return { job, name, image };
    }

    const rows = [
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
        createData('Dotsent', 'Sultanov Alisher Sabirjanovich', logo),
    ];

    return (
        <>
            <Nav />
            <div className='div_img'>

            </div>

            <div>

                <div className='Sarlavha'>
                    <div className='haqida_father'>
                        <Sidebar />
                        <div className='haqida_reightt'>
                            <Alert variant="danger" className='haqida__alert'>O'quv-uslubiy bo'lim</Alert>
                            <br /> <br />
                            <Link to="/markaz" className='uslubiy__btnBack' > <BiArrowBack />  </Link> 
                            
                            <br /> <br />
                            <Row xs={1} md={4} className="g-4">
                                {rows.map((row, id) => (
                                    <Col>
                                        <Card className='rahbariy__card'>
                                            <Card.Img variant="top" src={row.image} className='rahbariy__card__img' />
                                            <h6 className='card__name'>{row.name}</h6><br />
                                            <h6 className='card__job'>{row.job}</h6>
                                            <Card.Body className='card__body' >
                                                <Link to="/qarorlar" className='card__down' > CV yuklash </Link>
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

export default Uslubiy;