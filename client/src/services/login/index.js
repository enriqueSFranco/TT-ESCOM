import API from '../http.service'

export const loginService = async ({username, password}) => {
  try {
    const response = await API.post(import.meta.env.VITE_API_TOKEN, {username, password}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return response;
  } catch (error) {
    return error;
  }
}