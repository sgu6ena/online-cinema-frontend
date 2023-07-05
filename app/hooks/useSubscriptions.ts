import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useSubscriptions =   () => useTypedSelector((state) => state.settings.subscriptions)