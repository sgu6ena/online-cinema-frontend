import { useTypedSelector } from './useTypedSelector'

export const useGenreById = () => useTypedSelector((state) => state.genre)