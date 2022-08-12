import { reducer as userReduser } from './user/user.slice'
import { reducer as movieReducer } from './movie/movie.slice'
import { reducer as videoReducer } from './video/video.slice'
import { reducer as homeReducer } from './home/home.slice'
import { reducer as searchReducer } from './search/search.slice'
import { reducer as settingsReducer } from './settings/settings.slice'

export const reducers = {
	user: userReduser,
	movie: movieReducer,
	video: videoReducer,
	home: homeReducer,
	search: searchReducer,
	settings: settingsReducer
}

