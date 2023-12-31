import axios from "axios";
import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const addToHistoryAction = (blog) => {
  return async (dispatch) => {
    const { data } = await axios.patch("http://localhost:5000/views-increment", { _id: blog._id, views: blog.views + 1 });
    console.log(data);
    dispatch({ type: ADD_TO_HISTORY, payload: blog });
  };
};

export default addToHistoryAction;
