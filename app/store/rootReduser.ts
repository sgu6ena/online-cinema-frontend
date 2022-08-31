import { reducer as homeReducer } from './home/home.slice'
import { reducer as movieReducer } from './movie/movie.slice'
import { reducer as searchReducer } from './search/search.slice'
import { reducer as settingsReducer } from './settings/settings.slice'
import { reducer as userReducer } from './user/user.slice'
import { reducer as videoReducer } from './video/video.slice'

export const reducers = {
	user: userReducer,
	movie: movieReducer,
	video: videoReducer,
	home: homeReducer,
	search: searchReducer,
	settings: settingsReducer,
}
