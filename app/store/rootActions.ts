import * as UserActions from './user/user.actions'
import * as MovieActions from './movie/movie.actions'


export const allActions = {
	...UserActions,
	...MovieActions
}
