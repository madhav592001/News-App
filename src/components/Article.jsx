import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { GrFavorite } from 'react-icons/gr';
import './styles.css';

const Article = ({ article, openSidebar }) => {
  const [adding, setAdding] = React.useState(false);
  const [found, setFound] = React.useState(false);
  let favourites = JSON.parse(localStorage.getItem('favourites'));

  function addToFavourites() {
    if (found) return;
    setAdding(true);
    if (favourites) {
      let newF = [...favourites, article];
      localStorage.setItem('favourites', JSON.stringify(newF));
    } else {
      let newF = [article];
      localStorage.setItem('favourites', JSON.stringify(newF));
    }
    setAdding(false);
  }

  React.useEffect(() => {
    const isFound = favourites.some((element) => {
      if (element.title === article.title) {
        return true;
      }

      return false;
    });
    setFound(isFound);
  }, [adding]);

  // console.log(isFound);

  return (
    <Card className='my-4 card'>
      <Card.Img variant='top' src={article.urlToImage} />
      <Card.Body>
        <Card.Title className='card-title'>
          <div className='w-75'>{article.title}</div>
          {adding ? (
            <Spinner animation='border' />
          ) : (
            <span
              className={`fav-icon rounded-circle ${found && 'fav'}`}
              onClick={addToFavourites}
            >
              <GrFavorite />
            </span>
          )}
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
