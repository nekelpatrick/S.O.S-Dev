import { GET_PROFILE } from "./types";

const initialState = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : {};
};

const getProfileReducer = (state = initialState(), action) => {
  switch (action.type) {
    case GET_PROFILE:
      const { user } = action;
      return user;
    default:
      return state;
  }
};

export default getProfileReducer;
