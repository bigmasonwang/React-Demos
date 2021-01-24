import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(dispatch, id);
};

const _fetchUser = _.memoize(async (dispatch, id) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
