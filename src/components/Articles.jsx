import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner, Alert, Row, Col } from 'react-bootstrap';
import Article from './Article';
import SelectedArticle from './SelectedArticle';

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = React.useState({});
  const [favourites, setFavourites] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const { articles, loading } = useSelector(
    (state) => state.ArticleFromSources
  );

  const { openFavourites } = useSelector((state) => state.GetFavouites);
  React.useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem('favourites')));
  }, [openFavourites]);

  function openSidebar(articleToOpen) {
    setSelectedArticle(articleToOpen);
    setShow(true);
  }

  return (
    <div className='w-100'>
      {openFavourites ? (
        <Row>
          {favourites ? (
            favourites.map((a, idx) => (
              <Col sm={12} md={6} xl={3}>
                <Article openSidebar={openSidebar} key={idx} article={a} />
              </Col>
            ))
          ) : (
            <p className='text-center my-3'>No Favourites In the list</p>
          )}
        </Row>
      ) : (
        <>
          {loading ? (
            <div className='w-100 d-flex align-items-center justify-content-center alert-message'>
              <Spinner animation='border' />
            </div>
          ) : (
            <>
              <Row>
                {articles ? (
                  articles.map((a, idx) => (
                    <Col sm={12} md={6} xl={3}>
                      <Article
                        openSidebar={openSidebar}
                        key={idx}
                        article={a}
                      />
                    </Col>
                  ))
                ) : (
                  <p className='text-center my-3'>
                    No articles, Please select other source
                  </p>
                )}
              </Row>
            </>
          )}
        </>
      )}

      <SelectedArticle
        show={show}
        setShow={setShow}
        selectedArtcile={selectedArticle}
      />
    </div>
  );
};

export default Articles;
