import { reducer as homeReducer } from './home/home.slice'
import { reducer as movieReducer } from './movie/movie.slice'
import { reducer as searchReducer } from './search/search.slice'
import { reducer as settingsReducer } from './settings/settings.slice'
import { reducer as userReducer } from './user/user.slice'
import { reducer as videoReducer } from './video/video.slice'
import { reducer as genreReducer } from './genre/genre.slice'
import { reducer as favoritesReducer } from './favorites/slice'
import { reducer as historyReducer } from './history/slice'

export const reducers = {
	user: userReducer,
	movie: movieReducer,
	video: videoReducer,
	home: homeReducer,
	search: searchReducer,
	settings: settingsReducer,
	genre: genreReducer,
	favorites: favoritesReducer,
	history:historyReducer
}
