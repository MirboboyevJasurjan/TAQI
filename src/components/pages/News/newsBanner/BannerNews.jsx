import React, { useState, useEffect } from "react";
import NewsSid from "../NewsSid/NewsSid";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./swipper.css";
import "./BannerNews.css";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import Nav from "../../templates/navbar/Nav";
import FooterNav from "../../templates/footer/FooterNav";

function BannerNews(props) {
  const [articles, setArticles] = useState([]);

  const new_id = window.location.pathname.split("/").slice(-1);
  console.log(new_id[0]);

// // Carousel Images
  // let arr = ["https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-1.jpg", "https://swiperjs.com/demos/images/nature-1.jpg"]
  
  // const response = axios.get(`https://62373d82f5f6e28a154abef5.mockapi.io/news/`);

  // Images
  

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://62373d82f5f6e28a154abef5.mockapi.io/news/${new_id}`
        );
      

      setArticles(response.data);
     };
    getArticles();
  }, []);


  return (
    <>
      <div className="bannerNewsConainer">
        <Nav />
        <div className="div_img1"></div>
        <div className="NewsPage" id="newsPageId">
          <div className="haqida_father" id="bannerHaqida">
            <div className="haqida_father_box">
              <NewsSid id="NewSidId"  />
              <div className="haqida_reight" id="bannerNewsContainerBox" >

                <div className="imgBannerTitle">
                  <h2 className="newsBannerTitle" >{articles.title}</h2>
                </div>

                <div className="newsBannerContentDoub">
                  <div className="newsBannerDescr">
                    <p>{articles.description}</p>
                  </div>

                  <div className="newsBannerImg">
                    <img src={articles.image} alt="" />
                  </div>
                </div>

              </div>
            </div>
          </div>



            <div className="swiperBox">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                navigation={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
              >

                {
                  arrVid.map(e => {
                    return (
                      <SwiperSlide>
                        <img src={e} alt="TAQI" />
                      </SwiperSlide>
                    )
                  })
                }

              </Swiper>
            </div>
          </div>
        </div>
        <FooterNav/>
      {/* </div> */}
    
    </>
  );
}
export default BannerNews;