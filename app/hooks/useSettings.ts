import { useTypedSelector } from './useTypedSelector'

export const useSettings = () => useTypedSelector((state) => state.settings)
export const isErrorSetting = () =>useTypedSelector((state) => state.settings.isError)