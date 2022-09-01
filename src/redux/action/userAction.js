import axios from "../../api";

export const LoginUser = (values) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST_INIT" });
    const response = await axios.get("/");
    console.log(response);
    dispatch({
      type: "LOGIN_REQUEST_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
