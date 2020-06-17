// setup config token - Helper Function
const tokenConfig = (getState) => {
  // get token
  const { token } = getState().auth;
  // set headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Adding Token
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
};

export default tokenConfig;
