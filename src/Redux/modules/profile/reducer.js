import { GET_PROFILE } from "./types";

const getProfileReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROFILE:
      const { user } = action;
      return user;
    default:
      return state;
  }
};

export default getProfileReducer;
