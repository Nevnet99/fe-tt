import axios from "axios";

const api = axios.create({
	baseURL: "https://fe-test-api-production.up.railway.app/api",
	headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY },
});

export default api;
