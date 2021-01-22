const openProjectReducer = (state = [], action) => {
    switch (action.type) {
        case "@openProject":
            const { openProject } = action
            return openProject
    
        default:
            return state;
    }
};

export default openProjectReducer;