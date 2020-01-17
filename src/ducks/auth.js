// const
const USER_IS_AUTH = "USER_IS_AUTH";
//initial state

const initialState = {
  isAuth: false
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
    default: {
      return state;
    }
  }
};

//actions
export const isUserAuth = payload => ({ type: USER_IS_AUTH, payload });
//action creators
