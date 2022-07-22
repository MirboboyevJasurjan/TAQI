import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import i18next from "i18next";
import { useTranslation, initReactI18Next } from "react-i18next";
// import cookie from "js-cookie";
// import BiMenu from "react-icons/bi";
import { Container, Col, Row } from "react-bootstrap";

import "./Main.css";
import "./media.css";
import Nav from "../templates/navbar/Nav";
// import Button from "@mui/material/Button";
// import { AiFillCaretDown } from "react-icons/ai";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StudentCap from "../../assets/icons/studentCap.svg";
import OnlineLearning from "../../assets/icons/onlineLearning.svg";
import Jigsaw from "../../assets/icons/jigsaw.svg";
import StudentLearning from "../../assets/icons/studentLearning.svg";

import Grid from "@mui/material/Grid";

import institut from "../../assets/images/main/institut.jpeg";

import header1 from "../../assets/images/main/header1.jpeg";
import header2 from "../../assets/images/main/header2.jpeg";
import header3 from "../../assets/images/main/header3.jpeg";

// import habarlar1 from "../../assets/images/main/habarlar1.jpeg";
// import habarlar2 from "../../assets/images/main/habarlar2.jpeg";
// import habarlar3 from "../../assets/images/main/habarlar3.jpeg";

// import habarlar4 from "../../assets/images/main/habarlar4.png";
// import habarlar5 from "../../assets/images/main/habarlar5.jpeg";
// import habarlar6 from "../../assets/images/main/habarlar6.jpeg";

import events1 from "../../assets/images/main/events1.jpeg";
import events2 from "../../assets/images/main/events2.jpeg";
import events3 from "../../assets/images/main/events3.jpeg";
import events4 from "../../assets/images/main/events4.jpeg";

// import Card1 from "../../assets/images/events/card1.jpg";
// import Card2 from "../../assets/images/events/card2.jpg";
// import Card3 from "../../assets/images/events/card3.jpg";
// import Card4 from "../../assets/images/events/card4.jpg";

import academics1 from "../../assets/images/main/academics1.jpeg";
import academics2 from "../../assets/images/main/academics2.jpeg";
import academics3 from "../../assets/images/main/academics3.jpeg";

import tadqiqot from "../../assets/images/main/tadqiqot.jpeg";

// import research_bg from "../../assets/images/main/research_bg.png";
import FooterNav from "../templates/footer/FooterNav";
import events11 from "../../assets/images/main/bg/A1.png";
import events21 from "../../assets/images/main/bg/A2.jpg";
import events31 from "../../assets/images/main/bg/A5.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import SchoolIcon from "@mui/icons-material/School";
import axios from "axios";


const Main = () => {
  const [rows, setRows] = useState([]);
  const arrays = [...rows].reverse().slice(0, 6)
  function ToTop() {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const getRows = async () => {
      const response = await axios.get(
        `http://143.110.239.138/news`
    
      );
      

      setRows(response.data);
      console.log(response.data);
      console.log("response");
    };

    getRows();
  }, []);

  const { t } = useTranslation();

  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <div className="main-container">
        <div className="header">
          <Nav />
          <div className="header__title">
            <h1 className="header__h1">{t("navbar.Taqi")}</h1>
            {/* <h1 className="header__h1" id="header__h1"> 555 </h1> */}

            <div className="header__images">
              <div className="header__images__child">
                <img
                  className="header__images__child"
                  src={header1}
                  alt="TAQI"
                />
                <button className="header__card__btn">{t("navbar.sahifagaOtish")}</button>
              </div>
              <div className="header__images__child">
                <img
                  className="header__images__child"
                  src={header2}
                  alt="TAQI"
                />
              </div>
              <div className="header__images__child">
                <img
                  className="header__images__child"
                  src={header3}
                  alt="TAQI"
                />
              </div>
            </div>
          </div>

          <div className="carousel2cards">
            <Carousel fade interval="5000">
              <Carousel.Item>
                <img className="imgCarousel2" src={header1} />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="imgCarousel2" src={header2} />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="imgCarousel2" src={header3} />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="carousel1">
            <Carousel fade interval="5000">
              <Carousel.Item>
                <img className="imgCarousel" src={events11} />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="imgCarousel" src={events21} />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="imgCarousel" src={events31} />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="btnzindex">
            <ArrowDropDownIcon className="arrow" />
            <a href="#habarlar" className="blank1">
            {t("navbar.tanishing")}{" "}
            </a>
            <ArrowDropDownIcon className="arrow" />
          </div>
        </div>

        {/* tashtech page */}

        <div
          className="main-tashtech"
          id="habarlar"
          style={scrollY > 10 ? { marginTop: "112px" } : {}}
        >
          <div className="tashtechWidth">
            <h3 className="main_tash_h3"> {t("habarlar.habarlar")} </h3>

            <Container className="containerNews">
              <Row className="habarlar_row">
                {arrays.map((row, id) => (
                  <Col xs={1} md={4} className="g-4 colHabar">
                    <div className="habarlarCard__child" key={arrays.length-1} >
                    <div className="tashcard2_img imghabar">
                      <img className="imghabar" src={row.image} alt="photo" />
                    </div>
                     
                      <Link to ={`/newsPage/${row.id}`} onClick={ToTop} className="tashcard2_txt">{row.title}</Link>
                    </div>
                    
                  </Col>
                ))}
       

              </Row>
             
            </Container>

            <div className="divButton">
              <button className="buttonDavomi"><Link to="/news" onClick={ToTop} className="davomEtish">{t("habarlar.davomEtish")}</Link></button>
            </div>
          </div>
        </div>

        {/* events_page */}

        <div className="events_page">
          <div className="eventsota">
            <h1 className="event_h1">{t("tadbirlar.tadbirlar")}</h1>
            <p className="event_p">
              {t("tadbirlar.tayorlash1")}<br/>{t("tadbirlar.tayorlash2")}
              {/* Talabalarni jamiyat murakkab dunyoda faol <br /> fuqarolar va
              rahbarlar sifatida mazmunli hissa qo'shishga tayyorlash */}
            </p>

            <Grid className="event_cards" container spacing={1}>
              <Grid className="eventsCards" item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img
                      className="event_card1_img"
                      src={events1}
                      alt="photo"
                    />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">MILLIY LIBOSLAR NAMOYISHI</p>
                  </div>
                </div>
              </Grid>

              <Grid className="eventsCards" item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img
                      className="event_card1_img"
                      src={events2}
                      alt="photo"
                    />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">
                      18 NOYABR - O‘ZBEKISTON DAVLAT BAYROG‘I QABUL QILINGAN
                      KUN!
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid className="eventsCards" item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img
                      className="event_card1_img"
                      src={events3}
                      alt="photo"
                    />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">
                      {" "}
                      JAMIYATDA MAFKURAVIY IMMUNITETNI MUSTAHKAMLASH VA
                      JAHOLATGA QARSHI MA'RIFAT
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid className="eventsCards" item md={2.8}>
                <div className="event_card1">
                  <div className="events_img_box">
                    <img
                      className="event_card1_img"
                      src={events4}
                      alt="photo"
                    />
                  </div>
                  <div className="event_card_txt">
                    <div className="date_event">
                      <h4>16/04</h4>
                    </div>
                    <p className="h4Text">
                      {" "}
                      MAMLAKATIMIZNING YANGI ARXITEKTURAVIY QIYOFASINI YARATING{" "}
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className="divButton">
              <button className="buttonDavomi"><Link to="/tadbir1"  onClick={ToTop} className="davomEtish">Davom etish ...</Link></button>
            </div>
          </div>
        </div>

        {/* Academics page */}

        <div className="academicss_page">
          <h1 className="academicss_h1">Akademiklar</h1>
          <p className="academicss_p">
            Talabalarni murakkab dunyoda faol fuqarolar va liderlar<br />
            sifatida jamiyatga mazmunli hissa qo'shishga tayyorlash
          </p>

          <div className="academicss_card_bg">
            <div className="academicss_card_main">
              <Grid
                className="academicss_container academicss_cards "
                id="akademikCards"
                container
                spacing={1}
              >
                <Grid className="academicss_card" item md={3.7}>
                  <img src={academics1} alt="photo" />

                  <p>
                    “Zulfiya – bahor va muhabbat kuychisi” deb nomlangan
                    ma`naviy tadbir bo’lib o’tdi.
                  </p>
                </Grid>

                <Grid className="academicss_card" item md={3.7}>
                  <img src={academics2} alt="photo" />

                  <p>
                    Mir Alisher Navoiy hazratlarining 580 yilligi munosabati
                    bilan “Alisher Navoiy – so‘z mulkining sultoni” mavzusida
                    ma’naviy-ma’rifiy tadbir o‘tkazildi.
                  </p>
                </Grid>

                <Grid className="academicss_card" item md={3.7}>
                  <img src={academics3} alt="photo" />

                  <p>
                    “Zulfiyaxonim - 105 yoshda” mavzusida adabiy-badiiy kecha
                    o‘tkazildi
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="academics_navbg">
            <h5 className="academicss_h3">
              Sizning istaklaringiz va qobilyatlaringizni shakillantirishga
              yordam beradigan oltilik
            </h5>
            <ul className="academicss_ul">
              <li>
                <Link className="academicss_ul_li" to="/fakultetlar" onClick={ToTop}>
                  Arxitektura
                </Link>
              </li>
              |
              <li>
                <Link className="academicss_ul_li" to="/fakultetlar" onClick={ToTop}>
                  Bino va inshoatlar
                </Link>
              </li>
              |
              <li>
                <Link className="academicss_ul_li" to="/fakultetlar" onClick={ToTop}>
                  Qurilishni boshqarish
                </Link>
              </li>
              |
              <li>
                <Link className="academicss_ul_li" to="/fakultetlar" onClick={ToTop}>
                  Muhandislik qurilish infrastrukturasi
                </Link>
              </li>
              |
              <li>
                <Link className="academicss_ul_li" to="/fakultetlar" onClick={ToTop}>
                  Magistratura
                </Link>
              </li>
              |
              <li>
                <Link className="academicss_ul_li" to="/fakultetlar" onClick={ToTop}>
                  Sirtqi bo’lim
                </Link>
              </li>
            </ul>

            <div className="divButton">
              <button className="buttonDavomi"><Link to="/fakultetlar" onClick={ToTop} className="davomEtish">Davom etish ...</Link></button>
            </div>
          </div>
        </div>

        <div className="hr"></div>
        {/* Research page */}

        <div className="research_page">
          <h1 className="research_h1">Tadqiqot</h1>
          <p className="research_p">
            Talabalarni murakkab dunyoda faol fuqarolar va liderlar <br />{" "}
            sifatida jamiyatga mazmunli hissa qo'shishga tayyorlash
          </p>

          <div className="research_number">
            <div className="research_numb_container">
              {/* <div className="researchP1"> */}

              <div className="research_num">
                {/* <LocalLibraryIcon className="iconsss" /> */}
                <img
                  src={StudentLearning}
                  className="researchIcon "
                  alt="Online Learning"
                />
                <h2>720</h2>
                <p>O'qituvchilar</p>
              </div>

              <div className="research_num">
                {/* <researchIcon className="iconsss" /> */}
                <img
                  src={StudentCap}
                  className="researchIcon "
                  alt="Online Learning"
                />
                <h2>8229</h2>
                <p>Talabalar</p>
              </div>
              {/* </div> */}

              {/* <div className="researchP2"> */}
              <div className="research_num">
                {/* <AttachMoneyIcon className="iconsss" /> */}
                <img
                  src={Jigsaw}
                  className="researchIcon "
                  alt="Online Learning"
                />
                <h2>1431</h2>
                <p>Ilmiy nashrlar</p>
              </div>

              <div className="research_num">
                {/* <AttachMoneyIcon className="iconsss" /> */}
                <img
                  src={OnlineLearning}
                  className="researchIcon "
                  alt="Online Learning"
                />
                <h2>573</h2>
                <p>O'quv kurslar</p>
              </div>
              {/* </div> */}
            </div>
          </div>

          <div className="research_card_main">
            <Grid
              className="academicss_container academicss_cards "
              id="phdCards"
              container
              spacing={1}
            >
              <Grid className="academicss_card" item md={3.7}>
                <img src={tadqiqot} alt="photo" />

                <p>
                  Z.B.Fazillayevning 2022 yil 16 iyun kuni soat 10:00 da
                  doktorlik (PhD) dissertatsiyasi muhokamasibo’lib o’tadi.{" "}
                </p>
              </Grid>
              <Grid className="academicss_card" item md={3.7}>
                <img src={tadqiqot} alt="photo" />

                <p>
                  X.T.Alimovning 2022 yil 16 - iyun kuni soat 11:30 da doktorlik
                  (PhD) dissertatsiyasi muhokamasiga bo’lib o’tadi.{" "}
                </p>
              </Grid>
              <Grid className="academicss_card" item md={3.7}>
                <img src={tadqiqot} alt="photo" />

                <p>
                  A.Sh.Martazayevning doktorlik (PhD) dissertatsiyasi
                  muhokamasiga taklif etamiz.{" "}
                </p>
              </Grid>
            </Grid>
          </div>

          <div className="divButton">
            <button className="buttonDavomi"><Link to="/tadqiqot" onClick={ToTop} className="davomEtish">Davom etish ...</Link></button>
          </div>
        </div>

        {/* Qabul page */}
        <div className="divotabe">
          {/* <div className="yellowLIne"></div> */}
          <div className="brownLIne"></div>
        </div>

        <div className="qabul_page">
          <h1 className="qabul11">Qabul</h1>
          <p>Biror narsani kashf qilishdan oldin, o'zingizni kashf eting ...</p>

          <div className="imgQabul container">
            <img src={institut} alt="photo" className="qabul_img" />
          </div>

          <div className="qabul_main_cont">
            <div className=" qabul_container">
              <Grid className="qabul_cont" container spacing={1}>
                <Grid item md={5.7}>
                  <h4>
                    Yo'lga chiqib Toshkent arxitektura-qurilish instituti ta'lim
                    imkoniyatlarini o'rganing. <br />
                    <br />
                    Biz sizga ularni tanishtiramiz va namoyish qilamiz.
                  </h4>
                </Grid>
                <Grid item md={5.7}>
                  <h4>
                    Qiziqishlaringizni rivojlantirishda Toshkent
                    arxitektura-qurilish instituti sizga yordam beradi.
                    <br />
                    <br />
                    Yangi o’quv yili uchun qabul boshlandi.
                  </h4>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        <FooterNav />
      </div>
    </>
  );
};

export default Main;
