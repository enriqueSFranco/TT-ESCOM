import API from 'services/http-service'

export const loginService = async ({ username, password }) => {
  try {
    const response = await API.post(process.env.REACT_APP_URL_TOKEN, { username, password });
    return response;
  } catch (error) {
    return error;
  }
};
