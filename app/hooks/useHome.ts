import { useTypedSelector } from './useTypedSelector'

export const useHome = () => useTypedSelector((state) => state.home)