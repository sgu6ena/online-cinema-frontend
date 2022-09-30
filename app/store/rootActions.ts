import * as HomeActions from './home/home.actions'
import * as MovieActions from './movie/movie.actions'
import * as SearchActions from './search/search.actions'
import * as SettingsActions from './settings/settings.actions'
import { settingsAC } from './settings/settings.slice'
import * as UserActions from './user/user.actions'
import * as VideoActions from './video/video.actions'
import { videoAC } from './video/video.slice'
import * as GenreActions from './genre/genre.actions'
import * as FavoritesActions from './favorites/actions'
import {movieAC} from './movie/movie.slice'

export const allActions = {
	...UserActions,
	...MovieActions,
	...VideoActions,
	...videoAC,
	...HomeActions,
	...SearchActions,
	...SettingsActions,
	...settingsAC,
	...GenreActions,
	...FavoritesActions,
	...movieAC
}
