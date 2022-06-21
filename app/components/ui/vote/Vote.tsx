import cn from 'classnames'
import { FC } from 'react'

import { IVotePortal } from '../../../shared/types/movie.types'
import MaterialIcon from '../MaterialIcon'

import styles from './Vote.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import { toastError } from '../../../utils/toast-error'
import { toast } from 'react-hot-toast'

interface IVote {
	vote: IVotePortal
	onClick: (props: { movieId: any; vote: number }) => void
	my_vote: 0 | 1 | 2 | 3
	movieId: string
}

const Vote: FC<IVote> = ({
	vote: {
		// ats,
		dislike,
		like,
	},
	onClick,
	movieId,
	my_vote,
}) => {
	const {user} = useAuth()
	return (
		<div className={styles.vote}>
			<button
				className={cn(styles.like, my_vote === 3 && styles.myVote)}
				onClick={() => user ? onClick({ movieId, vote: my_vote === 3 ? 0 : 3 }) : toast.error('Вы должны войти для голосования')}
				title="Понравился фильм"
			>
				<MaterialIcon name={'MdThumbUp'} />
				{like}
			</button>

			<button
				className={cn(styles.dislike, my_vote === 1 && styles.myVote)}
				onClick={() =>  user ? onClick({ movieId, vote: my_vote === 1 ? 0 : 1 })  : toast.error('Вы должны войти для голосования')}
				title="Не понравился фильм"
			>
				<MaterialIcon name={'MdThumbDown'} />
				{dislike}
			</button>
		</div>
	)
}

export default Vote
