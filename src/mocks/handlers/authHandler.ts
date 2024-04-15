import { HttpResponse, delay, http } from "msw";

export const authHandle = [
  http.post("https://apicorpsolutions.com/auth", async ({ request }) => {
    await delay(4200);
    return HttpResponse.json({});
  }),
];
