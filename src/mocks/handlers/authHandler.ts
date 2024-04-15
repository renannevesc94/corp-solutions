import { HttpResponse, http } from "msw";

export const authHandle = [
  http.post("https://apicorpsolutions.com/auth", ({ request }) => {
    return HttpResponse.json({});
  }),
];
