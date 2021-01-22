import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import getAllUsersReducer from "./modules/users/reducer";
import getProfileReducer from "./modules/profile/reducer";
import projectsReducer from "./modules/projects/reducer";
import filteredProjectsReducer from "./modules/filteredProjects/reducer";
import filteredUsersReducer from "./modules/filteredUsers/reducer";
import openProjectReducer from "./modules/projectsToOpen/reducer";

const reducers = combineReducers({
  filteredProjects: filteredProjectsReducer,
  filteredUsers: filteredUsersReducer,
  projects: projectsReducer,
  users: getAllUsersReducer,
  profile: getProfileReducer,
  openProject: openProjectReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
