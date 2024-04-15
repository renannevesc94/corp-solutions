import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "Informe sua senha" })
    .min(6, { message: "Mínimo de 6 caracteres" }),
});

export type AuthType = z.infer<typeof AuthSchema>;
