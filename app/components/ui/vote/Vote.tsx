import cn from 'classnames'
import { FC } from 'react'

import { IVotePortal } from '../../../shared/types/movie.types'
import MaterialIcon from '../MaterialIcon'

import styles from './Vote.module.scss'
import { log } from 'util'

interface IVote {
	vote: IVotePortal;
	onClick: (props: { movieId: any; vote: number }) => void;
	my_vote: 0 | 1 | 2 | 3;
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


	return (
		<div className={styles.vote}>
			{console.log(my_vote)}
			<button
				className={cn(styles.like, my_vote === 3 && styles.myVote)}
				onClick={() => onClick({ movieId, vote: my_vote === 3 ? 0 : 3 })}
				title='Понравился фильм'
			>
				<MaterialIcon name={'MdThumbUp'} />
				{like}
			</button>

			<button
				className={cn(styles.dislike, my_vote === 1 && styles.myVote)}
				onClick={() => onClick({ movieId, vote: my_vote === 1 ? 0 : 1 })}
				title='Не понравился фильм'
			>
				<MaterialIcon name={'MdThumbDown'} />
				{dislike}
			</button>
		</div>
	)
}

export default Vote
