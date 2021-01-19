import { getAllUsers } from "./actions";
import { api } from "../../../axios-globalConfig/axios-global";

export const getAllUsersThunk = () => (dispatch, getState) => {
  api.get("/users").then((res) => dispatch(getAllUsers(res.data)));
};
