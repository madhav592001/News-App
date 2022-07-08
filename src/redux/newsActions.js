import axios from 'axios';

//todo -> Reducer to get all the sources on the homescreen

export const getAllSources = () => async (dispatch) => {
  dispatch({ type: 'ALL_SOURCES_REQUEST' });

  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.REACT_APP_API_KEY}&language=en`
    );
    dispatch({ type: 'ALL_SOURCES_SUCCESS', payload: data.sources });
  } catch (err) {
    dispatch({ type: 'ALL_SOURCES_FAIL', payload: err.response.data.message });
  }
};

//todo -> Reducer to get the article from selected source

export const articlesFromSources = (source) => async (dispatch) => {
  dispatch({ type: 'ARTICLES_SOURCES_REQUEST' });

  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${process.env.REACT_APP_API_KEY}&language=en`
    );

    dispatch({ type: 'ARTICLES_SOURCES_SUCCESS', payload: data.articles });
  } catch (err) {
    dispatch({
      type: 'ARTICLES_SOURCES_FAIL',
      payload: err.response.data.message,
    });
  }
};

// todo -> Reducer to change the state of home screen

export const getFavourites = () => async (dispatch) => {
  dispatch({ type: 'GET_FAVOURITES' });
  const favourites = JSON.parse(localStorage.getItem('favourites'));
  dispatch({ type: 'FAVOURITES_SUCCESSFULL', payload: favourites });
};
