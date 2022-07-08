import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import './styles.css';

const SelectedArticle = ({ show, setShow, selectedArtcile }) => {
  console.log(selectedArtcile);
  return (
    <>
      <Offcanvas
        placement='end'
        className='p-3'
        show={show}
        onHide={() => setShow(false)}
      >
        <div className='w-100 px-2 my-3 d-flex justify-content-end align-items-center'>
          <span style={{ cursor: 'pointer' }} onClick={() => setShow(false)}>
            X
          </span>
        </div>

        <Offcanvas.Title className='offcanvas-title'>
          {selectedArtcile.title}
        </Offcanvas.Title>

        <img width='100%' height='30%' src={selectedArtcile.urlToImage} />

        <Offcanvas.Body className='offcanvas-desc'>
          {selectedArtcile.description}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SelectedArticle;
