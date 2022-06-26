import { useTypedSelector } from './useTypedSelector'

export const useMovie = () => useTypedSelector((state) => state.movie)