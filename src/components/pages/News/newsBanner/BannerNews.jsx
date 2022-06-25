import React from 'react';
import { Link } from 'react-router-dom'
import NewsPage from '../NewsPage';
import NewsSid from '../NewsSid/NewsSid';
import cardImg from '../imges/newImg1.png'

function BannerNews(props) {
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

    let inde = props.idx
    console.log(inde);

    return (
        <div>
            <div className='div_img1'></div>
            <div className='NewsPage'>
                <div className='haqida_father'>
                    <NewsSid />
                    <div className='haqida_reight'>
                        <div className='imgBanner'>
                            <center>
                                <img src='' alt="" />
                            </center>
                        </div>
                        <center>
                            <h2>Hola {props.idx}</h2>
                        </center>
                        <left>
                            <p>{rows[2].news} </p>
                        </left>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BannerNews;