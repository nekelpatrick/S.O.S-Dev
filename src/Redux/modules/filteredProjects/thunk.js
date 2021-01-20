import addProjects from "../projects/actions";

const addFilteredProjectsThunk = (filteredProjects) => {
    return (dispatch) => {
        dispatch(addProjects(filteredProjects))
    }
};

export default addFilteredProjectsThunk;