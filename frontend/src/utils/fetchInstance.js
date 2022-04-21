import axios from "axios";
// import dayjs from "dayjs";
// import jwt_decode from "jwt-decode";


const originalRequest = async (url, config) => {
  let response = await axios.get(url, config);
  let { data } = response;

  return { response, data };
}

const refreshToken = (newToken = {}) => {
  console.log(newToken)
  return axios.post('/api/token/refresh-token/', JSON.stringify({'refresh': newToken}), {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
    .then(response => {
      const { data } = response;
      window.sessionStorage.setItem('token', JSON.stringify(data));
      return data;
    })
    .catch(error => {
      if (error.response) return error.reposne.data.message;
    });
};


export const customFetch = async (url, config) => {
let token = window.sessionStorage.getItem('token') ? JSON.parse(window.sessionStorage.getItem('token')) : null;

  // config['headers'] = {Authorization: `Bearer ${token?.access}`}

  // const student = jwt_decode(token?.access);
  // const isExpired = dayjs.unix(student?.exp).diff(dayjs()) < 1;
  // console.log(token)
  
  // if (isExpired) token = await refreshToken(token?.refresh);

  let {response, data} = await originalRequest(url, config)
    console.log('After Request')

    if (response.statusText === 'Unauthorized'){
        token = await refreshToken(token)

        config['headers'] = {
            Authorization:`Bearer ${token?.access}`
        }

        let newResponse = await originalRequest(url, {Authorization: `Bearer ${token?.access}`})
        response = newResponse.response
        data = newResponse.data

    }

    return {response, data}
}