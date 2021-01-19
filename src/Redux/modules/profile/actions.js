import { GET_PROFILE } from "./types";

export const getProfile = (user) => {
  return {
    type: GET_PROFILE,
    user,
  };
};
