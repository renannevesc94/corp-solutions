import { useForm } from "react-hook-form";
import { zodRes } from "zod";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResover,
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};
