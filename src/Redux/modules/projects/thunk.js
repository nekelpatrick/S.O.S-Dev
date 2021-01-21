import addProjects from "./actions";
import { api } from "../../../axios-globalConfig/axios-global";

export const addProjectsThunk = () => (dispatch, getState) => {
  api.get("/projects").then((res) => dispatch(addProjects(res.data)));
};