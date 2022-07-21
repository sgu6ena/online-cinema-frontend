import { useTypedSelector } from './useTypedSelector'

export const useSearch= () => useTypedSelector((state) => state.search)