import React, { useState, useEffect } from "react";
import NewsSid from "../NewsSid/NewsSid";
import axios from "axios";

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

  console.log(setArticles);

  return (
    <div>
      <div className="div_img1"></div>
      <div className="NewsPage">
        <div className="haqida_father">
          <NewsSid />
          <>
            <div className="haqida_reight">
              <div className="imgBanner">
                <center>
                  <img src={articles.img} alt="" />
                </center>
              </div>
              <center>
                <h2>{articles.title}</h2>
              </center>
              <left>
                <p>{articles.description}</p>
              </left>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default BannerNews;
