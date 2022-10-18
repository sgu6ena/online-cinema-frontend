import { LINKS } from './links'

export const getMovieUrl = (slug: string) => `/movies/${slug}`
export const getGenreUrl = (slug: string) => `/genres/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (slug: string) => `/admin/${slug}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)


export const getSettingsUrl = (slug:string)=> `${LINKS.SETTINGS}/${slug}`