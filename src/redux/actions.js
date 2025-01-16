import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
  }
};
