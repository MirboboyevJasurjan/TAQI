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

  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  };

  return (
    <div className="bannerNewsConainer">
      <div className="div_img1"></div>
      <div className="NewsPage">
        <div className="haqida_father">
          <div className="haqida_father_box">
            <NewsSid />
            <div className="haqida_reight">
              <div className="imgBanner">
                <div  >
                  <h2 className="newsBannerTitle" >{articles.title}</h2>
                </div>
              </div>
              <div >
                <p className="newsBannerDescr" >{articles.description}</p>
              </div>
              <div className="newsBannerImg">
                <img src={articles.image} alt="" />
              </div>
            </div>
          </div>

          {/* Width 100% */}

          <div className="fullWid">Tadbirlardan lavhalar</div>

          {/* Albom gallery  */}

          <>
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
      </div>
    </div>
  );
}

export default BannerNews;
