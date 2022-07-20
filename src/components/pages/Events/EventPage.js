import React from 'react';
import FooterNav from '../templates/footer/FooterNav';
import Nav from '../templates/navbar/Nav';
import eventImg1 from "./imges/events3.png";
import { Row, Col } from 'react-bootstrap';
import NewsCards from '../News/NewsCards';
import EventSid from './eventSid/EventSid';
import './eventPage.css'

export default function EventPage() {
    function createData(title, news, img) {
        return { title, news, img };
    }

    let rows = [
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
        createData('Lorem Ipsum Dolor !', ' Ulmasovich', eventImg1),
    ];

    return (<div>
        <Nav />
        <div className='div_img2'>

        </div>
            <div className='EventPage'>
                <div className='haqida_father'>
                    <EventSid />
                    <div className='haqida_reight'>
                        <Row xs={1} md={4} className="g-4">
                            {rows.map((row, id) => (
                                <Col>
                                    <NewsCards idx={id} title={row.title} text={row.news} imagee={row.img} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        <FooterNav />
    </div>
    )
}
