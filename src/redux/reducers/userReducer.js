const initialState = {
  user: null,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST_INIT":
      return { ...state, loading: true };
    case "LOGIN_REQUEST_SUCCESS":
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
};
