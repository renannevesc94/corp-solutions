import { HttpResponse, delay, http } from "msw";
import { AuthType } from "../../modules/auth/types";

const users = [
  {
    id: "01",
    email: "renan.epd@gmail.com",
    password: "12345678",
    roole: "admin",
  },
  {
    id: "02",
    email: "usuario@corpsolution.com",
    password: "12345678",
    roole: "user",
  },
  {
    id: "03",
    email: "manoel@hotmail.com",
    password: "203045",
    roole: "user",
  },
];

type Response = {
  token?: string;
  message?: string;
  roole?: string;
};
export const authHandle = [
  http.post<AuthType, AuthType, Response>(
    "https://apicorpsolutions.com/auth",
    async ({ request }) => {
      await delay(1200);
      const dataRequest = await request.json();
      const userLogged = users.find(user => {
        return user.email === dataRequest.email && user.password === dataRequest.password;
      });

      return userLogged
        ? HttpResponse.json({ token: "12345678", roole: userLogged.roole }, { status: 200 })
        : HttpResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
    }
  ),
];
