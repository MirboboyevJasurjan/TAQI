import  React  from "react";
import { Link } from 'react-router-dom';
import images from '../../Rasmlar/rasm_1.jpg'
import Nav from '../../../pages/templates/navbar/Nav';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import Sidebar from '../../Umumiy/Sidebar/Sidebar';
import { Row, Col, Card } from 'react-bootstrap'
import ercan from '../../../assets/images/about/images/ercan_kahya.png'
import person1 from '../../../assets/images/about/images/person1.png';
import person2 from '../../../assets/images/about/images/person2.png';
import person3 from '../../../assets/images/about/images/person3.png';
import person4 from '../../../assets/images/about/images/person4.png';
import './Rahbariy.css'

function Rahbariy() {

    function tops() {
        window.scrollTo(0, 0)
    }

    function createData(job, name, image) {
        return { job, name, image };
    }


    const rows = [
        createData('O’quv ishlari bo’yicha prorektor', 'Mirisayev Abdullo Ulmasovich', person1),
        createData('O’quv ishlari bo’yicha prorektor', 'Mirisayev Abdullo Ulmasovich', person2),
        createData('O’quv ishlari bo’yicha prorektor', 'Mirisayev Abdullo Ulmasovich', person3),
        createData('O’quv ishlari bo’yicha prorektor', 'Mirisayev Abdullo Ulmasovich', person4)
    ];

    return (
        <>
            <Nav />
            <div className='div_img21'>

            </div>

            <div>

                <div className='Sarlavha'>
                    <div className='haqida_father'>
                        <Sidebar />
                        <div className='haqida_reight'>
                            <Row xs={1} md={1} className="g-4" >
                                <Col >
                                    <Card className='dr__card'>
                                        <Card.Img variant="top" src={ercan} alt='Ercan Kahya' className='dr__img' />
                                        <h5 className='dr__name'>Ercan Kahya</h5>
                                        <h6 className='dr__job'>Rektor</h6>
                                        <Card.Body className='dr__body' >
                                            <p ><Link to="#" className='card__down' > CV </Link></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <br /> <br />

                            <Row xs={1} md={4} className="g-4 row_rahbariy">
                                {rows.map((row, id) => (
                                    <Col>
                                        <Card className='rahbariy__card ' >
                                            <Card.Img variant="top" src={row.image} className='rahbariy__card__img' />
                                            <h6 className='card__name'>{row.name}</h6><br />
                                            <h6 className='card__job'>{row.job}</h6>
                                            <Card.Body className='card__body' >
                                                <p ><Link to="/qarorlar" className='card__down' > CV </Link></p>
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

export default Rahbariy;