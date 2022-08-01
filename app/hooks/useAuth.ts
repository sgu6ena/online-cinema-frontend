import { useTypedSelector } from './useTypedSelector'

export const useAuth = () => useTypedSelector((state) => state.user)
export const useRuble = () => useTypedSelector((state)=> state.user?.user?.promo)