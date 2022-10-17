import { useTypedSelector } from './useTypedSelector'

export const useHistory = () => useTypedSelector((state) => state.history)