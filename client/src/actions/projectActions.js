import axios from "axios";

import { GET_PROJECT_STATUS } from "./types";

// Get project status
export const getProjectStatus = () => dispatch => {
  axios.get("/api/projects/progress").then(res => {
    dispatch({
      type: GET_PROJECT_STATUS,
      payload: res.data
    });
  });
};
