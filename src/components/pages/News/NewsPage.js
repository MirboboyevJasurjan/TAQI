import React from "react";
import NewsSid from "./NewsSid/NewsSid";
import { Row, Col, Card } from "react-bootstrap";
import "./NevsPage.css";
import NewsCards from "./NewsCards";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../templates/navbar/Nav";
import { Link } from "react-router-dom";
import "./NewCards.css";

function NewsPage() {
  const [rows, setRows] = useState([]);
  const arrays = [...rows].reverse().slice(0, 6);
  useEffect(() => {
    const getRows = async () => {
        const response = await axios.get(`https://62373d82f5f6e28a154abef5.mockapi.io/news`);
        // const response = await axios.get(`https://90d5-213-230-72-34.eu.ngrok.io/news`);/
      setRows(response.data);
    };
    getRows();
  }, []);

  return (
    <div>
      <Nav />
      <div className="div_img1"></div>
      <div className="NewsPage">
        <div className="haqida_father">
          <NewsSid />
          <div className="haqida_reight">
            <Row xs={1} md={4} className="g-4 NewsMainRow ">
              {arrays.map((row, id) => (
                <>
                  <Col id="NewsCardCol">
                    <Card className="newsP__card">
                      <div className="imgBoxNewsPage">
                        <Card.Img
                          variant="top"
                          src={row.image}
                          className="newsP__card__img"
                        />
                      </div>

                      <p className="newsText" id="newsTitle">{row.title}</p>
                      <Card.Body className="newsP__card__body">
                        <p>
                          <Link
                            to={`/newsPage/${row.id}`}
                            className="card__down"
                          >
                            {" "}
                             Davomi{" "}
                          </Link>
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsPage;
