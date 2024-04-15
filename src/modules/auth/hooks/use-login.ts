import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthSchema, AuthType } from "../types";
import { usePostAuth } from "./use-post-auth";
import { useAuth } from "../../../providers/AuthProvider";

export const useLogin = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
  });

  const { mutate, isPending } = usePostAuth({
    onSuccess: data => {
      const token = data.data.token;
      login(token);
    },
    onError: e => {
      console.log(e);
    },
  });

  const onSubmit = (data: AuthType) => {
    mutate(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
  };
};
