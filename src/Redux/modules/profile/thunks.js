import { api } from "../../../axios-globalConfig/axios-global";
import { getProfile } from "./actions";

export const getProfileThunk = (email, token) => (dispatch, getState) => {
  api.get("/users").then((res) => {
    const findUser = res.data.find((user) => user.email === email);
    findUser.token = token;
    dispatch(getProfile(findUser));
    console.log(findUser);
  });
};
