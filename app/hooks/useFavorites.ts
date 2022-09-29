import { useTypedSelector } from './useTypedSelector'

export const useFavorites = () => useTypedSelector((state) => state.favorites)