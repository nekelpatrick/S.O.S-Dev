import addProjects from "./actions";
import { api } from "../../../axios-globalConfig/axios-global";

export const addProjectsThunk = (projects) => {
    return (dispatch) => {
        if (projects !== undefined) {
            dispatch(addProjects(projects))
        }
        else {
            api.get("/projects").then((res) => {
                dispatch(addProjects(res.data))
            })
        } 
    }
}