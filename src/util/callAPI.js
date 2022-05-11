import axios from "axios";
export const callAPI = async (url, method, payload) => {
  let resp = null;
  // chua login tam thoi hardcode
 	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzczMTljNDFmZjUxZTQzNDllYThkMyIsImlhdCI6MTY1MjI4MDUzN30.c_p59uChIpWG5fajPSkhqVKCfjDvWKZAxXvry8sNAPo";
	const headers = {
		"Access-Control-Allow-Origin": "*",
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
