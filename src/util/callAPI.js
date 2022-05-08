import axios from "axios";
export const callAPI = async (url, method, payload) => {
  let resp = null;
  // chua login tam thoi hardcode
 	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzczMTljNDFmZjUxZTQzNDllYThkMyIsImlhdCI6MTY1MTk3ODkwNX0.RCVnNlkEtxuVh9xiGGq5U1qNnVK_f36-025G0KyVXm4";
	const headers = {
		"Access-Control-Allow-Origin": `*`,
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
		"Access-Control-Allow-Headers": "X-Requested-With,content-type",
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
  	resp = await axios({
		method: method,
		url: `${process.env.REACT_APP_API_DOMAIN}${url}`,
		headers: headers,
		data: payload,
  })
    .then((res) => {
		resp = res.data;
		return resp;
    })
    .catch(error => {
		if (error.response) {
			return error.response.data
		  }
		else return error;
	});

  return resp;
};
