import axios from "axios";

const configOMB = {
  baseURL: `https://www.omdbapi.com/`,
};
const key = "b2441bf0";
const axiosInstance = axios.create(configOMB);

const API = {
  searchFilmsByTitle: <T>(title: string) => {
    return axiosInstance.get(`?t=${title}&apikey=${key}`);
  },
  searchFilmsByType: (title: string, type: string) => {
    return axiosInstance.get(`?t=${title}&type=${type}&apikey=${key}`);
  },
};

export default API;
