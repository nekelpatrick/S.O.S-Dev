import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import getAllUsersReducer from "./modules/users/reducer";
import getProfileReducer from "./modules/profile/reducer";
import projectsReducer from "./modules/projects/reducer";

const reducers = combineReducers({
  projects: projectsReducer,
  users: getAllUsersReducer,
  profile: getProfileReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
