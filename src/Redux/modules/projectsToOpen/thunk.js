import addOpenProject from "./actions";

const addOpenProjectThunk = (openProject) => {
    return (dispatch) => {
        dispatch(addOpenProject(openProject))
    }
};

export default addOpenProjectThunk;