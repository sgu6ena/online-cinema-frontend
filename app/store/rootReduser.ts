import { reducer as userReduser } from './user/user.slice'
import { reducer as movieReducer } from './movie/movie.slice'
import { reducer as videoReducer } from './video/video.slice'


export const reducers = {
	user: userReduser,
	movie: movieReducer,
	video: videoReducer,
}

