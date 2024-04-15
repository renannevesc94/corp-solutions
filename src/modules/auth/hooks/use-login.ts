import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthSchema, AuthType } from "../types";
import { usePostAuth } from "./use-post-auth";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
  });

  const { mutate, isPending } = usePostAuth({
    onSuccess: () => {
      console.log("sucesso");
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
