import axios from "axios";
export const callAPI = async (url, method, payload) => {
  let resp = null;

  const headers = {
    "Access-Control-Allow-Origin": `*`,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWIyYWU0ODJkYTZhOTdmOGI3YjFmMCIsImlhdCI6MTY1MTkxODg5MH0.lwujXggXINMA3ZOYnLVkTkohpGZlkmgOCyBIfvfvnv8`,
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
    .catch((error) => console.log("get error", error));
	
  	return resp;
};
