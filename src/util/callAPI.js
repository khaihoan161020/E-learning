import axios from "axios";
export const callAPI = async (url, method, payload) => {
  let resp = null;

  const headers = {
    "Access-Control-Allow-Origin": `*`,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzdkY2ZmODRlMWRmNDcyZTg4YjAzZCIsImlhdCI6MTY1MjI4MzkwMX0.YoaGM-KugCIOOuVBE12DbpQS8GHzV6_VvpQv_nK_t24`,
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
