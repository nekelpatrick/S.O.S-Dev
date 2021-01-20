import { GET_ALL_USERS } from "./types";

export const getAllUsers = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};
