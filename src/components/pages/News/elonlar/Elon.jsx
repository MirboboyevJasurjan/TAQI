import React from 'react';
import { Link } from 'react-router-dom'
import NewsSid from '../NewsSid/NewsSid';
import cardImg from '../imges/newImg1.png';
import { Row, Col, Card } from 'react-bootstrap';
import './Elon.css';


function Elonlar() {

    function createData(title, news, img) {
        return { title, news, img };
    }


    const rows = [
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    ];

    return (
        <div>
            <div className='div_img1'></div>

            <div className='NewsPage'>
                <div className='haqida_father'>
                    <NewsSid />
                    <div className='haqida_reight'>

                        <Row xs={1} md={4} className="g-4">
                            {rows.map((row, id) => (
                                <Col>
                                    <Card className='newsP__card'>
                                        <Card.Img variant="top" src={row.img} className='newsP__card__img' />
                                        <p className='newsText'>{row.title}</p>
                                        {/* <span className='newsText'>{row.news}</span> */}
                                        <Card.Body className='newsP__card__body' >
                                            <p ><Link to="#" className='card__down'  pagin={id}  > Davomi </Link></p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Elonlar;