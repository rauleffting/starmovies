import axios from "axios";

export const api = axios.create({
  baseURL: "https://starmovies-api94.herokuapp.com"
});

api.get("/users/:id");