export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genres/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (slug: string) => `/admin/${slug}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
