import { filteredUsers } from "./actions";

export const filteredUsersThunk = (value) => (dispatch, getState) => {
  const { users } = getState();

  const searchUsers = users.filter((e) =>
    e.user.toLowerCase().includes(value.toLowerCase())
  );
  dispatch(filteredUsers(searchUsers));
};
