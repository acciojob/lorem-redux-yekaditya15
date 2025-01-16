import axios from "axios";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/loremipsum?paragraphs=2",
      {
        headers: {
          "X-Api-Key": "8bd0FxwQldEH4UEUPg5mOw==WQr0G4CIocsxDZyx", // Replace with your actual API key
        },
      }
    );
    console.log(response.data);
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
  }
};
