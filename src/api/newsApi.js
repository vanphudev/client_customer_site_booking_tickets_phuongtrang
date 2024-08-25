import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL_HOST || "https://example.com/api";

const NewsApi = {
   getAll: () => {
      return axios.post(`${BASE_URL}/news/get-all`);
   },
   getWithId: (id) => {
      return axios.get(`${BASE_URL}/news/get-with-id/${id}`);
   },
};

export default NewsApi;
