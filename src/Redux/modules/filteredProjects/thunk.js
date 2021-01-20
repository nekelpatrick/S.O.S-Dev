import addFilteredProjects from "../filteredProjects/actions";

const addFilteredProjectsThunk = (filteredProjects) => {
    return (dispatch) => {
        dispatch(addFilteredProjects(filteredProjects))
    }
};

export default addFilteredProjectsThunk;