import { useTypedSelector } from '../../hooks/useTypedSelector'

export const useMovie = () => useTypedSelector((state) => state.movie)