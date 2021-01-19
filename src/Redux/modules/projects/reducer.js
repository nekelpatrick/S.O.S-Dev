
const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case "@add_projects":
            const { projects } = action;
            return projects;

        default:
            return state;
    }
}

export default projectsReducer;