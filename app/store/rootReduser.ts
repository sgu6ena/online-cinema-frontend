import { reducer as userReduser } from './user/user.slice'
import { reducer as movieReducer } from './movie/movie.slice'
import { reducer as videoReducer } from './video/video.slice'
import { reducer as homeReducer } from './home/home.slice'

export const reducers = {
	user: userReduser,
	movie: movieReducer,
	video: videoReducer,
	home: homeReducer,
}

