import { useTypedSelector } from './useTypedSelector'

export const useFavorites = () => useTypedSelector((state) => state.favorites)
export const useFavoritesById = (id:string) => useTypedSelector((state) => !!state.favorites.favoritesId?.find(item => item ==id))