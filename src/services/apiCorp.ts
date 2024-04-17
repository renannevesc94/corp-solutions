import { apiCorp } from "../clients/api";
import { AuthType } from "../modules/auth/types";

export const corpAuth = (data: AuthType) => {
  return apiCorp.post("/auth", data);
};

export const getHirings = () => {
  return apiCorp.get("/hirings");
};
