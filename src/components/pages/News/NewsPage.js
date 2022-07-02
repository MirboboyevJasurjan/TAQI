import React from 'react';
import NewsSid from './NewsSid/NewsSid'
import cardImg from './imges/newImg1.png';
import { Row, Col} from 'react-bootstrap';
import './NevsPage.css';
import NewsCards from './NewsCards';
import BannerNews from './newsBanner/BannerNews';

function NewsPage() {

    function createData(title, news, img) {
        return { title, news, img };
    }

     let rows = [
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
                                    <NewsCards idx = {id} title={row.title}  text={row.news}  imagee={row.img} />
                                </Col>
                             ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;