import { reducer as toastrReducer } from 'react-redux-toastr'

import { reducer as userReduser } from './user/user.slice'

export const reducers = {
	toastr: toastrReducer,
	user: userReduser,
}
