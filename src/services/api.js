import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://starmovies-api.onrender.com'
})