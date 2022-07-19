import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import NewsPage from '../NewsPage';
import NewsSid from '../NewsSid/NewsSid';
import cardImg from '../imges/newImg1.png'
import { IdContest } from '../NewsCards'
import axios from 'axios';

function BannerNews(props) {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://62373d82f5f6e28a154abef5.mockapi.io/news`)

            setArticles(response.data)
            console.log(response.data)
            console.log('response')
        }
        getArticles()
    }, []);



    return (
        <div>
            <div className='div_img1'></div>
            <div className='NewsPage'>
                <div className='haqida_father'>
                    <NewsSid />
                    <IdContest.Consumer>
                        {
                            id => {
                                console.log(id);
                                return (
                                    <>
                                        <div className='haqida_reight'>
                                            <div className='imgBanner'>
                                                <center>
                                                    <img src='' alt="" />
                                                </center>
                                            </div>
                                            <center>
                                                <h2>Hola {id}</h2>
                                            </center>
                                            <left>
                                                <p> Paragraph </p>
                                            </left>
                                        </div>

                                    </>
                                )
                            }
                        }
                    </IdContest.Consumer >
                </div >
            </div >
        </div >


    );
}


export default BannerNews;

{/* <div className='haqida_reight'>
                        <div className='imgBanner'>
                            <center>
                                <img src='' alt="" />
                            </center>
                        </div>
                        <center>
                            <h2>Hola {props.idx}</h2>
                        </center>
                        <left>
                            <p>{rows[2].news} </p> */}
        //                             </left>
        //             </div>
        //     </div>
        // </div>
        // </div >
