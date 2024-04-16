import { MutateOptions, useMutation } from "@tanstack/react-query";
import { AuthType } from "../types";
import { corpAuth } from "../../../services/apiCorp";
import { AxiosResponse } from "axios";

type SuccessResponse = AxiosResponse<{
  token: string;
}>;

export const usePostAuth = (options?: MutateOptions<SuccessResponse, unknown, AuthType>) => {
  return useMutation<SuccessResponse, unknown, AuthType>({
    mutationFn: async (data: AuthType) => await corpAuth(data),
    ...options,
  });
};
