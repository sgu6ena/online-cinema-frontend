import { reducer as userReduser } from './user/user.slice'
import { reducer as movieReducer } from './movie/movie.slice'

export const reducers = {
	user: userReduser,
	movie: movieReducer,
}
