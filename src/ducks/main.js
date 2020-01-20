// const
const USER_IS_AUTH = "USER_IS_AUTH";
const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
const SEARCH_ARTICLES = "SEARCH_ARTICLES";
//initial state

const initialState = {
  isAuth: localStorage.getItem("isAuth"),
  articles: [],
  searchedArticles: null
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
        articles: payload
      };
    }
    case SEARCH_ARTICLES: {
      return {
        ...state,
        searchedArticles: payload
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
    fetch("https://www.mocky.io/v2/5d9dc38e3200004e00329939")
      .then(response => response.json())
      .then(list => dispatch(fetchArticlesSuccess(list.data)))
      .catch(error => console.log(error.message));
  };
};

export const clearAuth = payload => {
  return dispatch => {
    localStorage.removeItem("isAuth");
    dispatch(isUserAuth(payload));
  };
};

export const articleSearchData = input => {
  return (dispatch, getState) => {
    if (!input) {
      dispatch(searchArticles(null));
    } else {
      const articles = getState().main.articles;
      const searchedArray = articles.filter(
        el => el.title.toLowerCase().includes(input) || el.text.toLowerCase().includes(input)
      );
      dispatch(searchArticles(searchedArray));
    }
  };
};
