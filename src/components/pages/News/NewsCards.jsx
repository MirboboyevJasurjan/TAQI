import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NewsPage from "./NewsPage";
import Nav from '../templates/navbar/Nav';
import './NewCards.css'


export const IdContest = React.createContext();

const NewsCards = (...props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '75% !important',
    left: '60% !important',
    right: '50% !IMPORTANT',
    transform: 'translate(-50%, -50%)',
    width: '50% !important',
    height: '100% !important',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  function Save() {
    const indexSaved = props.idx;
    // console.log(indexSaved);
    // console.log(props);
  }

  return (
    <>
      <Card className="newsP__card">
        <Card.Img
          variant="top"
          src={props[0].image}
          className="newsP__card__img"
        />
        <p className="newsText">{props[0].title}</p>
        <span className="newsText">{props[0].description}</span>
        <Card.Body className="newsP__card__body">

          <IdContest.Provider value={props[0].idx}>
            <p><Link to="/newsPage" className="card__down" onClick={Save}> {props[0].idx} Davomi  </Link></p>
          </IdContest.Provider>



          {/* <Button onClick={Save} className="card__down" >Davomi . . . </Button> */}
        </Card.Body>
      </Card>
    </>
  );
};
export default NewsCards;



























{/* <Modal
 className="cardModal"
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal> */}