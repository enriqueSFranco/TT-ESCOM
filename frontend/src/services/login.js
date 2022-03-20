import { $ajax } from "../utils/$ajax";

const baseUrl = "/api/Students/";

export const loginService = (credentials) => {
  let data = $ajax().POST(baseUrl, credentials)
    .then((response) => {
      if (!response.err) {
        console.info(response);
      }
    })
    .catch(err => {
      console.error(err);
      setTimeout(() => {

      }, 3000);
    });

  return data;
};

