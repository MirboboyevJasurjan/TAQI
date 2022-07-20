import React, { useState, useEffect } from "react";
import NewsSid from "../NewsSid/NewsSid";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swipper.css";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

function BannerNews(props) {
  const [articles, setArticles] = useState([]);

  const new_id = window.location.pathname.split("/").slice(-1);

  console.log(new_id[0]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://62373d82f5f6e28a154abef5.mockapi.io/news/${new_id}`
      );

      setArticles(response.data);
      console.log(response.data);
    };
    getArticles();
  }, []);

  return (
    <div className="bannerNewsConainer">
      <div className="div_img1"></div>
      <div className="NewsPage">
        <div className="haqida_father">
          <NewsSid />
          <>
            <div className="haqida_reight">
              <div className="imgBanner">
                <center>
                  <img src={articles.image} alt="" />
                </center>
              </div>
              <center>
                <h2>{articles.title}</h2>
              </center>
              <left>
                <p>{articles.description}</p>
              </left>

              {/* Albom gallery  */}

              <>
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default BannerNews;
