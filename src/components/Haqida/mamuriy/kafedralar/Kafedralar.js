import { React } from "react";
import { Link } from 'react-router-dom';
import images from '../Rasmlar/rasm_1.jpg'
import Nav from "../../../pages/templates/navbar/Nav";
import FooterNav from "../../../pages/templates/footer/FooterNav";
import Sidebar from "../../Umumiy/Sidebar/Sidebar";
import { Row, Col, Card } from 'react-bootstrap';
import image from '../../assets/images/about/images/about888.jpeg';
import person1 from '../../assets/images/about/images/person1.png';
import person2 from '../../assets/images/about/images/person2.png';
import person3 from '../../assets/images/about/images/person3.png';
import person4 from '../../assets/images/about/images/person4.png';
import './Fakultetlar.css'


function Fakultetlar() {

    function tops() {
        window.scrollTo(0, 0)
    }

    function createData(job, name, image) {
        return { job, name, image };
    }

    
    const rows = [
        createData('O’quv ishlari bo’yicha prorektor', 'Mirisayev Abdullo Ulmasovich', person1),
        createData('Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo’yicha birinchi prorektor', 'Abduvaliyev Zafar Maxmudovich', person2),
        createData('Ilmiy ishlar va innovatsiyalar bo’yicha prorektor', 'Nurimbetov Ravshan Ibragimovich ', person3),
        createData('Moliya - iqtisod ishlari bo’yicha prorektor', ' Irgashev Asatulla Abdujalilovich', person4)
    ];
    return (
        <>
            <Nav />
            <div className='div_img'></div>
            <div>
                <div className='Sarlavha'>
                    <div className='haqida_father'>
                        <Sidebar />
                        <div className='haqida_reight'>
                            <Row xs={1} md={1} className="g-4" >
                                <Col className='kaf__row'>
                                    <Card className='kaf__card'>
                                        <div className="kaf__text">
                                            <h5 className='kaf__name'>   lorem10lorem10lorem10lorem10  lorem10lorem10lorem10lorem10 lorem10lorem10lorem10lorem10</h5>
                                            <h6 className='kaf__job'>Rektor</h6>
                                        </div>
                                        <Card.Img variant="top" src={image} alt='Ercan Kahya' className='kaf__img' />
                                    </Card>
                                </Col>
                            </Row>
                            <br /> <br />

                            <Row xs={1} md={4} className="g-4">
                                {rows.map((row, id) => (
                                    <Col>
                                        <Card className='kafedra__card'>
                                            <Card.Img variant="top" src={row.image} className='card__img' />
                                            <h6 className='card__name'>{row.name}</h6><br />
                                            <h6 className='card__job'>{row.job}</h6>
                                            <Card.Body className='card__body' >
                                                <p ><Link to="/qarorlar" className='card__down' > CV yuklash </Link></p>
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                ))}
                            </Row>

                            <br /><br />

                            <Row xs={1} md={1} className="g-4" >
                                <Col className='kaf__row'>
                                    <Card className='kaf__rev__card'>
                                        <div className="kaf__text">
                                        <h5 className='kaf__name'>   lorem10lorem10lorem10lorem10  lorem10lorem10lorem10lorem10 lorem10lorem10lorem10lorem10</h5>
                                        <h6 className='kaf__name'>  10lorem10</h6>

                                        </div>
                                        <Card.Img variant="top" src={image} alt='Ercan Kahya' className='kaf__img' />

                                    </Card>
                                </Col>
                            </Row>
                            <br /> <br />
                            <Row xs={1} md={4} className="g-4">
                                {rows.map((row, id) => (
                                    <Col >
                                        <Card className='kafedra__card'>
                                            <Card.Img variant="top" src={row.image} className='card__img' />
                                            <h6 className='card__name'>{row.name}</h6><br />
                                            <h6 className='card__job'>{row.job}</h6>
                                            <Card.Body className='card__body' >
                                                <p ><Link to="/qarorlar" className='card__down' > CV yuklash </Link></p>
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

export default Fakultetlar;