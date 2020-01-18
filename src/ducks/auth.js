// const
const USER_IS_AUTH = "USER_IS_AUTH";
const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
const SEARCH_ARTICLES = "SEARCH_ARTICLES";
//initial state

const initialState = {
  isAuth: false,
  results: []
};

//reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_IS_AUTH: {
      return {
        ...state,
        isAuth: payload
      };
    }
    case FETCH_ARTICLES_SUCCESS: {
      return {
        ...state,
        results: payload
      };
    }
    case SEARCH_ARTICLES: {
      return {
        ...state,
        results: [...payload]
      };
    }
    default: {
      return state;
    }
  }
};

//actions
export const isUserAuth = payload => ({ type: USER_IS_AUTH, payload });
export const fetchArticlesSuccess = payload => ({ type: FETCH_ARTICLES_SUCCESS, payload });
export const searchArticles = payload => ({ type: SEARCH_ARTICLES, payload });
//action creators

export const articleFetchData = () => {
  return dispatch => {
    fetch("http://www.mocky.io/v2/5d9dc38e3200004e00329939")
      .then(response => response.json())
      .then(list => dispatch(fetchArticlesSuccess(list.data)))
      .catch(error => console.log(error.message));
  };
};

export const articleSearchData = (input, results) => {
  return dispatch => {
    const searchedArray = results.filter(el => el.id == input);
    dispatch(searchArticles(searchedArray));
  };
};
