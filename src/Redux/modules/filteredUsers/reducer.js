import { FILTERED_USERS } from "./types";

const filteredUsersReducer = (state = [], action) => {
  switch (action.type) {
    case FILTERED_USERS:
      const { users } = action;
      return users;

    default:
      return state;
  }
};

export default filteredUsersReducer;
