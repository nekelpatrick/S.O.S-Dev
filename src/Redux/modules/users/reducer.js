import { GET_ALL_USERS } from "./types";

const getAllUsersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      const { users } = action;
      return users;
    default:
      return state;
  }
};

export default getAllUsersReducer;
