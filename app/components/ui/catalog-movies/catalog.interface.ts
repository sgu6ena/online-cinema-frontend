import {IMovie, IMoviePortal, IMoviePortalPerPage} from "../../../shared/types/movie.types";

export interface ICatalog {
    title: string
    description?: string
    movies: IMovie[]
}

export interface ICatalogPortal {
    title: string
    description?: string
    data: IMoviePortalPerPage
    currentPage: number
}