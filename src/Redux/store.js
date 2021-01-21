import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import getAllUsersReducer from "./modules/users/reducer";
import getProfileReducer from "./modules/profile/reducer";
import searchUserReducer from './modules/Search-User/reducer';
import projectsReducer from "./modules/projects/reducer";
import filteredProjectsReducer from "./modules/filteredProjects/reducer";

const reducers = combineReducers({
  filteredProjects: filteredProjectsReducer,
  projects: projectsReducer,
  users: getAllUsersReducer,
  searchUser: searchUserReducer,
  profile: getProfileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
