import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';

const Article = ({ article, openSidebar, favourites }) => {
  function addToFavourites() {
    let favourites = JSON.parse(localStorage.getItem('favourites'));
    let newF = [...favourites, article];
    localStorage.setItem('favourites', JSON.stringify(newF));
  }

  return (
    <Card className='my-4 card'>
      <Card.Img variant='top' src={article.urlToImage} />
      <Card.Body>
        <Card.Title className='card-title'>
          <div className='w-75'>{article.title}</div>
          <span style={{ cursor: 'pointer' }} onClick={addToFavourites}>
            Favourite
          </span>
        </Card.Title>
        <Card.Text className='card-desc'>{article.description}</Card.Text>
        <button
          className='open-btn'
          onClick={() => openSidebar(article)}
          variant='primary'
        >
          Open
        </button>
      </Card.Body>
    </Card>
  );
};

export default Article;
