import axios from "axios";

export const loginService = async ({username, password}) => {
  try {
    const response = await axios.post('/api/token/', {username, password}, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return response;
  } catch (error) {
    return error.response.data.detail;
  }
};