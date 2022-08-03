import API from "../http.service";

const controller = new AbortController();

export const getAllJobs = async () => {
  try {
    const response = await API.get(import.meta.env.VITE_API_VACANTS_URL, {
      signal: controller.signal,
    });
    if (response.status === 200)
      return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
  controller.abort()
};