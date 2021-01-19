import { RiUserLine } from "react-icons/ri";

const projectsReducer = (state = [], action) => {
    switch (action.type) {
        case "@addProjects":
            const { projects } = action;
            return projects;

        default:
            return state;
    }
}

export default projectsReducer;