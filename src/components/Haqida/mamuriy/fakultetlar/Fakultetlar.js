import * as React from 'react';
import { Link } from 'react-router-dom';
import './Fakultetlar.css'
import Nav from '../../../pages/templates/navbar/Nav';
import FooterNav from '../../../pages/templates/footer/FooterNav';
import { Row, Col, Card } from 'react-bootstrap'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import imagf from '../../../assets/images/about/images/unsplash.png'


const Fakultetlar = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    function createData(name, text, image) {
        return { name, text, image };
    }
 
    const rows = [
        createData(' “Arxitektura”  fakulteti ', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices vulputate diam volutpat congue at.`, imagf),
        createData(' “Bino va inshootlar” fakulteti ', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices vulputate diam volutpat congue at.`, imagf),
        createData(' “Qurilishni boshqarish” fakulteti ', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices vulputate diam volutpat congue at.`, imagf),
        createData(' “Muhandislik va qurilishni boshqarish infrastrukturasi” fakulteti ', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat congue at.`, imagf),
        createData(' “Muhandislik va qurilishni boshqarish infrastrukturasi” fakulteti ', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. volutpat congue at.`, imagf),
        createData(' Magistratura ', `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices vulputate diam volutpat congue at.`, imagf),
        createData(` Sirtqi bo'lim`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices vulputate diam volutpat congue at.`, imagf),
        createData(` Sirtqi bo'lim`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ultrices vulputate diam volutpat congue at.`, imagf),
    ];

    function createDataAcc(job, name, image) {
        return { job, name, image };
    }

    const rowsAcc = [
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
        createDataAcc('Dotsent', 'Sultanov Alisher Sabirjanovich', imagf),
    ];



    return (
        <>
            <Nav />
            <div className='div_imgFak'></div>
            <div>
                <div className='Sarlavha'>
                    <div className='haqida_father_fak'>
                        <h3 className='head_fak'>FAKULTETLAR</h3>
                        {/* Fakultetlar */}
                        <Row xs={1} md={1} className="g-4 row_rahbariy">
                            {rows.map((row, id) => (
                                <Col className='fakultet_row'>
                                    <Accordion expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)} className='accordionCard'>
                                        {/* Accordion  header section */}
                                        <AccordionSummary
                                            // expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            className='accordionSummary'
                                        >
                                            <Card className='fakultet_card' >
                                                <Card.Img variant="top" src={row.image} className='fakultet__card__img' id="fakultet__card__img" />
                                                <div className='fak_text' id='fak_text'>
                                                    <h4 className='fak_card__name'>{row.name}</h4><br />
                                                    <h6 className='fak_card__text'>{row.text}</h6>
                                                    <button className='fak_card_down' > Davom etish ... </button>
                                                </div>
                                            </Card>
                                        </AccordionSummary>
                                        {/* Text here */}
                                        <AccordionDetails className='minicards'>
                                            <Row xs={1} md={4} className="g-4 minicards">
                                                {rowsAcc.map((row, id) => (
                                                    <Col className='acc__pers_card'>
                                                        <Card className='fak__acc__card'>
                                                            <Card.Img variant="top" src={row.image} className='rahbariy__card__img' />
                                                            <h6 className='card__name__fak'>{row.name}</h6><br />
                                                            <h6 className='card__job__fak'>{row.job}</h6>
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
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
            <FooterNav />
        </>
    )
}
export default Fakultetlar;