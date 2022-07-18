import React from 'react';
import NewsSid from './NewsSid/NewsSid'
import cardImg from './imges/newImg1.png';
import { Row, Col} from 'react-bootstrap';
import './NevsPage.css';
import NewsCards from './NewsCards';
import BannerNews from './newsBanner/BannerNews';
import { useEffect, useState } from 'react';
import axios from 'axios';

function NewsPage() {
 
    const [rows, setRows] = useState([])
 
    
    
    useEffect(() => {
      const getRows = async () => {
        const response = await axios.get(`https://62373d82f5f6e28a154abef5.mockapi.io/news`)
        
        setRows(response.data)
        console.log(response.data)
        console.log('response')
  
      }
  
      getRows()
    }, []);

    // function createData(title, news, img) {
    //     return { title, news, img };
    // }

    //  let rows = [
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    //     createData('Lorem Ipsum Dolor !', ' Ulmasovich', cardImg),
    // ];

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
                                    <NewsCards idx = {id} title={row.title}  description={row.description}  image={row.image} />
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