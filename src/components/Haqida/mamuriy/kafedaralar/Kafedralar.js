import * as React from 'react';
import { Link } from 'react-router-dom';
import './Kafedralar.css'
import Nav from '../../../pages/templates/navbar/Nav';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import { Row, Col, Card } from 'react-bootstrap'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imagf from '../../../assets/images/about/images/unsplash.png'
import Lsidebar from '../../Umumiy/Sidebar/Lsidebar';

// import images
import Maktuba from '../../../assets/images/ustozlar/A.T.Maktuba.png'
import Timur from '../../../assets/images/ustozlar/X.A.Timur.png'
import Bahtiyor from '../../../assets/images/ustozlar/I.I.Bahtiyor.png'
import Ravshanjon from '../../../assets/images/ustozlar/A.I.Ravshanjon.png'
import Tatyana from '../../../assets/images/ustozlar/N.V.Tatyana.png'
import Murod from '../../../assets/images/ustozlar/I.I.Murod.png'
import Kamal from '../../../assets/images/ustozlar/A.O.Kamal.png'
import Jumabay from '../../../assets/images/ustozlar/Sh.K.Jumabay.png'
import Lazizbek from '../../../assets/images/ustozlar/R.Sh.Lazizbek.png'
import Maftunaxon from '../../../assets/images/ustozlar/T.S.Maftunaxon.png'

import Izatullo from '../../../assets/images/ustozlar/ArxTarixi/Sh.K.Izatullo.png'
import Shoira from '../../../assets/images/ustozlar/ArxTarixi/N.Z.Shoira.png'
import Fotima from '../../../assets/images/ustozlar/ArxTarixi/Y.Z.Fotima.png'
import Oybek from '../../../assets/images/ustozlar/ArxTarixi/M.A.Oybek.png'
import Abdurazak from '../../../assets/images/ustozlar/ArxTarixi/T.A.Abdurazak.png'


// import images end

const Kafedralar = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


 

    function tops() {
        window.scrollTo(0, 0)
    }

    function createDataAcc(job, name, image) {
        return { job, name, image };
    }

    const rowsArxit = [
        createDataAcc('Kafedrasi mudiri,dotsent', 'Xasanov Azamat Ozodovich', imagf),
        createDataAcc('Dotsent', 'Abdujabborova Maktuba Tuxtasinovna', Maktuba),
        createDataAcc('Professor', 'Xidoyatov Timur Abrorovich', Timur),
        createDataAcc('Dotsent', 'Inagamov Bahtiyor Ismailovich', Bahtiyor),
        createDataAcc('Professor', 'Kadirova Surayyo Adilovna', imagf),
        createDataAcc('Katta o’qituvchi', 'Alimdjanov Ravshanjon Ikromovich', Ravshanjon),
        createDataAcc('Dotsent', 'Nazarenko Tatyana Vasilevna', Tatyana),
        createDataAcc('Katta o’qituvchi', 'Ibragimov Murod Ismaildjanovich', Murod),
        createDataAcc('Katta o’qituvchi', 'Begmatova Dildor Akramovna', imagf),
        createDataAcc('Katta o’qituvchi', 'Allayarov Kamal Orazbayevich', Kamal),
        createDataAcc('Dotsent', 'Shnekeyev Jumabay Kalimbetovich', Jumabay),
        createDataAcc('Assistent', 'Rahimov Lazizbek Shahnazarovich', Lazizbek),

        createDataAcc('dotsent', 'Yunusov Shukrulla Hayrullayevich', imagf),
        createDataAcc('Assistent', 'To’xtayeva Maftunaxon Saidolim qizi', Maftunaxon),
        createDataAcc('Assistent', 'Sadikov Mirasrol Mirkamol o’g’li', imagf),
        createDataAcc('Dotsent', 'Masharipova Sayyora Abdurahimovna', imagf),
        createDataAcc('Assistent', 'Shamahmudova Muhayyo Xammatovna', imagf),
    ];


    const rowsShahar = [
        createDataAcc('Kafedrasi mudiri, dotsent', 'Yahyayev Abdulla Abdujabborovich', imagf),
        createDataAcc('Professor', 'Isamuhamedova Dilaram Uchkunovna', imagf),
        createDataAcc('Dotsent', 'Sattarova Kamila Djumayevna', imagf),
        createDataAcc('Professor', 'Talipov Mahirdjon Agzamovich', imagf),
        createDataAcc('Dotsent', 'Kamilova Xalida Xabibullayevna', imagf),
        createDataAcc('Katta o’qituvchi', 'Sereyeva Guljazira Adilbayevna', imagf),
        createDataAcc('Katta o’qituvchi', 'Umarova Maloxat Muxidjonovna', imagf),
        createDataAcc('Assistent', 'Siddikova Gavxar Xalilovna', imagf),
        createDataAcc('Katta o’qituvchi', 'Raxmatova Nodira Baxriyevna', imagf),
        createDataAcc('Katta o’qituvchi', 'Kasimov Tairdjan Xodjievich', imagf),
        createDataAcc('Assistent', 'Oripova Sarvinoz Abduqaxor qizi', imagf),
        createDataAcc('Katta o’qituvchi', 'Raxmonov Abdulatif Toxir o‘g‘li', imagf),
        createDataAcc('Katta o’qituvchi', 'Abduraxmonov Boburjon Toxir o‘g‘li', imagf),
        createDataAcc('Katta o’qituvchi', 'Umarov Otabek Zulfikarovich', imagf),
        createDataAcc('Katta o’qituvchi', 'Muminova Kamola Raxmatullaevna', imagf),
        createDataAcc('Dotsent', 'Usmanov Muradxan Saidmaxmudovich', imagf)
    ];


    const rowsTarixi = [
        createDataAcc('Kafedrasi mudiri,dotsent', 'Shoisoev Izatullo Kenjaevich', Izatullo),
        createDataAcc('Professor', 'Salimov Arifdjan Muslimovich', imagf),
        createDataAcc('Professor', 'Nazilov Dodo', imagf),
        createDataAcc('Dotsent', 'Pulatov Xayrulla Shamubarakovich', imagf),
        createDataAcc('Professor', 'Nurmuxamedova Shoira Zaxidovna', Shoira),
        createDataAcc('Katta o’qituvchi', 'Yusupova Fotima Zokirovna', Fotima),
        createDataAcc('Dotsent', 'Masharipov Oybek Abduraximovich', Oybek),
        createDataAcc('Katta o’qituvchi', 'Turdiev Abdurazak Abduraximovich', Abdurazak),
        createDataAcc('Katta o’qituvchi', 'Begmatova Dildor Akramovna', imagf),
        createDataAcc('Katta o’qituvchi', 'Allayarov Kamal Orazbayevich', imagf),
        createDataAcc('Dotsent', 'Shnekeyev Jumabay Kalimbetovich', imagf),
        createDataAcc('Assistent', 'Rahimov Lazizbek Shahnazarovich', imagf),
        createDataAcc('Dotsent', 'Yunusov Shukrulla Hayrullayevich', imagf),
        createDataAcc('Assistent', 'To’xtayeva Maftunaxon Saidolim qizi', imagf),
        createDataAcc('Assistent', 'Sadikov Mirasrol Mirkamol o’g’li', imagf),
        createDataAcc('Dotsent', 'Masharipova Sayyora Abdurahimovna', imagf),
        createDataAcc('Assistent', 'Shamahmudova Muhayyo Xammatovna', imagf),  
    ];



    return (
        <>
            <Nav />
            <div className='div_imgFak'></div>

            <div>
                <div className='Sarlavha'>
                    <div className='haqida_father_fak'>
                        <h3 className='head_fak'>Kafedralar</h3>
                        <Row xs={1} md={1} className="g-4 row_rahbariy">
                         
                                <Col className='fakultet_row'>
                                    <Accordion expanded={expanded === `panel1`} onChange={handleChange(`panel1`)} className='accordionCard'>
                                        <AccordionSummary
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            className='accordionSummary'
                                        >
                                            <Card className='fakultet_card' >
                                                <Card.Img variant="top" src={imagf} className='fakultet__card__img' />
                                                <div className='fak_text'>
                                                    <h4 className='fak_card__name'>“ARXITEKTURAVIY LOYIHALASH” kafedrasi</h4><br />
                                                    <h6 className='fak_card__text'>Lorem ipsum dolor</h6>
                                                    <button className='fak_card_down' > Davom etish ... </button>
                                                </div>
                                            </Card>
                                        </AccordionSummary>
                                        {/* Text here */}
                                        <AccordionDetails className='minicards'>
                                            <Row xs={1} md={4} className="g-4 minicards">
                                                {rowsArxit.map((row, id) => (
                                                    <Col className='acc__pers_card' id="OneCardJob">
                                                        <Card className='fak__acc__card'>
                                                            <Card.Img variant="top" src={row.image} id="CardKafImg" className='rahbariy__card__img' />
                                                            <h6 className='cardNameFak'>{row.name}</h6><br />
                                                            <h6 className='cardJobFak'>{row.job}</h6>
                                                            <Card.Body className='card__body' >
                                                                <Link to="/fakultetlar" className='card__down' > CV </Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </AccordionDetails>
                                    </Accordion>
                                </Col>


                        </Row>
                        <Row xs={1} md={1} className="g-4 row_rahbariy">
                         
                                <Col className='fakultet_row'>
                                    <Accordion expanded={expanded === `panel2`} onChange={handleChange(`panel2`)} className='accordionCard'>
                                        <AccordionSummary
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            className='accordionSummary'
                                        >
                                            <Card className='fakultet_card' >
                                                <Card.Img variant="top" src={imagf} className='fakultet__card__img' />
                                                <div className='fak_text'>
                                                    <h4 className='fak_card__name'>“SHAHARSOZLIK VA LANDSHAFT ARXITEKTURASI”  kafedrasi</h4><br />
                                                    <h6 className='fak_card__text'>Lorem ipsum dolor</h6>
                                                    <button className='fak_card_down' > Davom etish ... </button>
                                                </div>
                                            </Card>
                                        </AccordionSummary>
                                        {/* Text here */}
                                        <AccordionDetails className='minicards'>
                                            <Row xs={1} md={4} className="g-4 minicards">
                                                {rowsShahar.map((row, id) => (
                                                    <Col className='acc__pers_card'>
                                                        <Card className='fak__acc__card'>
                                                            <Card.Img variant="top" src={row.image} id="CardKafImg" className='rahbariy__card__img' />
                                                            <h6 className='cardNameFak'>{row.name}</h6><br />
                                                            <h6 className='cardJobFak'>{row.job}</h6>
                                                            <Card.Body className='card__body' >
                                                                <Link to="/fakultetlar" className='card__down' > CV </Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </AccordionDetails>
                                    </Accordion>
                                </Col>


                        </Row>
                        <Row xs={1} md={1} className="g-4 row_rahbariy">
                         
                                <Col className='fakultet_row'>
                                    <Accordion expanded={expanded === `panel3`} onChange={handleChange(`panel3`)} className='accordionCard'>
                                        <AccordionSummary
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            className='accordionSummary'
                                        >
                                            <Card className='fakultet_card' >
                                                <Card.Img variant="top" src={imagf} className='fakultet__card__img' />
                                                <div className='fak_text'>
                                                    <h4 className='fak_card__name'>“ARXITEKTURA TARIXI VA NAZARIYASI” kafedrasi</h4><br />
                                                    <h6 className='fak_card__text'>Lorem ipsum dolor</h6>
                                                    <button className='fak_card_down' > Davom etish ... </button>
                                                </div>
                                            </Card>
                                        </AccordionSummary>
                                        {/* Text here */}
                                        <AccordionDetails className='minicards'>
                                            <Row xs={1} md={4} className="g-4 minicards">
                                                {rowsTarixi.map((row, id) => (
                                                    <Col className='acc__pers_card'>
                                                        <Card className='fak__acc__card'>
                                                            <Card.Img variant="top" src={row.image} id="CardKafImg" className='rahbariy__card__img' />
                                                            <h6 className='cardNameFak'>{row.name}</h6><br />
                                                            <h6 className='cardJobFak'>{row.job}</h6>
                                                            <Card.Body className='card__body' >
                                                                <Link to="/fakultetlar" className='card__down' > CV </Link>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </AccordionDetails>
                                    </Accordion>
                                </Col>


                        </Row>


                    </div>
                </div>
            </div>
            <FooterNav />
        </>
    )
}
export default Kafedralar;