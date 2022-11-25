import * as FavoritesActions from './favorites/actions'
import * as GenreActions from './genre/genre.actions'
import * as HistoryActions from './history/actions'
import * as HomeActions from './home/home.actions'
import * as MovieActions from './movie/movie.actions'
import { movieAC } from './movie/movie.slice'
import * as SearchActions from './search/search.actions'
import { searchAC } from './search/search.slice'
import * as SettingsActions from './settings/settings.actions'
import { settingsAC } from './settings/settings.slice'
import * as UserActions from './user/user.actions'
import * as VideoActions from './video/video.actions'
import { videoAC } from './video/video.slice'

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
	...movieAC,
	...HistoryActions,
	...searchAC,
}
