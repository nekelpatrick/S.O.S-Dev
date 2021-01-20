
const filteredProjectsReducer = (state = [], action) => {
    switch (action.type) {
        case "@add/filteredProjects":
            const { filteredProjects } = action;
            return filteredProjects;
        
        default:
            return state;
    }
};

export default filteredProjectsReducer;