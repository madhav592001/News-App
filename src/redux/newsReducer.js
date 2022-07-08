export const AllSourcesReducer = (state = { sources: [] }, action) => {
  switch (action.type) {
    case 'ALL_SOURCES_REQUEST':
      return { loading: true };
    case 'ALL_SOURCES_SUCCESS':
      return { loading: false, sources: action.payload };
    case 'ALL_SOURCES_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const ArticlesFromSourcesReducer = (
  state = { articles: [] },
  action
) => {
  switch (action.type) {
    case 'ARTICLES_SOURCES_REQUEST':
      return { loading: true };
    case 'ARTICLES_SOURCES_SUCCESS':
      return { loading: false, articles: action.payload };
    case 'ARTICLES_SOURCES_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const GetFavouritesReducer = (state = { favourites: [] }, action) => {
  switch (action.type) {
    case 'GET_FAVOURITES':
      return { openingFavourites: true };
    case 'FAVOURITES_SUCCESSFULL':
      return { openFavourites: true, favourites: action.payloads };
    default:
      return { openFavourites: false, favourites: [] };
  }
};
