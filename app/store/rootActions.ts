import * as UserActions from './user/user.actions'
import * as MovieActions from './movie/movie.actions'
import * as VideoActions from './video/video.actions'
import {videoAC} from './video/video.slice'

export const allActions = {
    ...UserActions,
    ...MovieActions,
    ...VideoActions,
    ...videoAC
}
