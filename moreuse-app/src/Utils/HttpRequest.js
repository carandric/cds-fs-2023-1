import axios from "axios";

const headersConfig = (token) => {
  return {
    "Contect-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
  }
}

export const HTTP_METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete"
}

export const httpRequest = async ({
  method=HTTP_METHODS.POST,
  endpoint='/',
  body={},
  params={},
  token = null
}) => {
  try{
    // const url = 'http://localhost:3000' + endpoint;
    const address = 'localhost';
    // const address = '35.171.17.180';
    const port = '3000';
    const url = `http://${address}:${port}${endpoint}`;
    const options = {
      method,
      url,
      data: body,
      params,
      headers: headersConfig(token)
    };
    return await axios(options);
  } catch(error){
    throw error;
  }
}
