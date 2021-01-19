import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import getAllUsersReducer from "./modules/users/reducer";
import getProfileReducer from "./modules/profile/reducer";

const reducers = combineReducers({
  profile: getProfileReducer,
  users: getAllUsersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
