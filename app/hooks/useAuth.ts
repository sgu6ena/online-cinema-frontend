import { useTypedSelector } from './useTypedSelector'

export const useAuth = () => useTypedSelector((state) => state.user)
export const useRuble = () => useTypedSelector((state)=> state.user?.user?.promo)
export const isAdminSelector = () => useTypedSelector((state) => state.user?.user?.level === 5)
export const usePoint = () => useTypedSelector((state) => state.user?.user?.point )