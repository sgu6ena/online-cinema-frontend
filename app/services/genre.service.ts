import axios from "axios";
import { axiosClassic } from "../api/interceptors";
import { getGenresUrl } from "../config/api.config";
import { IGenre } from "../shared/types/movie.types";

export const GenreService = {
  async getPopularGenres() {
    return axiosClassic.get<IGenre[]>(getGenresUrl("/popular"));
  },

  async getAll() {
    return axiosClassic.get<IGenre[]>(getGenresUrl(""));
  },

  async getPortal() {
    return axios.get('https://api.portal.idc.md/api/listGenre')
}
};