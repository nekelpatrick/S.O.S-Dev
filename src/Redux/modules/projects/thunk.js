import addProjects from "./actions";
import { api } from "../../../axios-globalConfig/axios-global";

export const addProjectsThunk = () => {
    return (dispatch) => {
        api.get("/projects").then((res) => {
            dispatch(addProjects(res.data))
        })
    }
}

// export const filterProjectsThunk = (projects) => {
//     return (dispatch) => {
//         dispatch(addProjects(projects))
//     }
// };