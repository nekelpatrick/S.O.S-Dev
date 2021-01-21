import { FILTERED_USERS } from "./types";

export const filteredUsers = (users) => ({
  type: FILTERED_USERS,
  users,
});
